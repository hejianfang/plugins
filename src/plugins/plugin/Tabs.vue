<template>
  <div class="Tabs">
    <ul v-scroll>
      <li
        v-for="(t, i) in tabList"
        :key="i"
        @click="changeTab(t[valueKey])"
        :class="value === t[valueKey] ? 'isActive' : ''"
      >
        <span>{{ t.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    value: [String, Number],
    tabList: {
      type: Array,
      default: () => []
    },
    valueKey: {
      type: String,
      default: "key"
    }
  },
  directives: {
    scroll: {
      componentUpdated(el) {
        let liList = el.getElementsByTagName("li");
        let index = [...liList].findIndex(i => i.className === "isActive");
        let listWidth = [...liList][index].offsetWidth;
        let listLeft = [...liList][index].offsetLeft;
        const from = el.scrollLeft;
        let to = listLeft - (el.offsetWidth - listWidth) / 2;
        let count = 0;
        const frames = Math.round((0.3 * 1000) / 16);
        let animate = () => {
          el.scrollLeft += (to - from) / frames;
          if (++count < frames) {
            window.requestAnimationFrame(animate);
          }
        };
        animate();
      }
    }
  },
  methods: {
    changeTab(v) {
      this.$emit("input", v);
    }
  }
};
</script>

<style lang="less">
.Tabs {
  ul {
    overflow: auto;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      display: inline-block;
      width: 60px;
      text-align: center;
      &.isActive {
        background-color: #126bf5;
        color: #fff;
      }
    }
  }
}
</style>
