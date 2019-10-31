<template>
  <div class="home">
    <h-tabs v-model="active" :tabList="list"></h-tabs>
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
      ]
    };
  },
  methods: {}
};
</script>
