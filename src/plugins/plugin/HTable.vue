<template>
  <div class="HTable">
    <table class="common-table">
      <tr>
        <th>
          <label v-if="isSelection"
            ><input
              type="checkbox"
              v-model="mainCheckboxFlag"
              @change="mainCheckboxMsgAllFn"
            />序号</label
          >
          <span v-else>序号</span>
        </th>
        <th v-for="(th, ti) in thData" :key="ti">{{ th }}</th>
      </tr>
      <tr v-for="(d, i) in data" :key="i">
        <td>
          <label v-if="isSelection"
            ><input
              type="checkbox"
              v-if="isSelection"
              :value="d"
              v-model="mainCheckboxMsg"
              @change="mainCheckboxMsgFn"
            />{{ i + 1 }}</label
          >
          <span v-else>{{ i + 1 }}</span>
        </td>
        <td v-for="(td, tdIndex) in tdData" :key="tdIndex">{{ d[td] }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "HTable",
  props: {
    data: Array,
    thData: Array,
    tdData: Array,
    isSelection: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mainCheckboxFlag: false,
      mainCheckboxMsg: []
    };
  },
  methods: {
    mainCheckboxMsgAllFn() {
      if (this.mainCheckboxFlag) {
        this.mainCheckboxMsg = [];
        for (let i = 0, iMax = this.data.length; i < iMax; i++) {
          this.mainCheckboxMsg.push(this.data[i]);
        }
      } else {
        this.mainCheckboxMsg = [];
      }
    },
    mainCheckboxMsgFn() {
      if (this.mainCheckboxMsg.length === this.data.length) {
        this.mainCheckboxFlag = true;
      } else {
        this.mainCheckboxFlag = false;
      }
    }
  },
  watch: {
    mainCheckboxMsg(val) {
      if (val) {
        this.$emit('selection-change', val)
      }
    }
  }
};
</script>

<style lang="less">
.HTable {
}
</style>
