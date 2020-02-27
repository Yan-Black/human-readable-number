module.exports = function toReadable (number) {

    const zeroToTen = ['zero','one','two','three','four','five','six','seven','eight','nine'],
              teens = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen', 'eighteen', 'nineteen'],
               tens = ['ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
            hundred = 'hundred'
  
       let numToStr = number.toString().split('')
  
              if(numToStr.length == 1) {
                for(let i = 0; i <= 9; i++) {
                    if(i == numToStr[0]) numToStr[0] = zeroToTen[i]
                  }
              }
  
              if(numToStr.length == 2) {
                for(let i = 0; i <= 9; i++) {
                   if(i == 0 && numToStr[1] == i && numToStr[0] == 1)  {numToStr[0] = tens[0];    numToStr.splice(1,1)}
              else if(i <= 9 && numToStr[1] == i && numToStr[0] == 1)  {numToStr[0] = teens[i-1]; numToStr.splice(1,1)}
              else if(i <= 9 && numToStr[0] == i && numToStr[1] == 0)  {numToStr[0] = tens[i-1];  numToStr.splice(1,1)}
              else if(i >= 1 && i <= 9 && numToStr[1] == i)            {numToStr[0] = tens[parseInt(numToStr[0]-1)];  numToStr[1] = zeroToTen[i]}
                  }
              }
  
              if(numToStr.length == 3) {
                for (let i = 0; i <= 9; i++) {
                  if(numToStr[0] == i && numToStr[0] != 0 && numToStr[1] == 0 && numToStr[2] == 0) {
                     numToStr[0] = zeroToTen[i]
                     numToStr[1] = hundred; numToStr.splice(2,1)
                   }
             else if(numToStr[1] == 0 && numToStr[2] == i && numToStr[2] != 0) {
                     numToStr[0] = zeroToTen[parseInt(numToStr[0])]
                     numToStr[1] = hundred
                     numToStr[2] = zeroToTen[i]
            }
             else if(numToStr[0] == i && numToStr[2] == 0) {
                     numToStr[0] = zeroToTen[i]
                     numToStr[2] = tens[parseInt(numToStr[1]-1)]
                     numToStr[1] = hundred
             }
             else if(numToStr[1] == 1 && numToStr[2] == i && numToStr[2] >= 1) {
                     numToStr[0] = zeroToTen[parseInt(numToStr[0])]
                     numToStr[1] = hundred
                     numToStr[2] = teens[i-1]
                  }
             else if(numToStr[2] == i && numToStr[2] != 0 && numToStr[1] > 1) {
                     numToStr[0] = zeroToTen[parseInt(numToStr[0])]
                     numToStr[2] = tens[parseInt(numToStr[1])-1]
                     numToStr[1] = hundred
                     numToStr[3] = zeroToTen[i]
                  }
                }
              }
  
      return numToStr.join(' ')
  }
  
