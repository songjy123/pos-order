<template>
	<div>
		<el-table
      :data="tableData"
      max-height="400"
      border>
      <el-table-column
        align="center"
        :show-overflow-tooltip="true"
        v-for="item in columnsData"
        :key="item.label"
        :prop="item.prop"
        :label="item.label"
        :min-width="item.minWidth">
      </el-table-column>
      <el-table-column
        align="center"
        label="操作">
        <template slot-scope="scope" >
          <slot :scope="scope" name="operation" ></slot>
        </template>
      </el-table-column>
    </el-table>
	</div>
</template>
<script>
export default {
	props: {
		columnsData: Array,
		tableData: Array
	},
  components: {
  },
  data () {
    return {}
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" rel="stylesheet/less">
</style>