import { createContext } from "react";

// 컨텓스트 API를 사용하기위한 생성자
const Con = createContext();
const aCon = createContext();  // 테스트용
// Root 컴포넌트인 layout 컴포넌트에서 
// 컨텍스트 프로바이더를 셋팅해야 
// 하위 컴포넌트들 에서 사용할 수 있다 

// 사용할 곳에서 useContext(myCon)으로 사용
export  {Con,aCon};