// 배경전환 이벤트
import $ from 'jquery';

let bgFn =()=>{
    $(".swiper-slide img.first").attr("src",`${process.env.PUBLIC_URL}/images/search.jpg`);

    $(".swiper-slide img.first").parent().css("transition","0s")
    .siblings().css("display","none");
    $(".swiper-button-next").css("display","none");
    $(".swiper-button.-prev").css("display","none");
    $(".swiper-pagination").css("display","none");
};


export {bgFn};