// Silent Aim landing helpers
document.addEventListener('DOMContentLoaded', function () {
  var cta = document.querySelector('.cta');
  if (!cta) return;
  cta.addEventListener('click', function () {
    // open in a new tab so the game tab stays untouched
    cta.setAttribute('target', '_blank');
    cta.setAttribute('rel', 'nofollow noopener');
  });
});
