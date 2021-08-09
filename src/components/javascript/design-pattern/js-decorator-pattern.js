class Text {
  constructor(value) {
    this.value = value;
  }
}
 
function applyHeadingStyles(text) {
  text.color = "gray";
  text.size = "18px";
  return text;
}
 
function changeFont(text, font) {
  text.font = font;
  return text;
}
 
const text = new Text("Hello world.");
const heading = applyHeadingStyles(text);
const textWithFont = changeFont(text, "Arial");
 
console.log(heading);
console.log(textWithFont);