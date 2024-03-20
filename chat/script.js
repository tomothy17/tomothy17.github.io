const input = document.getElementById('input');
const send = document.getElementById('send');
const chatContainer = document.getElementById('chat-container');

let brain = [];

function addChat(left, color, content) {
    let chatMessage = document.createElement('div');
    chatMessage.className = 'chat-message ' + (left ? 'left' : 'right');
    chatMessage.style.backgroundColor = color;
    chatMessage.textContent = content;
    chatContainer.appendChild(chatMessage);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function respond() {
    let response = brain[Math.floor(Math.random()*brain.length)];
    addChat(true, 'rgb(55, 255, 55)', response);
}

function userChat() {
    let msg = input.value;
    if (msg.trim() !== '') {
        brain.push(msg);
        addChat(false, 'rgb(55, 155, 255)', msg);
        input.value = '';
        setTimeout(respond,Math.random()*1000)
   }
}

send.addEventListener('click', userChat);