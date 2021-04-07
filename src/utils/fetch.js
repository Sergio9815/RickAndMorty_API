export default class apiRequest {
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