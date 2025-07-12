function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

  // Show current year
  document.getElementById('year').textContent = new Date().getFullYear();