function AjaxSend() {
        var cover = new FormData();
        var fileObj = document.getElementById('file_content').files[0];
        cover.append('file_content', fileObj)
        cover.append("file_tilte",$("#file_tilte").val())
        cover.append("file_ratio",$("#file_ratio").val())
        console.log(cover)
        $.ajax({
            url: '/oo_files_saves/API/insert_into',
            type: "POST",
            cache: false,
            processData: false,
            contentType: false,
            data:cover,
            // 设置超时的时间XXs
            timeout: 30000,
            success: function (recv) {
                //当服务端处理完成后，返回数据时，该函数自动调用
                // data代表服务器给我们返回的值
                // 可以使用 JavaScript进行html的内容修改展示内容，或者刷新界面
                console.log("rrr")
                console.log(recv)
                // 登入成功
                recv = JSON.parse(recv)
                if (recv["status"] == "true") {
                    location.href = "/oo_files_saves/save_files"
                }
                ;
                if (recv["status"] == "false") {
                    alert("异常，请重试，或将信息补充完整");
                    location.reload();
                }
                ;
            }
        })
    }