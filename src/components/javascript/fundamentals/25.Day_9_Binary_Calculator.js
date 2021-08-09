// CSS
/*
body {
  width: 33%;
}

button {
  width: 25%;
  height: 36px;
  font-size: 18px;
  margin: 0px;
  float: left;
}

#res {
  background-color: lightgray;
  border: solid;
  height: 48px;
  font-size: 20px;
}

#btn0, #btn1 {
  background-color: lightgreen;
  color: brown;
}

#btnClr, #btnEql {
  background-color: darkgreen;
  color: white;
}

#btnSum, #btnSub, #btnMul, #btnDiv {
  background-color: black;
  color: red;
}
*/

// JS
const res = document.querySelector('#res')
const btns = [...document.querySelectorAll('button')]

const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '÷': (a, b) => Math.floor(a / b)
}

function action (e) {
  let pressed = document.getElementById(e.target.id)
  if (pressed.id === 'btnSum') res.innerHTML += '+'
  if (pressed.id === 'btnSub') res.innerHTML += '-'
  if (pressed.id === 'btnMul') res.innerHTML += '*'
  if (pressed.id === 'btnDiv') res.innerHTML += '÷'
  if (pressed.id === 'btn0') res.innerHTML += '0'
  if (pressed.id === 'btn1') res.innerHTML += '1'
  if (pressed.id === 'btnClr') res.innerHTML = ''
  if (pressed.id === 'btnEql') {
    const [op1, operator, op2] = res.innerText.split(/\b/)
    const [n1, n2] = [parseInt(op1, 2), parseInt(op2, 2)]
    res.innerText = Number(ops[operator](n1, n2)).toString(2)
  }
}

btns.forEach(btn => btn.addEventListener('click', action))
// HTML
/*
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Button</title>
  <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
</head>
<body>
  <div>
    <div id="res"></div>
    <div id="btns">
      <div>
        <button id="btn0">0</button>
        <button id="btn1">1</button>
        <button id="btnClr">C</button>
        <button id="btnEql">=</button>
      </div>
      <div>
        <button id="btnSum">*</button>
        <button id="btnSub">-</button>
        <button id="btnMul">*</button>
        <button id="btnDiv">/</button>
      </div>
    </div>
  </div>
  <script src="js/binaryCalculator.js" type="text/javascript"></script>
</body>
</html>
*/

