const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    const messageLength = message.length;
    let result = '';

    for (let i = 0, j = 0; i < messageLength; i++) {
      const currentCharCode = message.charCodeAt(i);
      if (currentCharCode < 65 || currentCharCode > 90) {
        // Non-alphabetic character
        result += message[i];
        continue;
      }

      const keyCharCode = key.charCodeAt(j % key.length) - 65;
      const encryptedCharCode = ((currentCharCode - 65 + keyCharCode) % 26) + 65;
      result += String.fromCharCode(encryptedCharCode);
      j++;
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    const encryptedMessageLength = encryptedMessage.length;
    let result = '';

    for (let i = 0, j = 0; i < encryptedMessageLength; i++) {
      const currentCharCode = encryptedMessage.charCodeAt(i);
      if (currentCharCode < 65 || currentCharCode > 90) {
        // Non-alphabetic character
        result += encryptedMessage[i];
        continue;
      }

      const keyCharCode = key.charCodeAt(j % key.length) - 65;
      const decryptedCharCode = ((currentCharCode - 65 - keyCharCode + 26) % 26) + 65;
      result += String.fromCharCode(decryptedCharCode);
      j++;
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
