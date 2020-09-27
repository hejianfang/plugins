/**
 * @Author: hejianfang
 * @Description:
 * @date 2019-12-05
 * @Varsion: 1.0
 * @Last modified by: hejian
 * @Last modified time: 2019-12-05
 */
import XLSX from "xlsx";
const exportTable = (name = "模板", arr = [], colspan = 10) => {
  let table = document.getElementById("table");
  let list = [...table.getElementsByClassName("none")];
  if (list && list.length) {
    list.forEach(t => {
      t.style.display = "none";
    });
  }
  let worksheet = XLSX.utils.table_to_sheet(table);
  let workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "sheet");
  // 定义每列的宽度，默认为200px
  let worksheetWidths = [];
  if (arr && arr.length) {
    arr.forEach(a => {
      worksheetWidths.push({ wpx: a });
    });
  } else {
    for (let i = 1; i <= colspan; i++) {
      worksheetWidths.push({ wpx: 200 });
    }
  }
  worksheet["!cols"] = worksheetWidths;
  try {
    XLSX.writeFile(workbook, name + ".xlsx");
    if (list && list.length) {
      list.forEach(t => {
        t.style = null;
      });
    }
  } catch (e) {
    console.log(e, workbook);
  }
};
export default exportTable;
