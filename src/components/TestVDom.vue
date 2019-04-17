<template>
  <div>
    <!-- <select @click="focusEvent">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select> -->
   <!--  弹框组件 -->
    <!-- <common-dialog ref="commonDialog">
      <template slot="content">
        <div >内容</div>
      </template>
      <template slot="footer">
        <div>按钮</div>
      </template>
    </common-dialog>
    <div>
      <el-button @click="openDialog">弹框</el-button>
    </div> -->
    <!-- 表格组件 -->
    <!-- <common-table :columnsData="columnsData" :tableData="tableData">
      <template slot-scope="scope" slot="operation" >
        <el-button @click="openDialog(scope)">新增</el-button>
        <el-button>编辑</el-button>
        <el-button>删除</el-button>
      </template>
    </common-table> -->
  </div>
</template>

<script>
import CommonTable from './common-com/common-table'
import CommonDialog from './common-com/common-dialog'
export default {
  components: {
    CommonDialog: CommonDialog,
    CommonTable: CommonTable
  },
  data () {
    return {
      // height1: document.body.clientHeight, // 获取不到
      height: window.screen.availHeight,
      width: document.body.clientWidth,
      columnsData: [{
        label: '姓名',
        prop: 'name',
        minWidth: '100'
      }, {
        label: '年龄',
        prop: 'age',
        minWidth: '100'
      }, {
        label: '班级',
        prop: 'name',
        minWidth: '100'
      }, {
        label: '备注',
        prop: 'name',
        minWidth: '100'
      }, {
        label: '年级',
        prop: 'name',
        minWidth: '100'
      }]
    }
  },
  mounted () {
    let checkedItem = {
      label: '年龄',
      prop: 'age',
      minWidth: {
        q: [1, 3],
        d: '122',
        k: 22
      }
    }
    let straa = 'wwwwwwwww'
    let nullaa = null
  },
  methods: {
    focusEvent ($event) {
      console.log('本身事件', $event, $event.clientX, $event.clientY, this.height1, this.width)
    },
    openDialog (prop, prop1) {
      // console.log('122', prop, prop1)
      // this.$refs.commonDialog.open()
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/less" >

</style>
