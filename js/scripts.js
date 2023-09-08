//Seleção de Elmentos
const generatePasswordButton = document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");

//Funções

//Gera Letras Minusculas
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

//Gera Maiusculas
const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

//Gera Numeros
const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

//Gera Carcteres Especiais
const getSymbols = () => {
    const symbols = "!@#$%&*-\/+=?";
    return symbols[Math.floor(Math.random() * symbols.length)]
}; 

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbols) => {
   
    let password = ""
    const passwordLength = 8

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbols
    ]

  for (i = 0; i< passwordLength; i = i + 4) {

    generators.forEach(() => {
        const randomValue = 
        generators[Math.floor(Math.random() * generators.length)] ();

        password += randomValue;

    });

  }

  password = password.slice(0, passwordLength);

  generatePasswordElement.style.display = "block";
  generatePasswordElement.querySelector("h4").innerText = password;

};

//Eventos
generatePasswordButton.addEventListener("click", () => {
   generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbols
   );

});