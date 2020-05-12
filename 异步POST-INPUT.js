 function check_num() {
        var files_titles_list = $("input[name='file_tilte']")
        var file_ratio_list = $("input[name='file_ratio']")
        console.log(files_titles_list)
        console.log(file_ratio_list)
        var num = 0
        for (i = 0; i < file_ratio_list.length; i++) {
            num = Number($(file_ratio_list[i]).val()) + Number(num)
        }
        console.log(num)
        $.ajax({
            url: '/oo_files_saves/API/save_files',
            type: "POST",
            // 设置超时的时间XXs
            timeout: 30000,
            data: {},
            success: function (recv) {
                //当服务端处理完成后，返回数据时，该函数自动调用
                // data代表服务器给我们返回的值
                // 可以使用 JavaScript进行html的内容修改展示内容，或者刷新界面
                console.log("rrr")
                console.log(recv)
                // 登入成功
                recv = JSON.parse(recv)
                if (recv["status"] == "true") {
                    alert("文件保存成功");
                    document.getElementById("mesg").innerText = "文件保存成功";
                    location.reload();
                }
                ;
                if (recv["status"] == "false") {
                    alert("异常，请重试，文件内容将被清除");
                    location.reload();
                }
                ;
            }
        })