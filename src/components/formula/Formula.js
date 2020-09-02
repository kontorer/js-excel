import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
	// static to have access without instances
	static className = 'excel__formula'

	toHTML() {
		return '<h1>fml</h1>'
	}
}