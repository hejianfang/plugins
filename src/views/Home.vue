<template>
  <div class="home">
    <button @click="$exportSavePdf('标题')">导出</button>
    <div
      v-waterMarker="{
        text: 'lzg版权所有',
        textColor: 'rgba(180, 180, 180, 0.4)'
      }"
    ></div>
    <div id="pdfCentent">
      123
    </div>
    <h-tabs v-model="active" :tabList="list"></h-tabs>
    <button @click="$router.push('/table')">表格页</button>
    <h-hTable
      :data="list"
      :thData="['标题']"
      :tdData="['name']"
      :isSelection="true"
      @selection-change="handleSelectionChange"
    ></h-hTable>
    <button v-copy="copyText">复制</button>
    <div class="h-hScroll">
      <h-hScroll color="rgba(0,0,0,0.2)">
        <div>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
        </div>
      </h-hScroll>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      active: 1,
      list: [
        { name: "标题1", key: 1 },
        { name: "标题2", key: 2 },
        { name: "标题3", key: 3 },
        { name: "标题4", key: 4 },
        { name: "标题5", key: 5 },
        { name: "标题6", key: 6 },
        { name: "标题7", key: 7 },
        { name: "标题8", key: 8 }
      ],
      copyText: "a copy directives"
    };
  },
  methods: {
    handleSelectionChange(list) {
      console.log(list);
    }
  }
};
</script>
<style lang="less">
.h-hScroll {
  height: 100px;
  width: 200px;
  background: #fff;
}
</style>
