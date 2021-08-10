const MORSE_CODE = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
  }

decodeMorse = function(morseCode){
    const wordArr = morseCode.split("   ");
    const letterArr = [];
    const finalArr = [];
    for(let i = 0; i < wordArr.length; i++) {
      letterArr.push(wordArr[i].split(" "));
    }
    for(let i = 0; i < letterArr.length; i++) {
      for(let j = 0; j < letterArr[i].length; j++) {
        finalArr.push(MORSE_CODE[letterArr[i][j]]);
      }
      finalArr.push(" ");
    }
    return finalArr.join("").trim();
  }

  console.log(decodeMorse('.... . -.--   .--- ..- -.. .')); //returns: "HEY JUDE"