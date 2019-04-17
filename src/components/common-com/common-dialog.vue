<template>
  <el-dialog :title="titleStr"
  top="3%"
  width="1000px"
  class="dialog"
  :visible.sync="dialogTableVisible">
    <div class="dialog-style">
      <!-- 弹框内容 -->
      <div class="dialog-content">
        <slot name="content"></slot>
      </div>
      <!-- 弹框底部按钮 -->
      <div class="dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      titleStr: '弹框头数据', // 弹框标题头
      dialogTableVisible: false
    }
  },
  mounted () {
  },
  methods: {
    // 打开弹框事件
    open () {
      this.dialogTableVisible = true
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/less">
.dialog {
  .el-dialog__body {
    padding: 10px 10px;
  }
  .dialog-style {
    position: relative;
    height: 500px;
    .dialog-content {
      height: 90%;
    }
    .dialog-footer {
      position: absolute;
      height: 10%;
      right: 10px;
      bottom: 10px;
    }
  }
}
</style>
