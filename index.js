
function passwordGenerator(length,upperCase,lowerCase,symbols,numbers){
  
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const symbolsChars = "@#$%^&*()_+";
  const numbersChars = "1234567890";

  let allowedChars = "";
  let password = "";

  allowedChars += upperCase ? uppercaseChars : "";
  allowedChars += lowerCase ? lowercaseChars : "";
  allowedChars += symbols ? symbolsChars : "";
  allowedChars += numbers ? numbersChars : "";

  if (length <= 0){
    return "Password length must be at least one!";
  }
  if (allowedChars.length === 0 ){
    return "At Least 1 set of characters must be selected!";
  }

  for(let i=0 ; i <length ; i++){
     const randomIndex = Math.floor(Math.random() * allowedChars.length);
     password += allowedChars[randomIndex]
  }


  return password ;
}

const passwordLength = 12;
const includeUpperCase = true;
const includeLowercase = true;
const includeSymbols = true;
const includeNumbers = true;

const password = passwordGenerator(passwordLength,includeUpperCase,includeLowercase,includeSymbols,includeNumbers);

console.log(`Generate password : ${password}`);

