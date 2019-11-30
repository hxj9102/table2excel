# table2excel
text and image save to excel


### Installation

```
npm install js-table2excel
```

### Usage
``` javascript
import table2excel from 'js-table2excel'

const column = [
	{
		title: 'Name',
		key: 'name',
		type: 'text'
	},
	{
		title: 'Pic',
		key: 'pic',
		type: 'image',
		width: 80,
		height: 50
	}
]
const data = [
	{
		name: 'xiao',
		age: '18',
		pic: ''
	},
	{
		name: 'jie',
		age: '18',
		pic: ''
	}
]
const excelName = 'boy'

table2excel(column, data, excelName)

```
### Introduction

* title: name for column

* key: key for column

* type: 

```
text: defalut
image: only accept start with http or https, and it can set image width and height
```