<template>
  <div class="Table">
    <!--<button @click="$exportTable('表格名称', [100])">导出表格</button>-->
    <!--<table class="common-table" id="table">-->
    <!--  <tr>-->
    <!--    <th>序号</th>-->
    <!--  </tr>-->
    <!--  <tr>-->
    <!--    <td>1</td>-->
    <!--  </tr>-->
    <!--</table>-->
    <div id="waterWrap">
      <div class="waterWrap" :style="{ width: waterWidth }">
        <ul v-for="(w, i) in waterList" :key="i">
          <li v-for="(item, index) in w" :key="index">{{ item.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {},
  components: {},
  data() {
    return {
      waterList: [],
      waterWidth: null
    };
  },
  mounted() {
    const list = [
      {
        name:
          "1111111112222222222233333333333333333333355424414145424145241555555555555555555"
      },
      { name: "2" },
      {
        name:
          "333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"
      },
      {
        name:
          "46666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666"
      },
      { name: "5" }
    ];
    this.$waterFall(list, this);
  },
  methods: {},
  filters: {},
  watch: {}
};
</script>

<style lang="less">
.Table {
  background-color: #fff;
  min-height: 100vh;
  .waterWrap {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    ul {
      width: 374px;
      word-break: break-all;
      li {
        margin-top: 20px;
        border: @border-d;
      }
    }
  }
}
</style>
