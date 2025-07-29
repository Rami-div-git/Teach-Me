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
  window.addEventListener("load", function() {
    const loading = document.getElementById("loading-screen");
    const content = document.getElementById("main-content");

    // أضف كلاس fade-out
    loading.classList.add("fade-out");

    // بعد انتهاء التحول (transition) أخفِ العنصر واظهر المحتوى
    setTimeout(function() {
      loading.style.display = "none";
      content.style.display = "block";
    }, 1000); // ← نفس مدة transition
  });