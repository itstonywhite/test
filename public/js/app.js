const $ = document;
const toggleThemeBtn = $.querySelector("#toggleTheme");
const themeIcon = $.querySelector("#theme-icon");

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  document.documentElement.className = savedTheme || "";
  if (savedTheme === "dark") {
    themeIcon.setAttribute("href", "#sun");
  } else {
    themeIcon.setAttribute("href", "#moon");
  }

  toggleThemeBtn.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      document.documentElement.className = "";
      localStorage.setItem("theme", "light");
      themeIcon.setAttribute("href", "#moon");
    } else {
      document.documentElement.className = "dark";
      localStorage.setItem("theme", "dark");
      themeIcon.setAttribute("href", "#sun");
    }
  });
});
