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
// Load only on demand, and never start a video automatically.
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => { if(other !== video) other.pause(); });
  });
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) document.querySelectorAll('video').forEach(video => video.pause());
});
