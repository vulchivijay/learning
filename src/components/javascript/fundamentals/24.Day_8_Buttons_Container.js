// CSS
/*
#btns {
  width: 75%;
}

#btns > div > button {
  width: 30%;
  height: 48px;
  font-size: 24px;
}
*/

// JS
let nums = [1, 2, 3, 6, 9, 8, 7, 4]
const ids = [1, 2, 3, 6, 9, 8, 7, 4]

let btn5 = document.getElementById('btn5')

btn5.onclick = function () {
  nums.unshift(nums.pop())
  for (let i = 0; i <= 7; i++) {
    document.getElementById('btn' + ids[i]).innerHTML = nums[i]
  }
}

// HTML
/*
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Button</title>
  <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
</head>
<body>
  <div id="btns">
    <div>
      <button id="btn1">1</button>
      <button id="btn2">2</button>
      <button id="btn3">3</button>
    </div>
    <div>
      <button id="btn4">4</button>
      <button id="btn5">5</button>
      <button id="btn6">6</button>
    </div>
    <div>
      <button id="btn7">7</button>
      <button id="btn8">8</button>
      <button id="btn9">9</button>
    </div>
  </div>
  <script src="js/buttonsGrid.js" type="text/javascript"></script>
</body>
</html>
*/

