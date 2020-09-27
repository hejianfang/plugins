/**
 * @Author: hejianfang
 * @Description: 瀑布流布局
 * @params: elementId 获取瀑布流包裹层id, itemWidth 每个元素的宽度, grid 间隔， list 展示列表, _this 传入实例
 * @date 2020-07-07
 * @Varsion: 1.0
 * @Last modified by: hejian
 * @Last modified time: 2020-07-07
 */
const elementResizeDetectorMaker = require("element-resize-detector"); // 导入
// 创建实例
const erd = elementResizeDetectorMaker();
const waterFall = (
  list,
  _this,
  elementId = "waterWrap",
  itemWidth = 374,
  grid = 16
) => {
  if (list && !list.length) return; // 数组为空时，直接返回
  // 监听id为test的元素 大小变化
  let element = document.getElementById(elementId);
  erd.listenTo(element, e => {
    const elementWidth = e.offsetWidth;
    let column = (elementWidth / parseInt(itemWidth)) | 0;
    const totalWidth =
      (column - 1) * parseInt(grid) + column * parseInt(itemWidth);
    if (totalWidth > elementWidth) {
      column = column - 1;
    }
    // column 列数 动态生成二维数组
    let width;
    width = column * parseInt(itemWidth) + (column - 1) * parseInt(grid);
    let targetArr = [];
    for (let i = 0; i < column; i++) {
      targetArr[i] = [];
    }
    list.forEach((l, index) => {
      let remainder = index % column;
      targetArr[remainder].push(l);
    });
    _this.waterList = targetArr;
    _this.waterWidth = width + "px";
  });
};
export default waterFall;
