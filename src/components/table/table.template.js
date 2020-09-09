// avoid magic numbers
const CODES = {
	A: 65,
	Z: 90
}

function createCell() {
	return `
		<div class="cell" contenteditable spellcheck="off"></div>
	`
}

function createCol(el) {
	return `
		<div class="column">
			${el}
		</div>
	`
}

function createRow(content, index = '') {
	return `
		<div class="row">
			<div class="row-info">${index}</div>
			<div class="row-data">${content}</div>
		</div>
	`
}


export function createTable(rowsCount = 30) {
	const colsCount = CODES.Z - CODES.A + 1
	const rows = []

	const cols = new Array(colsCount)
		.fill('')
		.map((el, i) => String.fromCharCode(CODES.A + i))
		.map(createCol)
		.join('')

	const cells = new Array(colsCount)
		.fill('')
		.map((el, i) => createCell())
		.join('')

	rows.push(createRow(cols))

	for (let i = 0; i < rowsCount; i++) {
		rows.push(createRow(cells, i+1))
	}

	return rows.join('')
}

// implement infinite cols generation