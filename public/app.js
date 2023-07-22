
Parse.initialize("T77ONDMADOUDe5HzLEdYAdIcl0VRTclFlbhQVXS7", "r48cVgYk1O5821fIkxmW1E0YF33Rnq8vPCWp9iJo");
Parse.serverURL = 'https://parseapi.back4app.com';

window.onload = function() {
    // Check if the user is connected
    if (!Parse.User.current()) {
    //     // If the user is connected and we're not on the home page, redirect to home
    //     if (window.location.pathname !== "/home.html") {
    //         window.location.href = "/home.html";
    //     }
    // } else {
        // If the user is not connected and we're not on the connexion page, redirect to connexion
        if (window.location.pathname !== "/connexion.html") {
            window.location.href = "/connexion.html";
        }
    }
}

window.addEventListener('load', function() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        // Show the current user name
        document.getElementById('username').textContent = currentUser.get('username');
        // Log out the user
        document.getElementById('logout').addEventListener('click', function() {
            Parse.User.logOut().then(() => {
                // Redirect to the login page after logout
                window.location.href = "/index.html";
            });
        });
    } else {
        // Redirect to login page if no user is logged in
        window.location.href = "/index.html";
    }
});