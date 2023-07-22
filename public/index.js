/**
 * 
 */

Parse.initialize("T77ONDMADOUDe5HzLEdYAdIcl0VRTclFlbhQVXS7", "r48cVgYk1O5821fIkxmW1E0YF33Rnq8vPCWp9iJo");
Parse.serverURL = 'https://parseapi.back4app.com';

window.onload = function() {
    // Check if the user is connected
    if (Parse.User.current()) {
        // If the user is connected and we're not on the home page, redirect to home
        if (window.location.pathname !== "/home.html") {
            window.location.href = "/home.html";
        }

    }
}

// -------------------------- Index

// Code spécifique à index.html
if (window.location.pathname === "/index.html") {

    document.getElementById('connexion').addEventListener('click', function() {
        // Rediect to the connexion page
        window.location.href = "connexion.html";
    });

}



// -------------------------- Connexion

// Code spécifique à connexion.html
if (window.location.pathname === "/connexion.html") {
    
    // Change the form to show to-register-form
    document.getElementById('to-register-form').addEventListener('click', function() {
        document.getElementById('login-section').classList.add('hidden');
        document.getElementById('register-section').classList.remove('hidden');
    });
    
    // Change the form to show to-login-form
    document.getElementById('to-login-form').addEventListener('click', function() {
        document.getElementById('register-section').classList.add('hidden');
        document.getElementById('login-section').classList.remove('hidden');
    });
    
    //Intercept the form connexion from the connexion page
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Get the data from the form
        var email = document.getElementById('login-email').value;
        var password = document.getElementById('login-password').value;
    
        Parse.User.logIn(email, password).then(function(user) {
            console.log("Login successful for user: " + user.get("username"));
            window.location.href = "index.html";
        }).catch(function(error){
            console.log("Error: " + error.code + " " + error.message);
            document.getElementById('message').innerHTML = "Erreur de connexion: " + error.message;
        });
    });
    
    //Intercept the form register from the connexion page
    document.getElementById('register-form').addEventListener('submit', function(e) {
        console.log('register')
        console.log('e', e)
        e.preventDefault();
    
        // Get the data from the form
        var email = document.getElementById('register-email').value;
        var password = document.getElementById('register-password').value;

        console.log('email', email)
        console.log('password', password)
    
        // Create a new Parse User
        var user = new Parse.User();
        user.set("username", email);
        user.set("password", password);
        user.set("email", email);
    
        console.log('user', user)

        user.signUp()
        .then((user) => {
            console.log('User created successful with name: ' + user.get("username"));
            window.location.href = "index.html";
        }).catch((error) => {
            console.error("Error: " + error.code + " " + error.message);
            document.getElementById('message').innerHTML = "Erreur d'inscription : " + error.message;
        });
    });
    
    //Intercept the authentification sso from the connexion page
    // document.getElementById('sso').addEventListener('click', function(e) {
    //     e.preventDefault();
    //     // Call the cloud function sso
    //     Parse.Cloud.run('sso').then(function(result) {
    //         // If the sso is a success
    //         if (result == true) {
    //             // Rediect to the home page
    //             window.location.href = "index.html";
    //         } else {
    //             // Else, display an error message
    //             document.getElementById('error').innerHTML = "Erreur d'authentification";
    //             console.log("Erreur d'inscription");
    //         }
    //     });
    // });



}


