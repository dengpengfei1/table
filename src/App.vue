<template>
  <div id="app">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="wayNo"
        label="wayNo"
        width="180">
      </el-table-column>
      <el-table-column
        prop="logDate"
        label="logDate">
      </el-table-column>
      <el-table-column
        prop="entyrCount"
        label="entyrCount">
      </el-table-column>
      <el-table-column
        prop="clickCount"
        label="clickCount">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNo"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      pageNo: 1,
      tableData: [],
      pageSize: 10,
      total: 0
    }
  },
  created () {
    this.getDate()
  },
  methods: {
    getDate () {
      fetch(`/queryLog?pageSize=${this.pageSize}&pageNo=${this.pageNo}`).then(res => res.json()).then(res => {
        let { data } = res
        this.total = data.total
        this.tableData = data.list
      })
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.pageNo = 1
      this.getDate()
    },
    handleCurrentChange (val) {
      this.pageNo = val
      this.getDate()
    }
  }
}
</script>

<style>
#app {
  padding: 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
