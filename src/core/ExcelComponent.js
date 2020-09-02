import {DOMListener} from '@core/DOMListener'

// base class for logic components
export class ExcelComponent extends DOMListener {
	// returns component's template
	constructor() {
		super()
	}
	toHTML() {
		return ''
	}
}