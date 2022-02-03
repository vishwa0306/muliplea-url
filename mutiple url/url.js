var myLinks = [
"https://google.com",
"https://www.w3schools.com/jsref/met_win_open.asp",
"https://developer.mozilla.org/en-US/docs/Web/API/Window/open"
]

function openMultipleLinks(links) {
  for (var i = 0; i < links.length; i ++) {
    window.open(links[i]);
  } 
}
