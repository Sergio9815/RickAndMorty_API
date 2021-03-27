/* ---------- API URL ---------- */
const API = "https://rickandmortyapi.com/api/character/?page=";
const characters = document.querySelectorAll('#character--container .character--card');

/* ---------- ARRAYS FOR CHARACTER DATA ---------- */
const images = [], name = [], status = [], dimension = [], species = []

for (let i = 0; i < characters.length; i++) {
  images[i] = characters[i].childNodes[1];
  name[i] = characters[i].childNodes[3].children[0];
  status[i] = characters[i].childNodes[3].children[1].lastElementChild;
  dimension[i] = characters[i].childNodes[3].children[2];
  species[i] = characters[i].childNodes[3].children[3];
}

/* ---------- FETCH API ---------- */
const request = async (api) => {
  // OPEN CONNECTION
  const response = await fetch(api) 
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
  return response; // RETURN PROMISE
}

/* ---------- XMLHttpRequest ---------- */
// const request = (url_api) => {
//   return new Promise((resolve, reject) => {
//     let xhttp = new XMLHttpRequest(); // DEFINE CONNECTION
//     xhttp.open("GET", url_api, true); // OPEN CONNECTION 
//     xhttp.onreadystatechange = () => {
//       if (xhttp.readyState === 4) { // VERIFY CONNECTION
//         xhttp.status === 200
//           ? resolve(JSON.parse(xhttp.responseText))
//           : reject(new Error("Error " + url_api));
//       }
//     };
//     //debugger
//     xhttp.send(); // SEND REQUEST
//   });
// };

const changeColorStatus = (stat, index) => {
  if (stat == 'Alive') {
    status[index].classList.add('alive')
  } else if (stat == 'Dead') {
    status[index].classList.add('dead')
  }
  else {
    status[index].classList.remove('alive')
    status[index].classList.remove('dead')
  }
}

/* ---------- RANDOM VALUE ---------- */
const getRandom = (min, max) => Math.random() * (max - min) + min;

const requestFunction = (api) => {

  let number = Math.round(getRandom(0, 34));
  url = api.replace("=", `=${number}`);

  /* ---------- MAKE REQUEST ---------- */
  // let data = await request(url);
  request(url)
    .then(characters => {
        try {
          for (let i = 0; i < images.length; i++) {
            var character = characters.results[i];
      
            /* ---------- INSERT DATA INTO CARDS ---------- */
            images[i].src = character.image;
            name[i].innerHTML = `Name: ${character.name}`;
            status[i].innerHTML = `: ${character.status}`;
            species[i].innerHTML = `Specie: ${character.species}`;
            dimension[i].innerHTML = `Origin: ${character.origin.name}`;
      
            changeColorStatus(character.status, i)
          }
        } catch (error) {
          console.log(error);
        }
    })

};

/* ---------- CALL MAIN FUNCTION ---------- */
requestFunction(API);
