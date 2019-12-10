/**
 * @Author: hejianfang
 * @Description: 插件有pdf失真的情况
 * @date 2019-12-04
 * @Varsion: 1.0
 * @Last modified by: hejian
 * @Last modified time: 2019-12-04
 */
import html2Canvas from "html2canvas";
import JsPDF from "jspdf";
const exportSavePdf = title => {
  let element = document.getElementById("pdfCentent");
  let c = document.createElement("canvas");
  let opts = {
    scale: 2,
    canvas: c,
    logging: true,
    dpi: window.devicePixelRatio * 2,
    width: element.offsetWidth,
    height: element.offsetHeight,
    scrollY: 0
  };
  c.width = element.offsetWidth * 4;
  c.height = element.offsetHeight * 4;
  c.getContext("2d").scale(2, 2);
  html2Canvas(element, opts).then(canvas => {
    let contentWidth = canvas.width;
    let contentHeight = canvas.height;
    let pageHeight = (contentWidth / 572.28) * 841.89;
    let leftHeight = contentHeight;
    let position = 0;
    let imgWidth = 575.28;
    let imgHeight = (572.28 / contentWidth) * contentHeight;
    let pageData = canvas.toDataURL("image/jpeg", 1.0);
    let PDF = new JsPDF("", "pt", "a4");
    if (leftHeight < pageHeight) {
      PDF.addImage(pageData, "JPEG", 10, 10, imgWidth, imgHeight);
    } else {
      while (leftHeight > 0) {
        PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
        leftHeight -= pageHeight;
        position -= 841.89;
        if (leftHeight > 0) {
          PDF.addPage();
        }
      }
    }
    PDF.save(title + ".pdf");
  });
};
export default exportSavePdf;
