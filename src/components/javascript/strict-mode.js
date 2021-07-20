// Thanks to a utility of the es5 version of JavaScript known as strict-mode, we can be more careful
// about how we declare our variables.
// By enabling strict mode, we opt into a restricted variant of JavaScript that will not tolerate
// the usage of variables before they are declared.

// Eliminates some silent JavaScript errors by changing them to explicit throw errors which will
// be spit out by the interpreter.
// Fixes mistakes that make it difficult for JavaScript engines to perform optimisations.
// Prohibits some syntax likely to be defined in future versions of JavaScript.

'use strict';

// OR
"use strict";

console.log(hoist); // Output: ReferenceError: hoist is not defined
hoist = 'Hoisted';

function person () {
  'use strict';
  console.log('hoist');
  hoist = "Hoisted";
}