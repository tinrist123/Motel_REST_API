var j = request.jar();
var request = request.defaults({ jar: j }); //it will make the session default for every request
//...
request(
  {
    url: "https://www.erobertparker.com/login.aspx",
    method: "POST",
    form: { UNENTRY: "username", PWENTRY: "password" },
  },
  function (error, response, body) {
    //Do your logic here or even another request like
    request(
      {
        url: "<ANOTHER LINK>",
        method: "GET",
      },
      function (error, response, body) {
        //Some logic
      }
    );
  }
);
