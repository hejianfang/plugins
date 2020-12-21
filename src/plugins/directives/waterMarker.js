/**
 * @Author: hejianfang
 * @Description: 给整个页面添加背景水印
 * @date 2020-12-21
 * @Varsion: 1.0
 * @Last modified by: 17326
 * @Last modified time: 2020-12-21
 * <template>
 <div v-waterMarker="{text:'版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
 </template>
 */
const addWaterMarker = (str, parentNode, font, textColor) => {
  // 水印文字，父元素，字体，文字颜色
  let can = document.createElement("canvas");
  parentNode.appendChild(can);
  can.width = 200;
  can.height = 150;
  can.style.display = "none";
  let cans = can.getContext("2d");
  cans.rotate((-20 * Math.PI) / 180);
  cans.font = font || "16px Microsoft JhengHei";
  cans.fillStyle = textColor || "rgba(180, 180, 180, 0.3)";
  cans.textAlign = "left";
  cans.textBaseline = "Middle";
  cans.fillText(str, can.width / 10, can.height / 2);
  parentNode.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";
};

const waterMarker = {
  bind(el, binding) {
    addWaterMarker(
      binding.value.text,
      el,
      binding.value.font,
      binding.value.textColor
    );
  }
};

export default waterMarker;
