/**
 * @Author: hejianfang
 * @Description: 开发中遇到的表单输入，往往会有对输入内容的限制，比如不能输入表情和特殊字符，只能输入数字或字母等。
 * @date 2020-12-21
 * @Varsion: 1.0
 * @Last modified by: 17326
 * @Last modified time: 2020-12-21
 * <template>
 <input type="text" v-model="note" v-emoji />
 </template>
 */
let findEle = (parent, type) => {
  return parent.tagName.toLowerCase() === type
    ? parent
    : parent.querySelector(type);
};

const trigger = (el, type) => {
  const e = document.createEvent("HTMLEvents");
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
};

const emoji = {
  bind(el) {
    // 正则规则可根据需求自定义
    var regRule = /[^u4E00-u9FA5|d|a-zA-Z|rns,.?!，。？！…—&$=()-+/*{}[]]|s/g;
    let $inp = findEle(el, "input");
    el.$inp = $inp;
    $inp.handle = () => {
      let val = $inp.value;
      $inp.value = val.replace(regRule, "");
      trigger($inp, "input");
    };
    $inp.addEventListener("keyup", $inp.handle);
  },
  unbind(el) {
    el.$inp.removeEventListener("keyup", el.$inp.handle);
  }
};

export default emoji;
