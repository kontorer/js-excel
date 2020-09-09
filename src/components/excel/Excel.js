import {$} from '@core/dom'

// creates wrapper div and renders all logic blocks (components)
export class Excel {
	constructor(selector, options) {
		// dollar sign for DOM elements
		this.$el = $(selector)
		this.components = options.components || []
	}

	getRoot() {
		// create wrapper
		const $root = $.create('div', 'excel')

		// iterate through components and append to wrapper, map to use class methods 
		this.components = this.components.map(Component => {
			const $el = $.create('div', Component.className)
			const component = new Component($el)
			
			// DEBUG
			// if(component.name) {
			// 	window['c' + component.name] = component
			// }

			$el.html(component.toHTML())
			$root.append($el)
			return component
		})

		return $root
	}

	// renders wrapper with components in main container(selector)
	render() {
		this.$el.append(this.getRoot())

		// init listeners&stuff only after components appeared
		this.components.forEach(component => component.init())
	}

}
