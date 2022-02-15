
window.onload = function(){
document.querySelector('.js-box').style.background = "red";
}
// Remodalのimgタグのsrc属性を書き換える
$(document).ready(function(){
    $(".gallery-a").each(function(){
        $(this).click(function(){
            let src = $(this).find('.gallery-img').attr("src");
            $('.modal-img').attr('src',src);
        })
    })
});