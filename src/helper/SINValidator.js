function SINValidator(SIN, errorCheck = false) {
  /* 
      SIN is a string of 9 digits
      1. Multiply every other digit by 2, starting with the first digit.
      2. Add the results together.
      3. If sum is divisible by 10, then the SIN is valid.
  
      input param: 
          SIN (string) - string containing SIN number
          errorCheck (boolean) - if true, then function will throw Error if any. default is false
      output: 
          boolean - true if valid, false otherwise
      */

  // -----------------------------------------------

  if (!SIN || typeof SIN !== "string") {
    // If SIN is undefined or not a string, return false
    if (errorCheck) {
      throw new Error("SIN is not a string");
    }
    return false;
  }

  // Replace all whitespace with empty string
  SIN = SIN.replaceAll(" ", "");

  if (SIN.length !== 9) {
    // SIN is not 9 digits long
    if (errorCheck) {
      throw new Error("SIN is not 9 digits");
    }
    return false;
  }

  // Split SIN into an array of digits
  const sinArr = SIN.split("");

  // Initialize sum to 0
  let sum = 0;

  for (let i = 0; i < sinArr.length; i++) {
    // Loop through each digit
    const digit = parseInt(sinArr[i]);

    if (isNaN(digit)) {
      // SIN contains a non-digit character
      if (errorCheck) {
        throw new Error("SIN contains a non-digit character");
      }
      return false;
    }

    if (i % 2 === 0) {
      // Leave it as it is
      sum += digit;
    } else {
      // Multiply every other digit by 2
      let multi = digit * 2;

      if (multi > 9) {
        // If the result is greater than 9, subtract 9 because we only want the digits in the ones place
        multi -= 9;
      }

      // Add the result to the sum
      sum += multi;
    }
  }

  // If sum is divisible by 10, then the SIN is valid
  if (sum % 10 === 0) {
    return true;
  } else {
    if (errorCheck) {
      throw new Error("SIN is not valid");
    }
    return false;
  }
}

export default SINValidator;
