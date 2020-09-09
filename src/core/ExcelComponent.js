import {DOMListener} from '@core/DOMListener'

// base class for logic components
export class ExcelComponent extends DOMListener {
	// returns component's template
	constructor($root, options = {listeners: []}) {
		super($root, options.listeners)
		this.listeners = options.listeners
		this.$root = $root
		this.name = options.name || ''
	}

	toHTML() {
		return ''
	}

	init() {
		this.initDOMListeners()
	}

	destroy() {
		this.removeDOMListeners()
	}
}


// FIX OPTIONS DEFAULT VALUE WHEN POSSIBLE
// now  / options = {} /  still gets undefined