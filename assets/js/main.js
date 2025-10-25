// Menu toggle pour mobile
document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Bannière cookie simple
  if (!localStorage.getItem("cookieConsent")) {
    let banner = document.createElement("div");
    banner.innerHTML = `
      <div style="position: fixed; bottom: 0; left: 0; width: 100%; background: #333; color: #fff; text-align: center; padding: 1rem; z-index: 10000;">
        Ce site utilise des cookies pour améliorer l'expérience. <button id="acceptCookies" style="background: #f0c330; color: #000; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">Accepter</button>
      </div>
    `;
    document.body.appendChild(banner);
    document.getElementById("acceptCookies").onclick = function() {
      localStorage.setItem("cookieConsent", "true");
      banner.remove();
    };
  }
});
