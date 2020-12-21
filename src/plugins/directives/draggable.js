/**
 * @Author: hejianfang
 * @Description: 实现一个拖拽指令，可在页面可视区域任意拖拽元素。
 * @date 2020-12-21
 * @Varsion: 1.0
 * @Last modified by: 17326
 * @Last modified time: 2020-12-21
 * <template>
 <div class="el-dialog" v-draggable></div>
 </template>
 */
const draggable = {
  inserted(el) {
    el.style.cursor = "move";
    el.onmousedown = (e) => {
      let disx = e.pageX - el.offsetLeft;
      let disy = e.pageY - el.offsetTop;
      document.onmousemove = (e) => {
        let x = e.pageX - disx;
        let y = e.pageY - disy;
        let maxX =
          document.body.clientWidth -
          parseInt(window.getComputedStyle(el).width);
        let maxY =
          document.body.clientHeight -
          parseInt(window.getComputedStyle(el).height);
        if (x < 0) {
          x = 0;
        } else if (x > maxX) {
          x = maxX;
        }
        if (y < 0) {
          y = 0;
        } else if (y > maxY) {
          y = maxY;
        }
        el.style.left = x + "px";
        el.style.top = y + "px";
      };
      document.onmouseup = () => {
        document.onmousemove = document.onmouseup = null;
      };
    };
  }
};
export default draggable;
