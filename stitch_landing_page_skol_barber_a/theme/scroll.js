// =========================================================
// SKOL — Scroll suave con inercia (Lenis).
// Para ajustar la sensación: "lerp" más bajo = más suave/lento
// (0.05 muy flotante, 0.15 casi nativo).
// =========================================================
(function () {
  if (typeof Lenis === "undefined") return; // si no carga el CDN, queda el scroll normal
  // Nota: se aplica aunque el sistema pida "reducir movimiento" (decisión de diseño).

  const lenis = new Lenis({
    lerp: 0.09,
    wheelMultiplier: 1,
    smoothWheel: true,
    anchors: { offset: -88 }, // enlaces #seccion: compensa el header fijo
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  window.lenis = lenis;
})();
