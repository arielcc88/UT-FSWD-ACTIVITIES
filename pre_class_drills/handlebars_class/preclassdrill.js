function getLowerAndJoin(stringName){
    return stringName.toLowerCase().split(" ").join("");
    //return stringName.toLowerCase().trim().replace(/\s/g, "-");
  }
  
  console.log(getLowerAndJoin("Tammer Galal"));
  console.log(getLowerAndJoin("favorite tree    ever"));
  console.log(getLowerAndJoin("one word"));
  console.log(getLowerAndJoin(" one word all 34 "));