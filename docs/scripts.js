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
  const paratext1 = document.createTextNode("Currently watching route: ");
  para.appendChild(paratext1);

  var routestatus = ["routeontime", "routelightdelays", "routeheavydelays"];
  var random  = Math.floor(Math.random() * 2);
  
  const para2 = document.createElement("span");
  const paratext2 = document.createTextNode(watchRoute);
  para2.setAttribute("class",routestatus[random]);
  para2.appendChild(paratext2);
  para.appendChild(para2);
  
  const whatisbeingwatched = document.getElementById("whatisbeingwatched");
  if (whatisbeingwatched) {
    while (whatisbeingwatched.firstChild) {
      whatisbeingwatched.removeChild(whatisbeingwatched.firstChild);
    }
  }
  
  whatisbeingwatched.appendChild(para);
}

window.addEventListener("DOMContentLoaded", whatamiwatching());
