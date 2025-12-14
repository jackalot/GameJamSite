// FAQ expand/collapse controls
document.addEventListener("DOMContentLoaded", function () {
  const expandBtn = document.getElementById("expand-faq");
  const collapseBtn = document.getElementById("collapse-faq");
  const faq = document.getElementById("faq");
  if (!faq || !expandBtn || !collapseBtn) return;

  const details = Array.from(faq.querySelectorAll("details"));

  function updateButtons() {
    const anyClosed = details.some((d) => !d.open);
    const anyOpen = details.some((d) => d.open);
    expandBtn.disabled = !anyClosed;
    collapseBtn.disabled = !anyOpen;
  }

  expandBtn.addEventListener("click", function () {
    details.forEach((d) => (d.open = true));
    updateButtons();
  });
  collapseBtn.addEventListener("click", function () {
    details.forEach((d) => (d.open = false));
    updateButtons();
  });

  // Update buttons when user toggles an individual item
  details.forEach((d) => d.addEventListener("toggle", updateButtons));

  // Initialize state
  updateButtons();
});
