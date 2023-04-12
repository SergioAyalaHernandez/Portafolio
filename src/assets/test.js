window.sr = ScrollReveal();

  sr.reveal('.tagline',{
    duration: 3000,
    origin: 'bottom',
    distance: '-100px',
  });

sr.reveal('.titulos',{
  duration: 3000,
  origin: 'bottom',
  distance: '-100px',
});

sr.reveal('.titulosp',{
  duration: 6000,
  origin: 'right',
  distance: '850px',
});

  sr.reveal('.headline',{
    duration: 3000,
    distance: '400px',
    interval: 200,
    opacity: 0,
    origin: 'bottom',
    easing: 'cubic-bezier(0.5,0,0,1)',
    rotate: {
      x: 10,
      y: 50,
      z: 20,
    },
    scale: 1,
    cleanup: true,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.0,
    viewOffset: {
      top: 100,
      right: 0,
      bottom: 0,
      left: 0,
    },
  });
