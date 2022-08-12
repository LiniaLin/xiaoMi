window.onload = function () {
  function btnFunc(btn, func) {
    var btn = document.getElementById(btn);
    btn.onclick = func;
  }
  var inputSelectAll = document.getElementById("selectAllBox");
  var items = document.getElementsByName("item");
  for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {
      //alert("hello");
    };
  }
  //- selectAll Button
  btnFunc("selectAllBtn", function () {
    for (var i = 0; i < items.length; i++) {
      items[i].checked = true;
    }
    inputSelectAll.checked = true;
  });
  // -clearAll Button
  btnFunc("clear", function () {
    for (var i = 0; i < items.length; i++) {
      items[i].checked = false;
    }
    inputSelectAll.checked = false;
  });
  // -invert Button
  btnFunc("invert", function () {
    for (var i = 0; i < items.length; i++) {
      items[i].checked = !items[i].checked;
    }
    inputSelectAll.checked = true;
    for (var j = 0; j < items.length; j++) {
      // if (!items[j].checked) inputSelectAll.checked == false;

      if (!this.checked) {
        inputSelectAll.checked = false;
        //一旦进入判断已经得到结果了，不需要再接下去判断
        break;
      }
    }
  });
  btnFunc("submit", function () {
    for (var i = 0; i < items.length; i++) {
      if (items[i].checked) {
        console.log(items[i].value);
      }
    }
  });

  // --input :selectAllBox

  inputSelectAll.onclick = function () {
    // if (inputSelectAll.checked) {
    //   for (var i = 0; i < items.length; i++) {
    //     items[i].checked = true;
    //   }
    // } else {
    //   for (var i = 0; i < items.length; i++) {
    //     items[i].checked = false;
    //   }
    // }
    for (var i = 0; i < items.length; i++) {
      items[i].checked = this.checked;
    }
    //为四个多选框绑定响应函数
    for (var i = 0; i < items.length; i++) {
      items[i].onclick = function () {
        inputSelectAll.checked = true;
        for (var j = 0; j < items.length; j++) {
          // if (!items[j].checked) inputSelectAll.checked == false;

          if (!this.checked) {
            inputSelectAll.checked = false;
            //一旦进入判断已经得到结果了，不需要再接下去判断
            break;
          }
        }
      };
    }
  };
};
