<template>
  <div id="app">
    <h3>column</h3>
    <textarea @input="change('column', $event)">
      {{ column }}
    </textarea>

    <h3>data</h3>
    <textarea @input="change('data', $event)">
      {{ data }}
    </textarea>

    <button @click="toExcel">生成excel</button>
  </div>
</template>

<script>
import table2excel from '../../src'

const column = [
  {
    title: '宠物',
    key: 'name',
  },
  {
    title: '图例',
    key: 'pic',
    type: 'image',
    width: 200,
    height: 120,
  }
]

const data = [
  {
    name: 'dog',
    pic: 'https://t7.baidu.com/it/u=848096684,3883475370&fm=193&f=GIF',
    size: [100, 60],
  },
  {
    name: 'cat',
    pic: 'https://t7.baidu.com/it/u=2272690563,768132477&fm=193&f=GIF',
  }
]

const excelName = '爱宠'

const captionName = '爱宠一览图'

export default {
  data () {
    return {
      column,
      data,
    }
  },
  methods: {
    toExcel () {
      table2excel({
        column,
        data,
        excelName,
        captionName,
      })
      // you can also use
      // table2excel(column, data, excelName, captionName)
    },
    change (key, e) {
      this[key] = JSON.parse(e.target.value)
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  textarea {
    width: 100%;
    height: 400px;
  }
}
</style>
