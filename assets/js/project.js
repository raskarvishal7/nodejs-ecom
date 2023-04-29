$(function(){

    $("#categoryForm").submit(function(ev){
        ev.preventDefault();

        var record = $("#categoryForm").serialize();

        $.post("/admin/add-category-action", record, function(resFromNode){
            if(resFromNode['msg']){
                $("#sucessMsg").html("Category Added");
                $("#txt").val("");
            }
        })
    })

    $('.del-cat').click(function(ev){
        if(confirm("Would you like to remove?")){
            ev.preventDefault();
            var ans = $(this).attr("for");
            var cura = $(this);
            $.post("/admin/delete-category", {catid:ans}, function(resFromNode){
                console.log(resFromNode);
                if(resFromNode['msg']){
                    cura.closest("tr").fadeOut(500);
                }
            })
        }
    })

    $("#productForm").submit(function(ev){
        ev.preventDefault();

        var formObject = document.getElementById('productForm');

        var formContentObject = new FormData(formObject);

        $.ajax({
            type:"post",
            data:formContentObject,
            url:"/admin/product-action",
            contentType:false,
            processData:false,
            success:function(res){
                console.log("res from node");
                console.log(res);
            },
            error:function(err){

            }
        })
    })

    $("#loginForm").submit(function(ev){
        ev.preventDefault();
        var record = {
            useremail:$('#useremail').val(),
            userpassword:$('#userpassword').val()
        }

        $.ajax({
            type:"post",
            url:"/login-action",
            data:record,
            success:function(res){
                if(res["msg"] == "ok"){
                    localStorage.setItem("tokenvalue", res['tokenvalue']);
                    window.location.href = "/";
                }
                else{
                    $('#errmsg').html(res["msg"]);
                }
            }
        })
    })
})