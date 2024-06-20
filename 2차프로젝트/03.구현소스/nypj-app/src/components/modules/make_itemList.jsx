import { Link } from "react-router-dom";
import React from "react";
// 상품데이터 불러오기
import {allProducts} from "../data/products_data";

import "../../css/_make_item_list.scss";

function MakeItemList({ dt }) {
   //dt - 검색된 배열데이터
   //total - 검색된 배열데이터 개수
  //  const total = dt.length;
  //  console.log('데이터수:',total)
   return (
      <ul className="menu">
         {allProducts
            // .filter((v) => v.type === menuTxt)

            .map((v, i) => (
               <li key={i}>
                  <Link to={`/shop/product/${v.idx}`}>
                     <img src={`/images/${v.img}`} alt={`banner${i + 1}`} />
                  </Link>
                  <div className="item-wrap">
                     <h2 className="etit">{v.name[1]}</h2>
                     <h4 className="price">{v.price}원</h4>
                     <h3 className="ktit">{v.name[0]}</h3>
                     <p className="rev">review</p>
                     <span className="rev2">{v.review}</span>
                     <button className="item">Add to Cart</button>
                  </div>
               </li>
            ))}
      </ul>
   );
}

export default MakeItemList;
