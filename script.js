const div = document.getElementById('output');
const info = document.getElementById('info');

let btns = undefined;

//variables
let runs = 0;
let total = 0;
//

function clear(){
    div.innerHTML = '';
}

function initialRender(cx,cy){
    clear();
    let log = []
    let col = Math.floor(Math.random() * 255);
    for (let ry = 1; ry <= cy; ry++){
        for (let rx = 1; rx <= cx; rx++){
            if (log.length < cx){
                col += Math.floor(Math.random() * 101) - 50;
            } else {
                col = (col + log[log.length-cx])/2 + Math.floor(Math.random() * 101) - 50;
            }
            
            if (col < 0) {col = 0}
            else if (col > 255) {col = 255};

            log.push(col);

            div.innerHTML +=
            `<button class="btn" 
            style="background-color:rgb(${col},${col},${col})"
            ></button>`; //id=btn${log.length}
        }
        div.innerHTML += '<br>';
    }
    //btns = document.querySelectorAll('.btn');
    runs++;
    return log;
}

function render(log,cx,cy){
    clear();
    let newLog = []
    let idx = 0;
    let dstart = new Date();
    for (let ry = 1; ry <= cy; ry++){
        for (let rx = 1; rx <= cx; rx++){
            let col = log[idx];
            col += Math.floor(Math.random() * 21) - 10;
            
            if (col < 0) {col = 0}
            else if (col > 255) {col = 255};

            newLog.push(col);

            div.innerHTML +=
            `<button class="btn" 
            style="background-color:rgb(${col},${col},${col})"
            ></button>`; //id=btn${log.length}

            idx++;
        }
        div.innerHTML += '<br>';
    }
    runs++;
    let dend = new Date();
    getDelta(dstart,dend);
    return newLog
}

function updateInfo(delta){
    if (!delta) {
        delta = '?'
    } else {
        total += delta;
    }

    info.innerHTML =
    `<b>Information</b><br>
    Runs: ${runs}<br>
    Speed: ${delta}ms (${delta/1000}s)<br>
    Elapsed: ${total/1000}s`
}

function getDelta(start,end){
    let delta = end-start
    updateInfo(delta);
}

/*btns.forEach(button => {
    button.addEventListener('click', event => {
        let btn = document.getElementById(event.target.id);
        btn.style.backgroundColor = 'red'
    })
})*/

let log = initialRender(20,12);

setInterval(() => {
    log = render(log,20,12);
    updateInfo(getDelta(dstart,dend));
}, 100);

updateInfo();