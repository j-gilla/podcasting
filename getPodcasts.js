const itunes = require('itunes-search');

const options = {
    term: "Giant Bombcast",
  media: "podcast",
  entity: "podcast",
}

itunes.search(options, "Giant Bombcast",
function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
