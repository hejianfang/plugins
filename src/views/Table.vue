<template>
  <div class="Table">
    <button @click="$exportTable('表格名称', [100])">导出表格</button>
    <table class="common-table" id="table">
      <tr>
        <th>序号</th>
      </tr>
      <tr>
        <td>1</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {},
  components: {},
  data () {
    return {}
  },
  computed: {},
  created () {},
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style lang="less">
  .Table{}
</style>
