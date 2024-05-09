window.addEventListener("DOMContentLoaded", () => {
  const script = document.createElement('script');
  script.defer = true;
  script.dataset.domain = "gfn-stats.wuemeli.com";
  script.src = "https://googleisbad.wuemeli.com/js/script.js";
  document.head.appendChild(script);

  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type] || 'N/A');
  }

});