const div = document.getElementById('div')

const inputx = document.getElementById('inputx')
const inputy = document.getElementById('inputy')

var canvasx = 20
var canvasy = 12

function generate(){
    div.innerHTML = ''
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    let logr = []
    let logg = []
    let logb = []

    canvasx = inputx.value
    canvasy = inputy.value

    for (let ry = 0; ry <= canvasy; ry++){
        for (let rx = 0; rx <= canvasx; rx++){

            if (logr.length <= canvasx) {
                r += Math.floor(Math.random() * 51) -25
                g += Math.floor(Math.random() * 51) -25
                b += Math.floor(Math.random() * 51) -25
            } else {
                r = Math.round((r + logr[logr.length-canvasx])/2) + Math.floor(Math.random() * 51) -25
                g = Math.round((g + logg[logg.length-canvasx])/2) + Math.floor(Math.random() * 51) -25
                b = Math.round((b + logb[logb.length-canvasx])/2) + Math.floor(Math.random() * 51) -25

                //r += Math.round((r + logr[logr.length-canvasx])/2) + Math.floor(Math.random() * 51) -25
                //g += Math.round((g + logg[logg.length-canvasx])/2) + Math.floor(Math.random() * 51) -25
                //b += Math.round((b + logb[logb.length-canvasx])/2) + Math.floor(Math.random() * 51) -25
            }

            if (r > 255) {r = 255}
            else if (r < 0) {r = 0}

            if (g > 255) {g = 255}
            else if (g < 0) {g = 0}

            if (b > 255) {b = 255}
            else if (b < 0) {b = 0}

            div.innerHTML += `<span style="color:rgb(${r},${g},${b})">█</span>`
            
            logr.push(r)
            logg.push(g)
            logb.push(b)

        }
        div.innerHTML += '<br>'
    }
}

generate()

function downloadImage() {
    const divContent = document.getElementById("div");

    html2canvas(divContent).then(canvas => {
        const dataURL = canvas.toDataURL("image/png");

        const a = document.createElement("a");

        a.href = dataURL;
        a.download = "weird_image.png";

        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);
    });
}
