### Este código fue escrito en CoffeeScript y luego fué compilado ###
(($)->
	name = ""
	$.fn[name] = (options) ->
		defaults =
			attribute: value
		$.extend(defaults, options)
		@.each ->
			$this = $ @
			return
	return
)(jQuery)

(($) ->
	### guardo el nombre del plugin en name para que el script sirva al ser comprimido ###
	name = "email"
	$.fn[name] = (options) ->
		defaults = 
			usuario: "nombre"
			dominio: "dominio.com"

		$.extend defaults, options

		@each ->
			that = $ @
			dato = $ '<a href="mailto:' + defaults.usuario + "@" + defaults.dominio + '">' + defaults.usuario + "@" + defaults.dominio + "</a>"
			dato.appendTo that
			return
	return
)(jQuery)

### Cambia el tamaño de la fuente para que no se vea chica en pantallas de resoluciones mayores a 96ppi como la pantalla del samsung galaxy o el nuevo iPad. Si la resolución es menor a 96ppi (como la pantalla de un televisor) entonces no hace nada. ###

(($)->
	name = "adaptFontSize"
	$.fn[name] = (options) ->
		defaults =
			density: 96

		$.extend defaults, options
		
		@.each ->
			$this = $ @
			getPPI = ->
				element = $ "<div style='float: left; margin: 0; padding: 0; visibility: hidden; width: 1in;'></div>"
				element.appendTo "body"
				ppi = element.outerWidth()
				element.remove()
				ppi
			getFontSize = ->
				size = $this.css "font-size"
				size = Number size.substr(0, size.length - 2)
				size
			ppi = getPPI()
			if ppi < defaults.density
				nFontSize = Math.round(ppi * getFontSize() / defaults.density) + "px"
			$this.css "font-size", nFontSize
			return true
	return
)(jQuery)


### Cambia el valor de los meta tags del plugin Share This para que con los mismos botones se pueda compartir diferentes cosas de la página ###
(($)->
	name = "updateShareThis"
	$.fn[name] = (options) ->
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

$(document).on "ready", ->
	$("html").adaptFontSize density: 60
	# $(window).hashchange()
	return
