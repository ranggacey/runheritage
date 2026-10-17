// Rawapening Run Heritage 2026 - Countdown Timer (High-Performance Zero-Layout-Thrash)
(function() {
  'use strict';
  
  const targetDate = new Date("November 29, 2026 05:00:00").getTime();
  let initialized = false;

  function updateElement(id, newValue) {
    const el = document.getElementById(id);
    if (!el) return;

    if (el.textContent !== newValue) {
      el.textContent = newValue;
      if (initialized) {
        el.classList.remove("animate-number-right");
        requestAnimationFrame(() => {
          el.classList.add("animate-number-right");
        });
      }
    }
  }

  function updateHeroCountdown() {
    const diff = targetDate - Date.now();

    if (diff > 0) {
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);

      updateElement("hero-cd-days", String(days).padStart(2, '0'));
      updateElement("hero-cd-hours", String(hours).padStart(2, '0'));
      updateElement("hero-cd-mins", String(mins).padStart(2, '0'));
      updateElement("hero-cd-secs", String(secs).padStart(2, '0'));
    }
    initialized = true;
  }

  if (document.readyState === 'complete') {
    updateHeroCountdown();
    setInterval(updateHeroCountdown, 1000);
  } else {
    window.addEventListener('load', () => {
      setTimeout(() => {
        updateHeroCountdown();
        setInterval(updateHeroCountdown, 1000);
      }, 50);
    }, { once: true });
  }
})();
