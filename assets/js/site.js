/* Iron & Zen — Astra. Vanilla, no dependencies. */
(function () {
  'use strict';

  /* Smooth-scroll all #apply anchors */
  document.querySelectorAll('a[href="#apply"]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var target = document.getElementById('apply');
      if (target) { e.preventDefault(); window.scrollTo({ top: target.offsetTop, behavior: 'smooth' }); }
    });
  });

  /* Apply form: inline success */
  var form = document.getElementById('apply-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var done = document.getElementById('apply-done');
      form.style.display = 'none';
      if (done) done.hidden = false;
    });
  }

  /* Landscape: pause Ken Burns when height is very short — saves GPU */
  function syncKenBurns() {
    var kb = document.querySelector('.iz-kb');
    if (!kb) return;
    var shortLandscape = window.matchMedia('(orientation:landscape) and (max-height:500px)').matches;
    kb.style.animationPlayState = shortLandscape ? 'paused' : 'running';
  }
  syncKenBurns();
  window.addEventListener('resize', syncKenBurns);

})();
