var output = document.getElementById('output');

var inputx = document.getElementById('inputx');
var inputy = document.getElementById('inputy');

var canvasx = inputx.value;
var canvasy = inputy.value;

const chars = ['░','▒','▓','█'];

function clear(thing=output){
    thing.innerText = ''
}

function add(string='�',thing=output) {
    thing.innerText = thing.innerText + string
}

var depth = Math.floor(Math.random() * chars.length);

var log = []

function generate(){
    clear();
    canvasx = inputx.value;
    canvasy = inputy.value;

    for (let reny = 1; reny <= canvasy; reny++) {
        for (let renx = 1; renx <= canvasx; renx++) {
            // output chosen character
            add(chars[depth]);
            log.push(depth);

            // change character shade
            if (log.length < canvasx) {
                depth += Math.floor(Math.random() * 3) - 1;
            } else {
                depth = Math.round((log[log.length-canvasx] + depth)/2) + Math.floor(Math.random() * 3) - 1;
            }
            
            // make sure depth isnt out of range
            if (depth > chars.length-1){depth = chars.length-1}
            else if (depth < 0) {depth = 0};
        }
        // output on new line
        add('\n');
    }

    return log, canvasx, canvasy
}

generate()