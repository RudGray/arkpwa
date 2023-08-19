const express = require('express');
const path = require('path');
const Parse = require('parse/node');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// Middleware CORS
app.use(cors({
  origin: function (origin, callback) {
    console.log('cors')
    console.log('origin', origin);
    // const allowedOrigins = ['http://localhost:8080', 'https://arkpwa.herokuapp.com'];
    const allowedOrigins = process.env.NODE_ENV === 'development' 
    ? ['http://localhost:3000'] 
    : ['https://arkpwa.herokuapp.com'];
    // if (!origin) return callback(new Error('Origin is undefined'), false);
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      console.error(`Origin "${origin}" is not allowed by CORS.`);
      return callback(new Error('Origin not allowed by CORS'), false);
    }
    return callback(null, true);
  }
}));

// Vérification des entêtes avec middleware
// app.use((req, res, next) => {
//   console.log('middleware');
//   console.log('req.headers.origin', req.headers.origin);
//   console.log('req.headers', req.headers);
//   next();
// });

// Route principale
// app.get('/', (req, res) => {
//   console.log("route /");
//   console.log(__dirname);
//   res.sendFile(__dirname + '/public/index.html');
// });

// Serveur de fichiers statiques
// Si en mode développement, créez un proxy pour rediriger toutes les requêtes non traitées vers le serveur de développement React
if (process.env.NODE_ENV === 'DEV') {
  app.use('/', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
} else {
  // en mode production, servez le build de React
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}


// Configuration de Parse
// Parse.serverURL = 'https://parseapi.back4app.com';

Parse.initialize(
  process.env.PARSE_APPLICATION_ID,
  process.env.PARSE_JS_KEY,
  process.env.PARSE_MASTER_KEY
);

app.post('/register', async (req, res) => {
  console.log('register');
  const { password, email } = req.body;

  let user = new Parse.User();
  user.set("password", password);
  user.set("email", email);

  console.log('user', user);

  try {
    await user.signUp();
    res.status(200).send({ success: true });
    console.log('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
    console.log("Error: " + error.code + " " + error.message);
  }
});

// Serve the private files only to authenticated users
app.get('/private/*', function(req, res, next) {
  const user = Parse.User.current();
  if (user) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
});

// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
module.exports = app;