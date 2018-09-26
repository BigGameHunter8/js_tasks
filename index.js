const binaryArrayToNumber = arr => {
    // your code
    let str = arr.toString();
    let n = str.replace(/,/g,"");
    var digit = parseInt(n,2);
    console.log(digit);
  };

  binaryArrayToNumber([0,1,1,1]);