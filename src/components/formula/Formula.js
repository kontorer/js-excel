import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
	// static to have access without instances
	static className = 'excel__formula'

	// $root is a parent div for returning html
	constructor($root) {
		super($root, {
			name : 'Formula',
			listeners: ['input', 'click']
		})
	}
 
	toHTML() {
		return `
			<div class="info">fx</div>
			<div class="input" contenteditable="true" spellcheck="false">swc</div>
		`
	}

	onInput(event) {
		console.log('formula input', event.target.textContent.trim())
	}

	onClick() {
		console.log('formula click')	
	}
}