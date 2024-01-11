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
    let logr = []
    let logg = []
    let logb = []
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    for (let ry = 1; ry <= cy; ry++){
        for (let rx = 1; rx <= cx; rx++){
            if (logr.length < cx){
                r += Math.floor(Math.random() * 101) - 50;
                g += Math.floor(Math.random() * 101) - 50;
                b += Math.floor(Math.random() * 101) - 50;
            } else {
                r = (r + logr[logr.length-cx])/2 + Math.floor(Math.random() * 101) - 50;
                r = (g + logg[logg.length-cx])/2 + Math.floor(Math.random() * 101) - 50;
                b = (b + logb[logb.length-cx])/2 + Math.floor(Math.random() * 101) - 50;
            }
            
            if (r < 0) {r = 0}
            else if (r > 255) {r = 255};

            if (g < 0) {g = 0}
            else if (g > 255) {g = 255};

            if (b < 0) {b = 0}
            else if (b > 255) {b = 255};

            logr.push(r);
            logg.push(g);
            logb.push(b);

            div.innerHTML +=
            `<button class="btn" 
            style="background-color:rgb(${r},${g},${b})"
            ></button>`; //id=btn${log.length}
        }
        div.innerHTML += '<br>';
    }
    //btns = document.querySelectorAll('.btn');
    runs++;
    return {logr,logg,logb};
}

function render(logr,logg,logb,cx,cy){
    clear();
    let newLogr = []
    let newLogg = []
    let newLogb = []
    let idx = 0;
    let dstart = new Date();
    for (let ry = 1; ry <= cy; ry++){
        for (let rx = 1; rx <= cx; rx++){
            let r = logr[idx];
            let g = logg[idx];
            let b = logb[idx];

            r += Math.floor(Math.random() * 21) - 10;
            g += Math.floor(Math.random() * 21) - 10;
            b += Math.floor(Math.random() * 21) - 10;
            
            if (r < 0) {r = 0}
            else if (r > 255) {r = 255};

            if (g < 0) {g = 0}
            else if (g > 255) {g = 255};

            if (b < 0) {b = 0}
            else if (b > 255) {b = 255};

            newLogr.push(r);
            newLogg.push(g);
            newLogb.push(b);

            div.innerHTML +=
            `<button class="btn" 
            style="background-color:rgb(${r},${g},${b})"
            ></button>`; //id=btn${log.length}

            idx++;
        }
        div.innerHTML += '<br>';
    }
    runs++;
    let dend = new Date();
    getDelta(dstart,dend);
    return {newLogr, newLogg, newLogb}
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

let { logr, logg, logb } = initialRender(20, 12);

setInterval(() => {
    const { newLogr, newLogg, newLogb } = render(logr, logg, logb, 20, 12);
    logr = newLogr;
    logg = newLogg;
    logb = newLogb;
    updateInfo(getDelta(dstart,dend));
}, 100);

updateInfo();
