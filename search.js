const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const links = searchResults.querySelectorAll('a');

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  let hasResults = false;

  links.forEach(link => {
    if (link.textContent.toLowerCase().includes(filter)) {
      link.style.display = "block";
      hasResults = true;
    } else {
      link.style.display = "none";
    }
  });

  searchResults.style.display = hasResults ? "block" : "none";
});
