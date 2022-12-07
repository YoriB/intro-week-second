// ### `updateTasks`

//const { arrayBuffer} = require("node:stream/consumers");

// This function should take as its arguments:

// - a person object (with name and tasks properties)
// - one or more new tasks

// The function should return a new person object with a new tasks properties. The tasks property from the input object should not be mutated.

// ```js
// updateTasks(
//   { name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] },
//   'read books',
//   'tidy room'
// );
// /* should return 
// // {
//   name: 'Anat',
// //   tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room']
// }
// */
// ```

// ---


  function updateTasks(obj, str1, str2){
    if (str1.length > 0 && str2.length > 0) {
   obj.tasks[2] = str1;
   obj.tasks[3]=str2
    } 
   return obj;
}

module.exports = { updateTasks};
