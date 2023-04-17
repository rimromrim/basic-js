const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const usedNames = {};
  const newNames = [];

  for (const name of names) {
    if (!usedNames[name]) {
      // name is not used yet, add it to the list of used names
      usedNames[name] = 1;
      newNames.push(name);
    } else {
      // name is already used, add a suffix to it
      let newName = `${name}(${usedNames[name]})`;
      while (usedNames[newName]) {
        // the new name is already used, try with a bigger suffix
        usedNames[name]++;
        newName = `${name}(${usedNames[name]})`;
      }
      usedNames[newName] = 1;
      newNames.push(newName);
      usedNames[name]++;
    }
  }

  return newNames;
}


module.exports = {
  renameFiles
};
