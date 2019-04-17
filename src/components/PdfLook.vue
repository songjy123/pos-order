<template>
  <!-- 读取pdf文件 -->
  <div>
    <pdf src="./static/relativity.pdf" :page="1">
      <template slot="loading">
        loading content here...
      </template>
    </pdf>
  </div>
</template>

<script>
import pdf from 'pdfvuer'
export default {
  components: {
    pdf
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" rel="stylesheet/less" >
</style>
