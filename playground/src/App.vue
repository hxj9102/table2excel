<template>
  <div id="app">
    <button @click="toExcel">生成excel</button>
  </div>
</template>

<script>
import Workbook from '../../src'

const columns = [
  { header: 'Id', key: 'id', alignment: { vertical: 'middle', horizontal: 'center' } },
  { header: 'Name', key: 'name' },
  { header: 'D.O.B.', key: 'dob', width: 15 },
  { header: 'Pic.', key: 'pic', type: 'image', width: 20, height: 60 },
]

// const columns = [
//   { header: 'Id', key: 'id', alignment: { vertical: 'middle', horizontal: 'center' } },
//   { header: 'Name', key: 'name' },
//   { header: 'D.O.B.', key: 'dob', width: 15 },
//   { header: 'Pic.', key: 'pic' },
// ]

const values = new Array(10).fill({}).map(() => {
  return {
    id: 13,
    name: 'Thing 1',
    dob: new Date(),
    pic: 'https://t7.baidu.com/it/u=848096684,3883475370&fm=193&f=GIF',
  }
})

export default {
  data () {
    return {
    }
  },
  methods: {
    async toExcel () {
      const workbook = new Workbook()

      await workbook.addSheet({
        sheetName: 'mySheet',
        columns,
        values,
      })

      await workbook.toExcel('my-excel.xlsx')

      console.log('success')
    },
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
