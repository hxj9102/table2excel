// exceljs 所需的 polyfills
require('core-js/modules/es.symbol');
require('core-js/modules/es.symbol.async-iterator');
require('regenerator-runtime/runtime');

const Workbook = require('exceljs/dist/es5/doc/workbook')
const imageToBase64 = require('image-to-base64/browser.min')
const saveAs = require('file-saver')

Workbook.prototype.addSheet = async function ({
	sheetName = 'sheet',
	columns = [],
	values = [],
	...config
} = {}) {
	const worksheet = this.addWorksheet(sheetName, config)
	worksheet.columns = columns

	const promises = []

	values.forEach((rowValue, i) => {
		const rowIndex = i + 2
		const row = worksheet.getRow(rowIndex)

		columns.forEach((
			{
				key,
				type,
				height,
				alignment = { vertical: 'middle', horizontal: 'left' },
				imageConfig = {},
			},
			j
		) => {
			const value = rowValue[key]
			const columnIndex = j + 1

			const fn = async () => {
				if (type === 'image') {
					const base64 = await imageToBase64(value)
					const imageId = this.addImage({ base64 })

					worksheet.addImage(imageId, {
						tl: { col: columnIndex - 1, row: rowIndex - 1 },
						br: { col: columnIndex, row: rowIndex },
						...imageConfig,
					})
					// row.getCell(columnIndex).value = `<table><img src="${value}"></table>`
				} else {
					row.getCell(columnIndex).value = value
				}

				if (height) {
					worksheet.getRow(rowIndex).height = height
				}

				row.getCell(columnIndex).alignment = alignment
				worksheet.getRow(1).getCell(columnIndex).alignment = alignment

				return Promise.resolve()
			}
			
			promises.push(fn())
		})
	})

	await Promise.all(promises)

	return worksheet
}

Workbook.prototype.toExcel = function (fileName = 'workbook.xlsx') {
	return this.xlsx.writeBuffer().then(buffer => {
		return saveAs(
			new Blob([buffer], { type: 'application/octet-stream' }),
			fileName,
		)
	})
}

export default Workbook
