// 펜할리곤스 Search 서브페이지 컴포넌트
import { useLocation } from "react-router-dom";
import { Con } from "../modules/myCon";
import SearchInner from "./SearchInner";
import { useContext, useEffect, useLayoutEffect } from "react";
import {changebgFn, resetBgFn} from "../func/bgFn";



export default function Search(){
    //컨텍스트 API사용
  const myCon = useContext(Con);
  // 배너변경
  useLayoutEffect(()=>{
    myCon.setMenu('search');
  })
    // useEffect(()=>{
    //     changebgFn();
    //     return () => {
    //         resetBgFn();
    //     };
    // });

    const loc = useLocation();
    let txt = loc.state.keyword;
    
    // 리턴구역

    console.log('난Search :txt',txt);
    return(
        <SearchInner keyword={txt}/>
    );
}//////////// Search 컴포넌트 ////////
