function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.classList.toggle('hidden');
    }
}
function openDetailsPage(pageUrl) {
    window.location.href = pageUrl;
}
window.toggleSection = toggleSection;
window.openDetailsPage = openDetailsPage;
