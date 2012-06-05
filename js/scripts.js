
/* Este código fue escrito en CoffeeScript y luego fué compilado
*/


(function() {

	(function($) {
		var name;
		name = "";
		$.fn[name] = function(options) {
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
	})(jQuery);

	(function($) {
		/* guardo el nombre del plugin en name para que el script sirva al ser comprimido
		*/

		var name;
		name = "email";
		$.fn[name] = function(options) {
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
	})(jQuery);

	/* Cambia el tamaño de la fuente para que no se vea chica en pantallas de resoluciones mayores a 96ppi como la pantalla del samsung galaxy o el nuevo iPad. Si la resolución es menor a 96ppi (como la pantalla de un televisor) entonces no hace nada.
	*/


	(function($) {
		var name;
		name = "adaptFontSize";
		$.fn[name] = function(options) {
			var defaults;
			defaults = {
				density: 96
			};
			$.extend(defaults, options);
			return this.each(function() {
				var $this, getFontSize, getPPI, nFontSize, ppi;
				$this = $(this);
				getPPI = function() {
					var element, ppi;
					element = $("<div style='float: left; margin: 0; padding: 0; visibility: hidden; width: 1in;'></div>");
					element.appendTo("body");
					ppi = element.outerWidth();
					element.remove();
					return ppi;
				};
				getFontSize = function() {
					var size;
					size = $this.css("font-size");
					size = Number(size.substr(0, size.length - 2));
					return size;
				};
				ppi = getPPI();
				if (ppi < defaults.density) {
					nFontSize = Math.round(ppi * getFontSize() / defaults.density) + "px";
				}
				$this.css("font-size", nFontSize);
				return true;
			});
		};
	})(jQuery);

	/* Cambia el valor de los meta tags del plugin Share This para que con los mismos botones se pueda compartir diferentes cosas de la página
	*/


	(function($) {
		var name;
		name = "updateShareThis";
		$.fn[name] = function(options) {
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
	})(jQuery);

	/* Uso el plugin hashchange para hacer usables los botones "atrás" y "adelante" del navegador.Este plugin fue sacado de http://archive.plugins.jquery.com/project/hashchange
	
	Este método está en el archivo ../js/plugins/jquery.hashchange.js
	*/


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

	$(document).on("ready", function() {
		$("html").adaptFontSize({
			density: 60
		});
	});

}).call(this);
