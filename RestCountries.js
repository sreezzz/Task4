var request = new XMLHttpRequest();

request.onload = function () {
  if (request.status >= 200 && request.status < 300) {
    var t = JSON.parse(this.response);
    for (i = 0; i < t.length; i++) {
      console.log(t[i].flag);
      console.log(t[i].name);

      console.log(t[i].region);
      console.log(t[i].subregion);
      console.log(t[i].population);
    }
  } else {
    console.log(request.responseText);
  }
};

request.open("GET", "https://restcountries.eu/rest/v3.1/all");

request.send();
