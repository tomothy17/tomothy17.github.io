const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const dimensions = {width:604.8*1.2, height:806.4*1.2};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.translate(window.innerWidth/2,window.innerHeight/2);

const image = new Image();
image.src = 'pickle.png';

const loops = 50;
const offsetDistance = 200;
let currentOffset = 0;

image.onload = () => {
    startLooping();
}

function draw(offset) {
    context.drawImage(image,
        -dimensions.width/2 - offset/2,
        -dimensions.height/2 - offset/2,
        dimensions.width + offset,
        dimensions.height + offset
    );
}

function loopDraw() {
    for(let i = loops; i >= 0; i--) {
        draw(i*offsetDistance+currentOffset+offsetDistance-10);
    }

    draw(offsetDistance);

    currentOffset++;
    if (currentOffset >= offsetDistance) {
        currentOffset = 0;
    }

    requestAnimationFrame(loopDraw);
}

function startLooping() {
    requestAnimationFrame(loopDraw);
}

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.setTransform(1,0,0,1,0,0);
    context.translate(window.innerWidth/2,window.innerHeight/2);
};

const ct = document.getElementById('clock-time');

const start = Math.floor(Date.now()/1000);

function update() {
    const current = Math.floor(Date.now()/1000);
    ct.innerHTML = current-start;
}

setInterval(update,1000);