const input = document.getElementById('input');
const output = document.getElementById('output');

const img = document.querySelector('img');

img.style.opacity = 0;

const funny_nums = [69,420,80085,33];

function die() {
    let opacity = 1;

    function fade() {
        opacity -= 0.1;
        input.style.opacity = opacity;
        output.style.opacity = opacity;

        img.style.opacity = 1-opacity
        
        if (opacity > 0) {
            setInterval(fade,100);
        }
    }

    fade();
}

function update() {
    let num = eval(input.value)
    output.innerHTML = num;

    if (funny_nums.includes(num)) {
        input.disabled = true;
        die();
    }
}

input.addEventListener('input', update);