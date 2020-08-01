function funcion(string){
    let myobj = {};
    //let temp = string.split("");

    string.split("").forEach(element => {
        myobj[element] = (myobj[element] + 1) || 1;
    });
    // temp.forEach(element => {
    //     myobj[element] = (myobj[element] + 1) || 1;
    // });

    return myobj;

}


//Jeff additions
function countLetters(string) {
    const mapCountLetters = {};
    string
      .toLowerCase()
      .split('')
      .forEach((letter) => {
        mapCountLetters[letter] = mapCountLetters[letter] + 1 || 1;
      });
    return mapCountLetters;
  }
  function areAllLettersUnique(string) {
    const mapString = countLetters(string);
    return Object.keys(mapString).every((key) => mapString[key] === 1); 
  }
  console.log(areAllLettersUnique('Jeff'));
  console.log(areAllLettersUnique('Molly'));
  console.log(areAllLettersUnique('Jeff C. jjj'));
  console.log(areAllLettersUnique('Tyler'));
  console.log(areAllLettersUnique('Erik'));
  console.log(areAllLettersUnique('Nicole'));
  console.log(areAllLettersUnique('Carl'));


console.log(funcion("Jeff"));