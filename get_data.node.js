log = console.log.bind(console);

var fs = require('fs');

var data = JSON.parse(fs.readFileSync('dump.json'));

var html = data.map(function(item) {
  return item.problemHTML;
}).join('');
var images = (html.match(/(src|href)=.(?!(http|problem=|about=))[^ >\\"']*/g) || []).map(function(item) {
  return item.replace(/(src|href)=./g, '');
}).sort();
for (var i = 0; i < images.length; i++) {
  var lastIndex;
  while ((lastIndex = images.lastIndexOf(images[i])) !== i) {
    images.splice(lastIndex, 1);
  }
  images[i] = 'http://projecteuler.net/' + images[i];
}
log(images.join('\n'));
