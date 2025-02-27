const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// function createDreamTeam(members) {
//   arrOfNames = [];
//   for (let i = 0; i < members.length; i++) {
//     if (typeof members[i] == 'string') {
//       arrOfNames.push(members[i].split(' ').join(''))
  
//       console.log(arrOfNames);
//       //arrOfNames.push(members[i].charAt(0));
//     } 
//   } 
//   console.log(arrOfNames.sort().join(''));
//   return arrOfNames.sort().join('');
// }

function createDreamTeam(members) {
  if (members == null) {
    return false;
  }
  arrOfNames = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      arrOfNames.push(members[i].split(' ').join('').toUpperCase().charAt(0))
    } 
  } 
  return arrOfNames.sort().join('');
}

module.exports = {
  createDreamTeam
};
