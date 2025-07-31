// ScrollTop
const scrollToTopBtn = document.getElementById('scrollToTop');
      
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
      
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

// loading-screen
  window.addEventListener("load", function () {
    const loading = document.getElementById("loading-screen");
    const content = document.getElementById("main-content");

    // 3 second delay after full load
    setTimeout(function () {
      loading.classList.add("fade-out");

    // After the disappearing effect ends (1 second)
      setTimeout(function () {
        loading.style.display = "none";
        content.style.display = "block";
        
        // Show content gradually
        requestAnimationFrame(() => {
          content.classList.add("visible");
        });
      }, 1000); // ← Matches time transition
    }, 3000); // ← Delay after loading (3000 = 3 seconds)
  });