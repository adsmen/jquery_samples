$(document).ready(function() {

    $('.btn-add').on('click', function() {
        $('.btn-add').toggleClass('btn-danger');
        // $('.btn-add').add()
        // $('.btn-add').remove()

        // var element = document.getElementById("myDIV");
        // element.classList.add("mystyle");

        // element.classList.remove("mystyle");
        // element.classList.toggle
    });


    $('#addElement').on('click', function() {
        $(".empty").append("<p style='color:green'> test1</p>"); // Append the new elements 

        // var txt3 = document.createElement("p"); // Create with DOM
        // txt3.innerHTML = "Text.";
    });

    $("#addElementBefore").on('click', function() {
        $(".empty").before("<h1>Перед блоком</h1>")
    });


    $("#addElementAfter").on('click', function() {
        $(".empty").after("<h1>После красного прямоугольника</h1>")
    });

    $("#btnList").on('click', function() {
        $(".list").each(function() {
            $("li").toggleClass("active");
        })
    });

    $("#btnRemove").on('click', function() {
        // $("p").remove();
        $(".removefromDom").remove();
    });

    $("#btnRemoveContent").on('click', function() {
        $(".beEmpty").empty();
        $(".beEmpty").text("new text");
    })
});