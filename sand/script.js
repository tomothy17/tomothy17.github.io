const sandbox = document.getElementById('sandbox');

const w = 20;
const h = 12;

let log = [0];

for (let i = 0; i < w*h; i++) {log.push(0)}

let idx = 0
for (let y = 1; y <= h; y++) {
    for (let x = 1; x <= w; x++) {
        sandbox.innerHTML += `<button id='${idx}' class='sand'>o</button>`;
        idx++;
    }
    sandbox.innerHTML += '<br>';
}

const btns = document.querySelectorAll('button');

function render() {
    for (let i = 0; i < log.length; i++) {
        if (log[i] == 0) {
            document.getElementById(i).style.backgroundColor = 'white'
        } else if (log[i] == 1) {
            document.getElementById(i).style.backgroundColor = 'black'
        }
    }
}

function tick() {
    const toMove = [];

    for (let i = 0; i < log.length-w; i++) {
        if (log[i] == 1 && log[i+w] == 0) {
            toMove.push(i);
        }
    }

    toMove.forEach(index => {
        log[index] = 0;
        log[index + w] = 1;
    });

    render();
}

let isMouseDown = false;

document.addEventListener('mousedown', function() {
    isMouseDown = true;
});

document.addEventListener('mouseup', function() {
    isMouseDown = false;
});

btns.forEach(btn => {
    btn.addEventListener('mouseover', function () {
        if (isMouseDown) {
            log[parseInt(btn.id)] = 1;
            render();
        }
    });
});

btns.forEach(btn => {
    btn.addEventListener('click', function() {
        log[parseInt(btn.id)] = 1;
        render();
    });
});

setInterval(tick,100)