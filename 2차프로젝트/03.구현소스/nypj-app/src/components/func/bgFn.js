// 배경전환 이벤트
import $ from 'jquery';

let changebgFn =()=>{
    $(".swiper-slide img.first").attr("src",`${process.env.PUBLIC_URL}/images/search.jpg`);

    $(".swiper-slide img.first").parent().css("transition","0s")
    .siblings().css("display","none");
    $(".swiper-button-next").css("display","none");
    $(".swiper-button.-prev").css("display","none");
    $(".swiper-pagination").css("display","none");
};

let resetBgFn = () => {
    // 기본 이미지 경로를 지정합니다.
    $(".swiper-slide img.first").attr("src", `${process.env.PUBLIC_URL}/images/default.jpg`);

    // 인라인 스타일을 제거하여 CSS 스타일을 적용합니다.
    $(".swiper-slide img.first").parent().removeAttr("style")
        .siblings().removeAttr("style");
    $(".swiper-button-next").removeAttr("style");
    $(".swiper-button-prev").removeAttr("style");
    $(".swiper-pagination").removeAttr("style");
};
export {changebgFn, resetBgFn};
