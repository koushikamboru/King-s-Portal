function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.info-section').forEach(function (el) {
        el.classList.remove('active-section');
    });

    // Show the selected section
    document.getElementById(section + '-section').classList.add('active-section');
}