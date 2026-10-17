// Shimmer placeholder: tandai <img> yg belum keload dgn class is-loading,
// hapus class-nya begitu gambar selesai dimuat (atau gagal).
(function () {
  'use strict';

  function arm(img) {
    if (img.complete && img.naturalWidth > 0) return; // sudah keload (cache)
    img.classList.add('is-loading');
    var done = function () { img.classList.remove('is-loading'); };
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  }

  function init() {
    var imgs = document.querySelectorAll('img');
    for (var i = 0; i < imgs.length; i++) arm(imgs[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
