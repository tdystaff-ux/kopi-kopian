// Interaksi sederhana untuk landing page Kopi Kopian
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Tutup menu mobile setelah salah satu tautan dipilih.
  document.querySelectorAll(".navbar .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("mainNav");
      if (nav && nav.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // Ubah nomor WhatsApp di index.html sebelum website dipublikasikan.
  const waButton = document.getElementById("waButton");
  if (waButton) {
    waButton.addEventListener("click", () => {
      // Aksi dilanjutkan oleh tautan WhatsApp.
    });
  }
});

