/* ---------- API URL ---------- */
const API = "https://rickandmortyapi.com/api/character/";

/* ---------- ARRAYS FOR CHARACTER DATA ---------- */
const name = [
  document.querySelector(".addName1"),
  document.querySelector(".addName2"),
  document.querySelector(".addName3"),
  document.querySelector(".addName4"),
  document.querySelector(".addName5"),
  document.querySelector(".addName6"),
  document.querySelector(".addName7"),
  document.querySelector(".addName8"),
];

const status = [
  document.querySelector(".addStatus1"),
  document.querySelector(".addStatus2"),
  document.querySelector(".addStatus3"),
  document.querySelector(".addStatus4"),
  document.querySelector(".addStatus5"),
  document.querySelector(".addStatus6"),
  document.querySelector(".addStatus7"),
  document.querySelector(".addStatus8"),
];

const species = [
  document.querySelector(".addSpecies1"),
  document.querySelector(".addSpecies2"),
  document.querySelector(".addSpecies3"),
  document.querySelector(".addSpecies4"),
  document.querySelector(".addSpecies5"),
  document.querySelector(".addSpecies6"),
  document.querySelector(".addSpecies7"),
  document.querySelector(".addSpecies8"),
];

const dimension = [
  document.querySelector(".addOrigin1"),
  document.querySelector(".addOrigin2"),
  document.querySelector(".addOrigin3"),
  document.querySelector(".addOrigin4"),
  document.querySelector(".addOrigin5"),
  document.querySelector(".addOrigin6"),
  document.querySelector(".addOrigin7"),
  document.querySelector(".addOrigin8"),
];

const images = [
  document.querySelector(".addImg1"),
  document.querySelector(".addImg2"),
  document.querySelector(".addImg3"),
  document.querySelector(".addImg4"),
  document.querySelector(".addImg5"),
  document.querySelector(".addImg6"),
  document.querySelector(".addImg7"),
  document.querySelector(".addImg8"),
];

/* ---------- FUNCTION FOR API REQUEST ---------- */
const request = (url_api) => {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest(); // DEFINE CONNECTION
    xhttp.open("GET", url_api, true); // OPEN CONNECTION 
    xhttp.onreadystatechange = () => { 
      if (xhttp.readyState === 4) { // VERIFY CONNECTION
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error " + url_api));
      }
    };
    xhttp.send(); // SEND REQUEST
  });
};

const requestFunction = async (url) => {
  try {
    var j = 0;
    for (let i = 0; i < images.length; i++) {

      /* ---------- SPECIAL CHARACTERS ---------- */
      if (i === 5) j = 16;
      else if (i === 6) j = 10;
      else if (i === 7) j = 11;
      else j = i;
      
      /* ---------- MAKE REQUEST ---------- */
      var data = await request(url);
      var character = await request(`${url}${data.results[j].id}`);
      var origin = await request(`${character.origin.url}`);

      /* ---------- INSERT DATA INTO CARDS ---------- */
      name[i].innerHTML = `Name: ${character.name}`;
      status[i].innerHTML = `Status: ${character.status}`;
      species[i].innerHTML = `Specie: ${character.species}`;
      dimension[i].innerHTML = `Origin: ${origin.dimension}`;
      images[i].src = character.image;
      j++;
    }
  } catch (error) {
    console.log(error);
  }
};

/* ---------- CALL MAIN FUNCTION ---------- */
requestFunction(API);
