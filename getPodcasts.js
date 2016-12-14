const itunes = require('itunes-search');

const option = {
  media: "podcast",
  entity: "podcast",
}

itunes.search( "Giant Bombcast", options,
function(response) {
  // do stuff with 'response'
})
