// =========================================================
// SKOL — Pedido de turno por DM de Instagram.
// Instagram no permite precargar el texto del mensaje, así que
// copiamos el pedido al portapapeles y abrimos el chat.
// =========================================================
window.SKOL_DM = "https://ig.me/m/skol_barberia";

window.skolPedirTurno = function (btn, lineas) {
  var texto = "¡Hola Skol! Quiero pedir turno 💈\n" + lineas.filter(Boolean).join("\n");
  try {
    if (navigator.clipboard) navigator.clipboard.writeText(texto).catch(function () {});
  } catch (e) {}
  window.open(window.SKOL_DM, "_blank", "noopener");
  if (btn) {
    var prev = btn.innerHTML;
    btn.innerHTML = "¡Mensaje copiado! Pegalo en el chat";
    setTimeout(function () { btn.innerHTML = prev; }, 5000);
  }
};
