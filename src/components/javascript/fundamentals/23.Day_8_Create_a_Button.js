// CSS
/*
#btn {
  width: 96px;
  height: 48px;
  font-size: 24px;
}
*/

// JS
function increase () {
  var value = +document.getElementById('btn').innerHTML
  document.getElementById('btn').innerHTML = value + 1
}

// HTML
/*
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Button</title>
  <link rel="stylesheet" href="css/button.css" type="text/css">
</head>
<body>
  <button id="btn" onClick="increase()">0</button>
  <script src="js/button.js" type="text/javascript"></script>
</body>
</html>
*/

