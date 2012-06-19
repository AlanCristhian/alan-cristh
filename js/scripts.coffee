### Este código fue escrito en CoffeeScript y luego fué compilado ###
(($)->
	$.fn.name = (options) ->
		defaults =
			attribute: value
		$.extend(defaults, options)
		@.each ->
			$this = $ @
			return
	return
)(jQuery)

### guardo el nombre del plugin en name para que el script sirva al ser comprimido ###
(($) ->
	$.fn.email = (options) ->
		defaults =
			usuario: "nombre"
			dominio: "dominio.com"

		$.extend(defaults, options)

		@each ->
			that = $(@)
			dato = $('<a href="mailto:' + defaults.usuario + "@" + defaults.dominio + '">' + defaults.usuario + "@" + defaults.dominio + "</a>")
			dato.appendTo(that)
			return
	return
)(jQuery)


### Cambia el valor de los meta tags del plugin Share This para que con los mismos botones se pueda compartir diferentes cosas de la página ###
(($)->
	$.fn.updateShareThis = (options) ->
		defaults =
			attribute: value
		$.extend(defaults, options)
		@.each ->
			$this = $ @
			return
	return
)(jQuery)

### Uso el plugin hashchange para hacer usables los botones "atrás" y "adelante" del navegador.Este plugin fue sacado de http://archive.plugins.jquery.com/project/hashchange

Este método está en el archivo ../js/plugins/jquery.hashchange.js ###

$(window).hashchange ->
	hashBang = location.hash
	if hashBang.length > 1
		direccion = hashBang.substr 3, hashBang.length
		direccion = "../" + direccion + ".html"
		$("#contenido").load direccion
	else
		$("#contenido").load "home.html"
	return

### El método responsivesize cambia los tamaños para que los elementos no se vean pequeños en resoluciones mayores a 96dpi.

Este método está en el archivo ../js/plugins/jquery.responsivesie.js ###

$(document).on "ready", ->
	# $(window).hashchange()
	$("img.lazy").show().lazyload()
	return
