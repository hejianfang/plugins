/**
 * @Author: hejianfang
 * @Description: 在开发中，有些提交保存按钮有时候会在短时间内被点击多次，这样就会多次重复请求后端接口，造成数据的混乱，比如新增表单的提交按钮，多次点击就会新增多条重复的数据。
 *               防止按钮在短时间内被多次点击，使用防抖函数限制规定时间内只能点击一次。
 * @date 2020-12-21
 * @Varsion: 1.0
 * @Last modified by: 17326
 * @Last modified time: 2020-12-21
 * <template>
 <button v-debounce="debounceClick">防抖</button>
 </template>
 <script>
 export default {
  methods: {
    debounceClick () {
      console.log('只触发一次')
    }
  }
}
 </script>
 */
const debounce = {
  inserted(el, binding) {
    let timer;
    el.addEventListener("keyup", () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        binding.value();
      }, 1000);
    });
  }
};

export default debounce;
