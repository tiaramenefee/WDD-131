
const selectTheme = document.getElementById("theme-select");
const body = document.body;

selectTheme.addEventListener("change", () => {
  const selectedTheme = selectTheme.value;

  if (selectedTheme === "dark") {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
});
