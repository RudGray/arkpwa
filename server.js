const express = require('express');
const path = require('path');
const Parse = require('parse/node');
const cors = require('cors');
const app = express();

// Middleware
// app.use(cors({
//   origin: function (origin, callback) {
//     console.log('cors')
//     console.log('origin', origin);

//     const allowedOrigins = ['http://localhost:8080', 'https://arkpwa.herokuapp.com'];
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.indexOf(origin) === -1) {
//       return callback(new Error('Origin not allowed by CORS'), false);
//     }
//     return callback(null, true);
//   }
// }));

// Paramètres CORS pour autoriser les requêtes depuis n'importe quelle origine en mode développement
app.use(cors());


//Informe le server de la localisation des fichiers statiques
app.use(express.static('public'));
// app.use('/public', express.static(path.join(__dirname, 'public')));
// Serve the private files
app.use('/private', express.static(path.join(__dirname, 'private')));
// app.use(express.static('style'));
app.use('/style', express.static('style'));

//back4app parse server
Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'T77ONDMADOUDe5HzLEdYAdIcl0VRTclFlbhQVXS7', // This is your Application ID
  'r48cVgYk1O5821fIkxmW1E0YF33Rnq8vPCWp9iJo', // This is your Javascript key
  'ZNkKDp7wurOXUSTEccDwGpZvrE0cqfEsQE1YOct1' // This is your Master key (never use it in the frontend)
);




app.get('/', (req, res) => {
  console.log("route /");
  console.log(__dirname);
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/register', async (req, res) => {
  console.log('register')
  const {password, email} = req.body;
  
  // Use Parse to register the user
  let user = new Parse.User();
  user.set("password", password);
  user.set("email", email);

  console.log('user', user) 

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
  const user = Parse.User.current(); // or your own method of getting the user
  
  if (user) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
});



const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

