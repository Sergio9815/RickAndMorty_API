export default class apiRequest {
  constructor () {
    this.error = {
      name: `  ツ 𝚆𝚎 𝚊𝚛𝚎 𝚜𝚘𝚛𝚛𝚢, 𝙲𝚑𝚊𝚛𝚊𝚌𝚝𝚎𝚛 𝚗𝚘𝚝 𝚏𝚘𝚞𝚗𝚍!`,
      image: `https://i.imgur.com/dSYutnI.jpg`
    }
  }

  /* ---------- FETCH API ---------- */
  async request (api) {
    // OPEN CONNECTION
    const response = await fetch(api)
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(error))
    return response; // RETURN PROMISE
  }
}