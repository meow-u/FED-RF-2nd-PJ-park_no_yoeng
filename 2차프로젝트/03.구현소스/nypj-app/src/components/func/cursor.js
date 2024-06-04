// 커서 이벤트
import $ from 'jquery';
import mFn from '../func/mFn';
export default function cursor() {
    const cursor = $('.cursor');

    console.log(cursor);
    /* 이동시이벤트 */
    mFn.addEvt(document,'mousemove',(e)=>{
       cursor.css({
        top: e.clientY,
        left: e.clientX
       }); 
    })
    mFn.addEvt(document,'mouseenter',()=>{
        cursor.css({opacity:1});
    })
    mFn.addEvt(document,'mouseleave',()=>{
        cursor.css({opacity:0});
    })

    /* 누를때 이벤트 */
    mFn.addEvt(document,'mousedown',()=>{
        cursor.addClass('click');
    })
    mFn.addEvt(document,'mouseup',()=>{
        cursor.removeClass('click');
    })
    // 드래그시에도 마우스 커서가 따라다니게 하기
    mFn.addEvt(document,'drag',(e)=>{
        cursor.css({
            top: e.clientY,
            left: e.clientX
           }); 
    })
} // cursor
