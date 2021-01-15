<template>
  <div class="gg-tabs-wrap" :class="border ? 'gg-tabs_border' : ''">
    <a class="gg-tab-icon" v-if="!isHidden" @click="prev"
      ><i class="gg-icon icon-icon-arrow-icon-left"></i
    ></a>
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
    <a class="gg-tab-icon" @click="next" v-if="!isHidden"
      ><i class="gg-icon icon-arrow-icon-rigth"></i
    ></a>
  </div>
</template>
<script>
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
  watch: {
    value: {
      handler: "initTabs",
      immediate: true
    }
  },
  data() {
    return {
      isHidden: true
    };
  },
  mounted() {
    this.initTabs();
  },
  methods: {
    toggleTab(t, index) {
      let element = this.$refs["nav-item"][index];
      let width = element.offsetWidth;
      let to = element.offsetLeft - (this.$refs.nav.offsetWidth - width) / 2;
      this.scrollLeftTo(this.$refs.nav, to, 0.3);
      this.$emit("input", t[this.valueKey]);
      this.$emit("tab-click", t);
    },
    scrollLeftTo(scroller, to, duration, val) {
      let count = 0;
      const from = scroller.scrollLeft;
      const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);
      let scrollP = val ? to : to - from;
      function animate() {
        scroller.scrollLeft += scrollP / frames;
        if (++count < frames) {
          window.requestAnimationFrame(animate);
        }
      }
      animate();
    },
    initTabs() {
      this.$nextTick(_ => {
        let navLength = this.$refs.nav.offsetWidth;
        let allItemLength = this.getItemLength();
        if (allItemLength > navLength) {
          this.isHidden = false;
        } else {
          this.isHidden = true;
        }
      });
    },
    // 获取内层宽度
    getItemLength() {
      let allItem = this.$refs["nav-item"];
      return allItem.reduce((a, b) => a + b.offsetWidth, 0);
    },
    next() {
      this.scrollLeftTo(this.$refs.nav, this.$refs.nav.offsetWidth, 0.5, true);
    },
    prev() {
      this.scrollLeftTo(this.$refs.nav, -this.$refs.nav.offsetWidth, 0.5, true);
    }
  }
};
</script>
<style lang="less">
.gg-tabs-wrap {
  display: flex;
  align-items: center;
  padding-bottom: 1px;
  &.gg-tabs_border {
    border-bottom: 1px solid @color-sl;
  }
  .gg-tab-icon {
    &:hover {
      color: @color-t;
    }
  }
}
.gg-tabs {
  font-size: 14px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
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
