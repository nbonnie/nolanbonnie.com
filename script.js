/* eslint-env es6 */
/* eslint-disable no-console */

/* To whomever is reading this message
I want to say, for the record, I am not a javascript programmer. I know just
enough JS to hack together very rough solutions. Somehow they work without errors.
*/

/*"#FF0A0A"*/
const colors = ["#24d05a", "#eb4888", "#00adef", "#FA8334"];

(function () {
    
  window.onload = onPageLoad();

  setModeEventListener();
  setRandomLinkColor();
  setColorHoverListener();
  setBioEventListener();
  /*
  setInterval(() => {
    setRandomLinkColor();
  }, 5000);
  */
})();


/* Dark Mode */
function setModeEventListener() {
  let list = document.body.classList;
  document.getElementById("toggler").addEventListener("change", (event) => {
    if(event.target.checked){
      list.add("dark-mode")
      sessionStorage.setItem('darkMode', 'true');
  
    }
    else{
      list.remove("dark-mode")
      sessionStorage.setItem('darkMode','false');
    }
  });
}

function onPageLoad() {
  const darkModeEnabled = sessionStorage.getItem('darkMode');
    
  if(darkModeEnabled === 'false'){
    document.body.classList.add("light-mode")
    document.getElementById("toggler").checked = false;
  }
  else if(darkModeEnabled === 'true'){
    document.body.classList.add("dark-mode")
    document.getElementById("toggler").checked = true;
  }
  else{
    document.body.classList.add("dark-mode")
    document.getElementById("toggler").checked = true;
    sessionStorage.setItem('darkMode', 'true');
       
  }
  
  const buttType = sessionStorage.getItem('buttType');
  
  if(buttType === 'short'){
    sessionStorage.setItem('buttType','short');
    if(window.location.pathname === '/index.html') {
      document.getElementById("short").classList.add("show");
      document.getElementById("long").classList.remove("show");
      document.getElementById("bio-short-text").classList.add("show");
      document.getElementById("bio-long-text").classList.remove("show");
    }
  }
  else if(buttType === 'long'){
    sessionStorage.setItem('buttType','long');
    if(window.location.pathname === '/index.html') {
      document.getElementById("short").classList.remove("show");
      document.getElementById("long").classList.add("show");
      document.getElementById("bio-short-text").classList.remove("show");
      document.getElementById("bio-long-text").classList.add("show");
    }
    
  }
  else{
    sessionStorage.setItem('buttType', 'short');
  }
  
}


/* Colors */
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomLinkColor() {
  Array.from(document.getElementsByTagName("a")).forEach((e) => {
    e.style.color = getRandomColor();
  });
}

function setColorHoverListener() {
  Array.from(document.querySelectorAll("a, button")).forEach((e) => {
    e.addEventListener("mouseover", setRandomLinkColor);
  });
}

/* Photos 

function setRandomPhoto() {
  let num = Math.floor(Math.random() * 14) + 1;
  document.getElementById("propic").src = `./img/face${num}.jpg`;
}*/

/* Bio Toggles */

function setBioEventListener() {
  Array.from(document.getElementsByTagName("button")).forEach((e) => {
    e.addEventListener("click", bioToggle);
  });
}

function bioToggle(e) {
  let bioType = e.target;
  let color = getRandomColor();
  off(bioType);
  
  sessionStorage.setItem('buttType',bioType.id);

  bioType.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
  let bioTypeElement = document.getElementsByClassName(bioType.id)[0];
  if (bioTypeElement !== undefined) bioTypeElement.classList.add("show");
}

function off(bioType) {
  Array.from(document.getElementsByTagName("button")).forEach((butt) => {
    butt.style.borderColor = "#96979c";
    butt.style.color = "#96979c";
  });
  Array.from(document.getElementsByClassName("bio")).forEach((e) => {
    e.classList.remove("show");
  });
}
