(function(){
  var app = {
    init: function() {
      menu.dispay();
      products.toggle();
    },
    htmlElement: {
      menuIcon: document.getElementById('menuicon'),
      menu: document.getElementById('menu'),
      menuClose: document.getElementById('menu-close'),
      ofyrClassicSecton: document.getElementById('ofyr-classic'),
      ofyrStorageSecton: document.getElementById('ofyr-storage'),
      ofyrIslandSecton: document.getElementById('ofyr-island'),
      ofyrButcherBlockSecton: document.getElementById('ofyr-butcher-block'),
      ofyrWoodStorageSecton: document.getElementById('ofyr-wood-storage'),
      ofyrAccessoiriesSecton: document.getElementById('ofyr-accessoiries'),
      ofyrClassicBtn: document.getElementById('ofyr-classic-btn'),
      ofyrStorageBtn: document.getElementById('ofyr-storage-btn'),
      ofyrIslandBtn: document.getElementById('ofyr-island-btn'),
      ofyrButcherBlockBtn: document.getElementById('ofyr-butcher-block-btn'),
      ofyrWoodStorageBtn: document.getElementById('ofyr-wood-storage-btn'),
      ofyrAccessoiriesBtn: document.getElementById('ofyr-accessoiries-btn'),
    }
  };

  var menu = {
    dispay: function() {
      app.htmlElement.menuIcon.addEventListener('click', function(e) {
        e.preventDefault();
        app.htmlElement.menu.classList.remove('hide');
        app.htmlElement.menuIcon.classList.add('hide');
        menu.close();
      });
    },
    close: function() {
      app.htmlElement.menuClose.addEventListener('click', function(e) {
        e.preventDefault();
        app.htmlElement.menu.classList.add('hide');
        app.htmlElement.menuIcon.classList.remove('hide');

      });
    }
  };

  var products = {
    toggle: function() {
      app.htmlElement.ofyrStorageSecton.classList.add('hide');
      app.htmlElement.ofyrIslandSecton.classList.add('hide');
      app.htmlElement.ofyrButcherBlockSecton.classList.add('hide');
      app.htmlElement.ofyrWoodStorageSecton.classList.add('hide');
      app.htmlElement.ofyrAccessoiriesSecton.classList.add('hide');

      app.htmlElement.ofyrClassicBtn.addEventListener('click', function(e) {
        e.preventDefault();
        app.htmlElement.ofyrClassicSecton.classList.remove('hide');
        app.htmlElement.ofyrStorageSecton.classList.add('hide');
        app.htmlElement.ofyrIslandSecton.classList.add('hide');
        app.htmlElement.ofyrButcherBlockSecton.classList.add('hide');
        app.htmlElement.ofyrWoodStorageSecton.classList.add('hide');
        app.htmlElement.ofyrAccessoiriesSecton.classList.add('hide');

        app.htmlElement.ofyrClassicBtn.classList.add('current');
        app.htmlElement.ofyrStorageBtn.classList.remove('current');
        app.htmlElement.ofyrIslandBtn.classList.remove('current');
        app.htmlElement.ofyrButcherBlockBtn.classList.remove('current');
        app.htmlElement.ofyrWoodStorageBtn.classList.remove('current');
        app.htmlElement.ofyrAccessoiriesBtn.classList.remove('current');
      });
      app.htmlElement.ofyrStorageBtn.addEventListener('click', function(e) {
        e.preventDefault();
        app.htmlElement.ofyrClassicSecton.classList.add('hide');
        app.htmlElement.ofyrStorageSecton.classList.remove('hide');
        app.htmlElement.ofyrIslandSecton.classList.add('hide');
        app.htmlElement.ofyrButcherBlockSecton.classList.add('hide');
        app.htmlElement.ofyrWoodStorageSecton.classList.add('hide');
        app.htmlElement.ofyrAccessoiriesSecton.classList.add('hide');

        app.htmlElement.ofyrClassicBtn.classList.remove('current');
        app.htmlElement.ofyrStorageBtn.classList.add('current');
        app.htmlElement.ofyrIslandBtn.classList.remove('current');
        app.htmlElement.ofyrButcherBlockBtn.classList.remove('current');
        app.htmlElement.ofyrWoodStorageBtn.classList.remove('current');
        app.htmlElement.ofyrAccessoiriesBtn.classList.remove('current');
      });
      app.htmlElement.ofyrIslandBtn.addEventListener('click', function(e) {
        e.preventDefault();
        app.htmlElement.ofyrClassicSecton.classList.add('hide');
        app.htmlElement.ofyrStorageSecton.classList.add('hide');
        app.htmlElement.ofyrIslandSecton.classList.remove('hide');
        app.htmlElement.ofyrButcherBlockSecton.classList.add('hide');
        app.htmlElement.ofyrWoodStorageSecton.classList.add('hide');
        app.htmlElement.ofyrAccessoiriesSecton.classList.add('hide');

        app.htmlElement.ofyrClassicBtn.classList.remove('current');
        app.htmlElement.ofyrStorageBtn.classList.remove('current');
        app.htmlElement.ofyrIslandBtn.classList.add('current');
        app.htmlElement.ofyrButcherBlockBtn.classList.remove('current');
        app.htmlElement.ofyrWoodStorageBtn.classList.remove('current');
        app.htmlElement.ofyrAccessoiriesBtn.classList.remove('current');
      });
      app.htmlElement.ofyrButcherBlockBtn.addEventListener('click', function(e) {
        e.preventDefault();
        app.htmlElement.ofyrClassicSecton.classList.add('hide');
        app.htmlElement.ofyrStorageSecton.classList.add('hide');
        app.htmlElement.ofyrIslandSecton.classList.add('hide');
        app.htmlElement.ofyrButcherBlockSecton.classList.remove('hide');
        app.htmlElement.ofyrWoodStorageSecton.classList.add('hide');
        app.htmlElement.ofyrAccessoiriesSecton.classList.add('hide');

        app.htmlElement.ofyrClassicBtn.classList.remove('current');
        app.htmlElement.ofyrStorageBtn.classList.remove('current');
        app.htmlElement.ofyrIslandBtn.classList.remove('current');
        app.htmlElement.ofyrButcherBlockBtn.classList.add('current');
        app.htmlElement.ofyrWoodStorageBtn.classList.remove('current');
        app.htmlElement.ofyrAccessoiriesBtn.classList.remove('current');
      });
      app.htmlElement.ofyrWoodStorageBtn.addEventListener('click', function(e) {
        e.preventDefault();
        app.htmlElement.ofyrClassicSecton.classList.add('hide');
        app.htmlElement.ofyrStorageSecton.classList.add('hide');
        app.htmlElement.ofyrIslandSecton.classList.add('hide');
        app.htmlElement.ofyrButcherBlockSecton.classList.add('hide');
        app.htmlElement.ofyrWoodStorageSecton.classList.remove('hide');
        app.htmlElement.ofyrAccessoiriesSecton.classList.add('hide');

        app.htmlElement.ofyrClassicBtn.classList.remove('current');
        app.htmlElement.ofyrStorageBtn.classList.remove('current');
        app.htmlElement.ofyrIslandBtn.classList.remove('current');
        app.htmlElement.ofyrButcherBlockBtn.classList.remove('current');
        app.htmlElement.ofyrWoodStorageBtn.classList.add('current');
        app.htmlElement.ofyrAccessoiriesBtn.classList.remove('current');
      });
      app.htmlElement.ofyrAccessoiriesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        app.htmlElement.ofyrClassicSecton.classList.add('hide');
        app.htmlElement.ofyrStorageSecton.classList.add('hide');
        app.htmlElement.ofyrIslandSecton.classList.add('hide');
        app.htmlElement.ofyrButcherBlockSecton.classList.add('hide');
        app.htmlElement.ofyrWoodStorageSecton.classList.add('hide');
        app.htmlElement.ofyrAccessoiriesSecton.classList.remove('hide');

        app.htmlElement.ofyrClassicBtn.classList.remove('current');
        app.htmlElement.ofyrStorageBtn.classList.remove('current');
        app.htmlElement.ofyrIslandBtn.classList.remove('current');
        app.htmlElement.ofyrButcherBlockBtn.classList.remove('current');
        app.htmlElement.ofyrWoodStorageBtn.classList.remove('current');
        app.htmlElement.ofyrAccessoiriesBtn.classList.add('current');
      });
    }
  };

  app.init();
})();
