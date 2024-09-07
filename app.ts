function toggleSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.toggle("hidden");
  }
}

function openDetailsPage(pageUrl: string) {
  window.location.href = pageUrl;
}

(window as any).toggleSection = toggleSection;
(window as any).openDetailsPage = openDetailsPage;
