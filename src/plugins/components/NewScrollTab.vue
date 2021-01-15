<template>
  <ul class="gg-tabs" ref="nav">
    <li
      ref="nav-item"
      class="gg-tab-item"
      :class="t[valueKey] === value ? 'gg-tab-item-active' : ''"
      @click="toggleTab(t, i)"
      v-for="(t, i) in tabs"
      :key="t[valueKey]"
    >
      <a class="gg-t-name">{{ t.name }}</a>
    </li>
  </ul>
</template>
<script>
const fn1 = (fn, th, to, from) => {
  let count = 0;
  let animate = function() {
    fn(th, to, from);
    if (++count < 18) {
      window.requestAnimationFrame(animate);
    }
  };
  return animate;
};
export default {
  props: {
    tabs: Array,
    value: [String, Number, Boolean],
    valueKey: {
      type: String,
      default: "key"
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleTab(t, index) {
      let element = this.$refs["nav-item"][index];
      let width = element.offsetWidth;
      let to = element.offsetLeft - (this.$refs.nav.offsetWidth - width) / 2;
      let from = this.$refs.nav.scrollLeft;
      let fnn = fn1(
        (...args) => {
          const [vm, to, from] = args;
          vm.$refs.nav.scrollLeft += (to - from) / 16;
        },
        this,
        to,
        from
      );
      fnn();
      this.$emit("input", t[this.valueKey]);
      this.$emit("tab-click", t);
    }
  }
};
</script>
<style lang="less">
.gg-tabs {
  font-size: 14px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 1px;
  &.gg-tabs_border {
    border-bottom: 1px solid @color-sl;
  }
  .gg-tab-item {
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    padding: 10px 20px;
    color: @color-d;
    &.gg-tab-item-active {
      color: @color-t;
      font-weight: 700;
      .gg-t-name {
        position: relative;
        &::after {
          content: "";
          display: block;
          width: 70%;
          height: 4px;
          border-radius: 2px;
          background: @color-t;
          position: absolute;
          left: 50%;
          bottom: -14px;
          transform: translateX(-50%);
        }
      }
    }
  }
  .gg-tab-item + .gg-tab-item {
    margin-left: 10px;
  }
}
</style>
