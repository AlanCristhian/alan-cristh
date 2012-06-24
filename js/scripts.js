/**
 * @nombre Alan Cristhian
 * @fecha 2011
 * bla balskjdf jañlkj ñlkj ñl kjñl kjñ lk
 * añlsdjfijwerpoiuqwe oip oiu iou poiu poiu
 */

/* Este código fue escrito en CoffeeScript y luego fué compilado */

(function() {

	(function($, window) {
		$.fn.name = function(options) {
			var defaults;
			defaults = {
				attribute: value
			};
			$.extend(defaults, options);
			return this.each(function() {
				var $this;
				$this = $(this);
			});
		};
	})(jQuery, window);


	/* guardo el nombre del plugin en name para que el script sirva al ser comprimido */

	(function($, window) {
		$.fn.email = function(options) {
			var defaults;
			defaults = {
				usuario: "nombre",
				dominio: "dominio.com"
			};
			$.extend(defaults, options);
			return this.each(function() {
				var dato, that;
				that = $(this);
				dato = $('<a href="mailto:' + defaults.usuario + "@" + defaults.dominio + '">' + defaults.usuario + "@" + defaults.dominio + "</a>");
				dato.appendTo(that);
			});
		};
	})(jQuery, window);


	/* Cambia el valor de los meta tags del plugin Share This para que con los mismos botones se pueda compartir diferentes cosas de la página */

	(function($, window) {
		$.fn.updateShareThis = function(options) {
			var defaults;
			defaults = {
				attribute: value
			};
			$.extend(defaults, options);
			return this.each(function() {
				var $this;
				$this = $(this);
			});
		};
	})(jQuery, window);


	/* Uso el plugin hashchange para hacer usables los botones "atrás" y "adelante" del navegador.Este plugin fue sacado de http://archive.plugins.jquery.com/project/hashchange
	
	Este método está en el archivo ../js/plugins/jquery.hashchange.js */
	// asdfasdf
	$(window).hashchange(function() {
		var direccion, hashBang;
		hashBang = location.hash;
		if (hashBang.length > 1) {
			direccion = hashBang.substr(3, hashBang.length);
			direccion = "../" + direccion + ".html";
			$("#contenido").load(direccion);
		} else {
			$("#contenido").load("home.html");
		}
	});


	/* El método responsivesize cambia los tamaños para que los elementos no se vean pequeños en resoluciones mayores a 96dpi.
	
	Este método está en el archivo ../js/plugins/jquery.responsivesie.js */

	$(document).on("ready", function() {
		$("img.lazy").show().lazyload();
	});

}).call(this);
