// read local JSON file in javascript
fetch("./example.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })