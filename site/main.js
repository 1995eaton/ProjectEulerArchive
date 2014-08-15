log = console.log.bind(console);

function getProblems(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'problems.json');
  xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  });
  xhr.send();
}

getProblems(function(data) {
  data.slice(0, 85).forEach(function(entry) {
    document.body.innerHTML += entry.problemHTML;
  });
});
