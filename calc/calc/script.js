const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const output = document.getElementById('output');

const add = document.getElementById('add');
const sub = document.getElementById('sub');
const mul = document.getElementById('mul');
const div = document.getElementById('div');

function getValues() {
    let input1val = Number(input1.value);
    let input2val = Number(input2.value);
    return [input1val, input2val]
}

add.addEventListener('click',function() {
    let values = getValues();
    output.innerHTML = `${values[0]} + ${values[1]} = ${values[0]+values[1]}`;
})

sub.addEventListener('click',function() {
    let values = getValues();
    output.innerHTML = `${values[0]} - ${values[1]} = ${values[0]-values[1]}`;
})

mul.addEventListener('click',function() {
    let values = getValues();
    output.innerHTML = `${values[0]} * ${values[1]} = ${values[0]*values[1]}`;
})

div.addEventListener('click',function() {
    let values = getValues();
    output.innerHTML = `${values[0]} / ${values[1]} = ${values[0]/values[1]}`;
})