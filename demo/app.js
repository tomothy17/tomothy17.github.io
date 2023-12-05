let auth2;

function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
}

function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

function sendMessage() {
    const message = $('#message-input').val();
    $('#chat-messages').append(`<p>${message}</p>`);
    // You can send the message to the server and save it in the database here
    $('#message-input').val(''); // Clear the input field
}
