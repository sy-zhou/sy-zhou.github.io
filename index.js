var darkMode = false;

// add event listener
function addEvent(element, evnt, funct) {
  if (element.attachEvent)
    return element.attachEvent('on'+evnt, funct);
  else
    return element.addEventListener(evnt, funct, false);
}

function toggleMode() {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.classList.add("darkMode");
  } else {
    document.body.classList.remove("darkMode");
  }
}

// add toggle between light/dark mode
addEvent(
  document.getElementById('dark-light-switcher-button'),
  'click',
  function () { toggleMode(); }
);