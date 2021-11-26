const fetch = require("node-fetch");
const fs = require("fs");

let url = "https://www.ohanaliving.vn/api/web/rooms/view-all";

const bodyPayload = {
  matchData: { disabled: { $ne: true } },
  room_location: "HCM",
  page: 0,
  page_number: 400,
  filters: {},
};

fetch(url, {
  method: "post",
  body: JSON.stringify(bodyPayload),
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json())
  .then((json) => {
    let data = JSON.stringify(json, null, 2);
    fs.writeFile("output.json", data, function (err, data) {
      if (err) return console.log(err);
      console.log(data);
    });
  });
