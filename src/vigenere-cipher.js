const { NotImplementedError } = require("../lib");

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
  reverse = false;

  constructor(direct) {
    if (direct === false) {
      this.reverse = true;
    }
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();

    let result = "";

    let index = 0;
    for (let char of upperMessage) {
      if (/[A-Z]/.test(char)) {
        if (index > upperKey.length - 1) index = 0;
        result += this.getEncryptedLetter(char, upperKey[index]);
        index++;
      } else {
        result += char;
      }
    }

    if (this.reverse) return result.split("").reverse().join("");

    return result;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");
    const upperMessage = encryptedMessage.toUpperCase();
    const upperKey = key.toUpperCase();

    let result = "";

    let index = 0;
    for (let char of upperMessage) {
      if (/[A-Z]/.test(char)) {
        if (index > upperKey.length - 1) index = 0;
        result += this.getSourceLetter(char, upperKey[index]);
        index++;
      } else {
        result += char;
      }
    }

    if (this.reverse) return result.split("").reverse().join("");

    return result;
  }

  getEncryptedLetter(sourceLetter, keyLetter) {
    const shift = "A".charCodeAt(0);

    const sourceLetterNumber = sourceLetter.toUpperCase().charCodeAt(0) - shift;
    const keyLetterNumber = keyLetter.toUpperCase().charCodeAt(0) - shift;

    const encryptedLetterNumber = (sourceLetterNumber + keyLetterNumber) % 26;
    return String.fromCharCode(encryptedLetterNumber + shift);
  }

  getSourceLetter(encryptedLetter, keyLetter) {
    const shift = "A".charCodeAt(0);

    const encryptedLetterNumber =
      encryptedLetter.toUpperCase().charCodeAt(0) - shift;
    const keyLetterNumber = keyLetter.toUpperCase().charCodeAt(0) - shift;

    let sourceLetterNumber = (encryptedLetterNumber - keyLetterNumber) % 26;

    if (sourceLetterNumber < 0) sourceLetterNumber += 26;
    return String.fromCharCode(sourceLetterNumber + shift);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
