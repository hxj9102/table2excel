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
    title: '宠物',
    key: 'name',
  },
  {
    title: '图例',
    key: 'pic',
    type: 'image',
  }
]

const data = [
  {
    name: 'dog',
    pic: 'https://t7.baidu.com/it/u=848096684,3883475370&fm=193&f=GIF',
    size: [100, 60], // image size for picture
  },
  {
    name: 'cat',
    pic: 'https://t7.baidu.com/it/u=2272690563,768132477&fm=193&f=GIF',
  }
]

const excelName = '爱宠'

const captionName = '爱宠一览图'

table2excel({
    column,
    data,
    excelName,
    captionName: '爱宠列表',
})
// you can also use
// table2excel(column, data, excelName, captionName)
```
### table2excel options

|             | type   | default |
| ----------- | ------ | ------- |
| column      | Array  | []      |
| data        | Array  | []      |
| excelName   | String | -       |
| captionName | String | -       |



### column options

|       | introduction    | type   | default |
| ----- | --------------- | ------ | ------- |
| title | name for column | String | -       |
| key   | key for column  | String | -       |
| type  | text\|image     | String | text    |