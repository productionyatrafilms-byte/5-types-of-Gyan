
// ── Category sidebar navigation ──
var catPages = {
  "0": "./what.html",
  "1": "./about.html",
  "2": "./why.html",
  "3": "./effects.html",
  "4": "./instead.html"
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".about-cat-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var cat = this.dataset.cat;
      var target = catPages[cat];
      if (target && !window.location.pathname.endsWith(target.replace("./", ""))) {
        window.location.href = target;
      }
    });
  });
});

// language change js
let currentLang = sessionStorage.getItem("lang");
if (!currentLang) {
    val("English");
} else {
    val(currentLang);
}

function val(selectedLang) {
    sessionStorage.setItem("lang", selectedLang);

    let English = document.getElementById("en");
    let Hindi = document.getElementById("hi");
    let Gujrati = document.getElementById("gu");

    if (selectedLang === "English") {

        document.getElementById("body");
        $(".english").show();
        $(".hindi, .gujrati").hide();

        English.checked = true;
        Hindi.checked = false;
        Gujrati.checked = false;
    }

    if (selectedLang === "Hindi") {
        document.getElementById("body");
        $(".hindi").show();
        $(".english, .gujrati").hide();
        English.checked = false;
        Hindi.checked = true;
        Gujrati.checked = false;
    }

    if (selectedLang === "Gujrati") {
        document.getElementById("body");
        $(".gujrati").show();
        $(".english, .hindi").hide();
        English.checked = false;
        Hindi.checked = false;
        Gujrati.checked = true;
    }

}