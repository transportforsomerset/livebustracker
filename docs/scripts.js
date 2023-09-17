function updatewatching(wanttowatch) {
  localStorage.setItem("watchRoute", wanttowatch);
  whatamiwatching();
}
function whatamiwatching() {
  var watchRoute = 0;
  if (localStorage.getItem("watchRoute"))
    watchRoute = localStorage.getItem("watchRoute");
  else
    localStorage.setItem("watchRoute", watchRoute);
  
  const para = document.createElement("p");
  const paratext1 = document.createTextNode("Currently watching route: " + watchRoute);
  para.appendChild(paratext1);
  
  const whatisbeingwatched = document.getElementById("whatisbeingwatched");
  if (whatisbeingwatched) {
    while (whatisbeingwatched.firstChild) {
      whatisbeingwatched.removeChild(whatisbeingwatched.firstChild);
    }
  }
  
  whatisbeingwatched.appendChild(para);
}

window.addEventListener("load", whatamiwatching());
