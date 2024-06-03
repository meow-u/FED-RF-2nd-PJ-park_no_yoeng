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
} // cursor
