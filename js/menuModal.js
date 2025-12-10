document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('menuModal').classList.add('open');
  });
  
  document.getElementById('closeMenu').addEventListener('click', () => {
    document.getElementById('menuModal').classList.remove('open');
  });
  