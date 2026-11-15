function setTheme(e) {
  localStorage.setItem("theme", e);
  let Theme = localStorage.getItem("theme");
  document.body.className = Theme;
  console.log(e);
}

let theme = localStorage.getItem("theme");
setTheme(theme);

document.getElementById("theme-1-btn").addEventListener("click", () => {
  setTheme("theme-01-ocean");
});
document.getElementById("theme-2-btn").addEventListener("click", () => {
  setTheme("theme-02-forest");
});
document.getElementById("theme-3-btn").addEventListener("click", () => {
  setTheme("theme-14-contrast");
});

document.getElementById("theme-4-btn").addEventListener("click", () => {
  setTheme("theme-04-warm-graphite");
});
document.getElementById("theme-5-btn").addEventListener("click", () => {
  setTheme("theme-05-wine");
});
document.getElementById("theme-6-btn").addEventListener("click", () => {
  setTheme("theme-06-brutal");
});
document.getElementById("theme-7-btn").addEventListener("click", () => {
  setTheme("theme-07-neon");
});
document.getElementById("theme-8-btn").addEventListener("click", () => {
  setTheme("theme-08-deepsea");
});
document.getElementById("theme-9-btn").addEventListener("click", () => {
  setTheme("theme-09-colorblock");
});
document.getElementById("theme-10-btn").addEventListener("click", () => {
  setTheme("theme-10-terminal");
});
document.getElementById("theme-11-btn").addEventListener("click", () => {
  setTheme("theme-11-graphite");
});
document.getElementById("theme-12-btn").addEventListener("click", () => {
  setTheme("theme-12-cobalt");
});
