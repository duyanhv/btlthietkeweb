$("#products_span").hover(() =>{
    $("#header_third").css("height", "200px");
    $(".product_discrip").css("height", "150px");
    $(".product_discrip").css("transition", "0.7s");
}, () => {
    $("#header_third").css("height", "0px");
    $(".product_discrip").css("height", "0px");
    $(".product_discrip").css("transition", "0.1s");
});