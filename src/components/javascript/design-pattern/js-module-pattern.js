function hello() {
  console.log('Hello world!');
}
 
hello(); // Hello world!

const helloModule = (function(){
  function hello() {
    console.log('Hello world! from helloModule!');
  }
 
  return {
    hello
  }
})();