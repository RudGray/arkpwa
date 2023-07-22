const Parse = require('parse/node');

Parse.serverURL = 'https://parseapi.back4app.com'; // C'est votre URL de serveur
Parse.initialize(
    'T77ONDMADOUDe5HzLEdYAdIcl0VRTclFlbhQVXS7', // This is your Application ID
    'r48cVgYk1O5821fIkxmW1E0YF33Rnq8vPCWp9iJo', // This is your Javascript key
    'ZNkKDp7wurOXUSTEccDwGpZvrE0cqfEsQE1YOct1' // This is your Master key (never use it in the frontend)
  );

const user = new Parse.User();
user.set("username", "my name2");
user.set("password", "my pass2");
user.set("email", "email2@example.com");

// other fields can be set just like with Parse.Object
user.set("phone", "415-392-0202");

user.signUp().then((user) => {
  console.log('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
}).catch((error) => {
  console.log("Error: " + error.code + " " + error.message);
});

