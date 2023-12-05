let auth2;
let currentUser;

function authenticateGoogle() {
    gapi.load('auth2', function() {
        gapi.auth2.init().then(function() {
            auth2 = gapi.auth2.getAuthInstance();
            auth2.signIn().then(onSignIn);
        });
    });
}

function onSignIn(googleUser) {
    currentUser = googleUser.getBasicProfile();
    console.log('ID: ' + currentUser.getId());
    console.log('Name: ' + currentUser.getName());
    console.log('Email: ' + currentUser.getEmail());
}

function signOut() {
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

function sendMessage() {
    const message = $('#message-input').val();
    const firstName = currentUser.getGivenName();
    $('#chat-messages').append(`<p><strong>${firstName}:</strong> ${message}</p>`);
    
    // You can send the message along with the user's information to the server and save it in the database here
    $.post("save_message.php", { firstName: firstName, message: message });
    
    $('#message-input').val(''); // Clear the input field
}
