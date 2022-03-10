const validator = {
  isValid: function (cc) {
    const capture = cc.toString().split('');
    const invertir = capture.reverse();
    console.log(invertir);
    
         const newArray = [];
    for(let i=0;i<invertir.length;i++) {
      if(i % 2 ==0) {
        //impares
        console.log(invertir[i],"impares")
        newArray.push(invertir[i]);
      }
      else {
        const double = invertir[i]*2;
        if (double > 9) {
        newArray.push(parseInt(double -9, 10));
        }
        else{
          newArray.push(parseInt(double, 10));
        }
      }
    }
  console.log(newArray);
  let acumulator = 0;
    for(let i=0;i<newArray.length;i++) {
    console.log(newArray[i]);
   acumulator = acumulator + parseInt(newArray[i]);
    }
    

      if (acumulator%10==0) {
        return true;
    }
      else {
        return false;
      }
     } ,
  
  maskify: function (cc) {
      const position = cc.slice(-4);
      console.log(position);
      const capture = cc.toString().split('');
      console.log(capture);
      for(let i=0;i<capture.length; i++) {
        capture[i] = capture[i].replace(/./g,'#')
      }
      let newNcard = capture.join('');
      let masked = newNcard.slice(0,-4) + position;
      return masked
  }  
};

export default validator;


