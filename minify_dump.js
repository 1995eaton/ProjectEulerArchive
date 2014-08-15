var fs = require('fs');

var json = fs.readFileSync('dump.json', 'utf8');

json = JSON.parse(json);

json = json.map(function(item) {
  delete item.problemText;
  delete item.creationDate;
  return item;
});
console.log(JSON.stringify(json));
