"use strict";
const scenes = {black: "Black-board", blue: "Blue-board", wood: "Wood-scene"};
document.querySelectorAll('[data-scene]').forEach(button => {
  button.addEventListener('click', () => {
    const scene = button.dataset.scene;
    const video = document.querySelector('#scene-video');
    video.pause();
    video.poster = `assets/routing-${scene}.jpg`;
    video.querySelector('source').src = `assets/routing-${scene}.mp4`;
    video.load();
    document.querySelectorAll('[data-scene]').forEach(other => {
      const selected = button === other;
      other.classList.toggle('active', selected);
      other.setAttribute('aria-pressed', String(selected));
    });
    document.querySelector('#scene-caption').textContent = `${scenes[scene]} simulation · Visual and tactile observations during routing.`;
  });
});
const hero = document.querySelector('#hero-video');
const toggle = document.querySelector('#hero-toggle');
toggle.addEventListener('click', () => {
  if (hero.paused) hero.play().catch(() => {}); else hero.pause();
});
const syncToggle = () => {
  toggle.textContent = hero.paused ? 'Play background' : 'Pause background';
  toggle.setAttribute('aria-pressed', String(!hero.paused));
};
hero.addEventListener('play', syncToggle);
hero.addEventListener('pause', syncToggle);
new IntersectionObserver(entries => {
  const visible = entries[0].isIntersecting;
  document.querySelector('.sidebar-nav').classList.toggle('visible', !visible);
  if (!visible) hero.pause();
}, {threshold:0.15}).observe(document.querySelector('.hero'));
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && !navigator.connection?.saveData) hero.play().catch(() => {});
const navLinks = [...document.querySelectorAll('.sidebar-nav a')];
const updateNavigation = () => {
  let current = '#top';
  for (const a of navLinks) {
    const target = document.querySelector(a.getAttribute('href'));
    if (target && target.getBoundingClientRect().top < 180) current = a.getAttribute('href');
  }
  navLinks.forEach(a => {
    const selected = a.getAttribute('href') === current;
    a.classList.toggle('active', selected);
    if (selected) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
  });
};
window.addEventListener('scroll', updateNavigation, {passive:true});
updateNavigation();
// Only one video plays at a time. Section videos remain user-controlled.
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => { if(other !== video) other.pause(); });
  });
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) document.querySelectorAll('video').forEach(video => video.pause());
});
