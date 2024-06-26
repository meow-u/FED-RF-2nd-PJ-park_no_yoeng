// 펜할리곤스 Search 서브페이지 컴포넌트
import { useLocation } from "react-router-dom";
import SearchInner from "./SearchInner";
import { useEffect } from "react";
import {bgFn} from "../func/bgFn";



export default function Search(){

    useEffect(()=>{
        bgFn();
    });

    const loc = useLocation();
    let txt = loc.state.keyword;
    
    // 리턴구역

    console.log('난Search :txt',txt);
    return(
        <SearchInner keyword={txt}/>
    );
}//////////// Search 컴포넌트 ////////
