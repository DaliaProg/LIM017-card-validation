const validator = {
  isValid: function (cc) {

    console.log(cc);
    const capture = cc.toString().split('');
    console.log(capture);
    const invertir = capture.reverse();
    console.log(invertir);
    for(let i=0;i<invertir.length;i++) {
      if(i % 2 ==0) {
        //impares
        console.log(invertir[i],"impares");
      }
      else {
        //pares
        console.log(invertir[i],"pares");
      }
    }
    


  },
  
  maskify: function (cc) {
    // If length is greater than 4, then we have things to mask
    if (n.length > 4) {
        // reverse string
        let reversed = reverse(n);
        let newString = '';
        for (let i = 0; i < reversed.length; i++) {
          // if i < 4, we want to reveal these numbers in our output
          if (i < 4) {
            newString += reversed[i];
          } else {
            // otherwise, just hide it
            newString += '#';
          }
        }
        // return the reversal of the string to revert it back to original format
        return reverse(newString);
    } else {
        return n;
    }
  }
, 

  
};

export default validator;

   
  function reverse(str) {
    return str.split("").reverse().join("");
  }
