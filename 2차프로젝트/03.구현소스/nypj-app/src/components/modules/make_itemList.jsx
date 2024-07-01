import { Link } from "react-router-dom";
import React, { useEffect } from "react";
// 상품데이터 불러오기(검색에서는 안씀)
import {allProducts} from "../data/products_data"
import "../../css/_make_item_list.scss";

function MakeItemList({ dt ,menuTxt, isSub  }) {
      //dt - 검색된 배열데이터
   //total - 검색된 배열데이터 개수
  console.log("menuTxt(=txt):", menuTxt);
  console.log("isSub:", isSub);

  useEffect(() => {
    console.log("useEffect - menuTxt:", menuTxt); // useEffect 내에서 menuTxt 값을 확인
    /* menuTxt값은 클릭해야 찍히도록 되어있음  */
    let result = allProducts.filter((v) => v.collection === menuTxt);
    console.log("result:", result);
  });
  let total;
  if(dt) total = dt.length;
   console.log('상품뿌리는 나 랜더링! 데이터수:',total)
   return (
<>
     { !menuTxt && !isSub && total > 0 ?
      <ul className="product-box">
         {dt.map((v, i) => (
               <li key={i}>
                  <Link to={`/shop/product/${v.idx}`} state={{itemIdx:v.idx}}>                    
                     <img src={`${process.env.PUBLIC_URL}/images/${v.img}`} alt={`banner${i + 1}`} />
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
      </ul> :
       !menuTxt && !isSub && total === 0 &&
       <h2 className="nodata">
       Sorry, we don't have any matches for that search.
    </h2>}

    <ul className="product-box">
      {
         allProducts
            .filter((v) => isSub? v.collection === menuTxt: v.type === menuTxt) //txt는 전달받은 이너텍스트
            .map((v, i) => (
              <li key={i}>
                <Link to={`/shop/product/${v.idx}`} state={{ itemIdx: v.idx }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${v.img}`}
                    alt={`banner${i + 1}`}
                  />
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
            ))
      }
    </ul>

      </>
   );
}

export default MakeItemList;
