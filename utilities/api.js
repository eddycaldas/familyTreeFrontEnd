var api = {
  getInfo() {
    var url = `https://familytreebackend1.herokuapp.com/family`;
    return fetch(url).then((res) => res.json());
  }
}

module.exports = api;