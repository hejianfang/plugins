/**
 * @Author: hejianfang
 * @Description: 自定义一个权限指令，对需要权限判断的 Dom 进行显示隐藏。
 * @date 2020-12-21
 * @Varsion: 1.0
 * @Last modified by: 17326
 * @Last modified time: 2020-12-21
 * <div class="btns">
 <!-- 显示 -->
 <button v-permission="'1'">权限按钮1</button>
 <!-- 不显示 -->
 <button v-permission="'10'">权限按钮2</button>
 </div>
 */
const checkArray = key => {
  let arr = ["1", "2", "3", "4"];
  let index = arr.indexOf(key);
  if (index > -1) {
    return true; // 有权限
  } else {
    return false; // 无权限
  }
};

const permission = {
  inserted(el, binding) {
    let permission = binding.value; // 获取到 v-permission的值
    if (permission) {
      let hasPermission = checkArray(permission);
      if (!hasPermission) {
        // 没有权限 移除Dom元素
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  }
};

export default permission;
