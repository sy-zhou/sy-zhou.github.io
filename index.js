var darkMode = false;

function toggleMode() {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.classList.add("darkMode");
  } else {
    document.body.classList.remove("darkMode");
  }
}
