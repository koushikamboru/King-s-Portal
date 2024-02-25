function showSection(section) {
    document.querySelectorAll('.info-section').forEach(el => el.classList.remove('active-section'));
    let slider = document.getElementById('sectionSlider');
    slider.value = section === 'mission' ? 1 : (section === 'vision' ? 2 : 3);
    document.getElementById(section + '-section').classList.add('active-section');
}

document.getElementById('sectionSlider').addEventListener('input', function() {
    let section = ['mission', 'vision', 'values'][parseInt(this.value) - 1];
    showSection(section);
});

document.querySelectorAll('.over_head div').forEach(el => el.addEventListener('click', function() {
    let section = this.classList[0];
    showSection(section);
    let slider = document.getElementById('sectionSlider');
    slider.value = section === 'mission' ? 1 : (section === 'vision' ? 2 : 3);
}));
