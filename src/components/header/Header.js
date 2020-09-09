import {ExcelComponent} from '@core/ExcelComponent'

export class Header extends ExcelComponent {
	static className = 'excel__header'

	toHTML() {
		return `
			<input type="text" name="" class="input" value="New Spreadsheet">
				<div>
					<div class="button">
						<span class="material-icons">exit_to_app</span>
					</div>
					<div class="button">
						<span class="material-icons">delete_outline</span>
					</div>
				</div>	
		`
	}
}