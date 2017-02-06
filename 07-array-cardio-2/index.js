// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const anyone19Plus = people.some(p => {
  const now = new Date();
  const currentYear = now.getFullYear();
  return currentYear - p.year >= 19;
});
console.log(anyone19Plus);

// Array.prototype.every() // is everyone 19 or older?
const everyone19Plus = people.every(p => {
  const now = new Date();
  const currentYear = now.getFullYear();
  return currentYear - p.year >= 19;
});
console.log(everyone19Plus);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(c => c.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const commentIndex = comments.findIndex(c => c.id === 823423);

// pre ES6 way
// comments.splice(commentIndex, 1);

// Simple way to create new array without removed element using spread `...`
const newComments = [
  ...comments.slice(0, commentIndex),
  ...comments.slice(commentIndex + 1)
];
console.log(`Deleted comment ${commentIndex}`);
console.table(newComments);
