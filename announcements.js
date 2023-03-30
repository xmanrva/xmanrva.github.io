var Text = "Announcement Board",
  Par = document.getElementById("Par"),
  effect,
  Cnt = 0,
  Int;

function effect() {
  "use strict";
  Par.textContent = Par.textContent + Text[Cnt];
  Cnt += 1;
  if (Cnt > Text.length - 1) {
    clearInterval(Int);
  }
}
Int = setInterval(effect, 100);