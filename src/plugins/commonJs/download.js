// eslint-disable-next-line no-unused-vars
function isJSON(str) {
  if (typeof str == "string") {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }
}

// eslint-disable-next-line no-unused-vars
const download = (data, options = {}) => {
  /**
   * @ options 配置
   * msg
   * successCallback
   * errCallback
   * **/
  if (!data) return;
  let reader = new FileReader();
  reader.readAsText(data.data);
  reader.onload = e => {
    let isJson = isJSON(e.currentTarget.result);
    if (isJson) {
      const result = JSON.parse(e.currentTarget.result);
      if (!result.success && result.success === false) {
        // Message({
        //   message: result.message || 'error',
        //   type: 'error'
        // })
        console.log(result.message);
        if (options.errCallback && typeof options.errCallback === "function") {
          options.errCallback();
        }
      } else {
        // Message({
        //   message: result.message || 'ok',
        //   type: 'success'
        // })
        console.log(result.message);
        if (
          options.successCallback &&
          typeof options.successCallback === "function"
        ) {
          options.successCallback();
        }
      }
    } else {
      if (
        options.successCallback &&
        typeof options.successCallback === "function"
      ) {
        options.successCallback();
      }
      // if (msg) {
      //   MessageBox.alert(msg, '提示', {
      //     confirmButtonText: '确定'
      //   });
      // }
      let fileName = data.headers["content-disposition"]
        .match(/filename=(\S*)/)[1]
        .replace(/"/g, "");
      const blob = new Blob([data.data]);
      if ("msSaveBlob" in navigator) {
        console.log("IE10+下载");
        //  window.navigator.msSaveOrOpenBlob  // 提供保存和打开按钮
        navigator.msSaveBlob(blob, fileName); // 只提供一个保存按钮
      } else {
        console.log("非IE下载");
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.target = "_blank";
        link.download = decodeURIComponent(fileName);
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(link.href); // 释放URL 对象
        document.body.removeChild(link);
      }
    }
  };
};

export default download;
