// 데이터 유형에 맞게 만들기 
// 데이터 불러오기
import allProducts from "./data/product_data.js";
console.log(allProducts);

// 랜덤으로 추가할 정보를 담은 배열
let arr = ['A','B','C','D','E']
const arrNum = arr.length;

// 랜덤수 생성함수 
const rdmNum = (n)=> Math.floor(Math.random()*n);

// 1~ n까지의 랜덤수 
// Math.ceil(Math.random()*n);
// 0~ n-1 까지의 랜덤수 
// Math.floor(Math.random()*n);


// 기존 데이터에 속성:값 추가하기
allProducts.forEach((v)=>{
    v['review'] = Math.floor(Math.random()*500);
    v['info'] = arr[rdmNum(arrNum)];
});

console.log(allProducts);


// 새 데이터 만들기
let newData = [];

for(let i=1;i<=10;i++){
newData.push({
  "idx":i,
  "gname":arr[rdm(arrNum)],
    });
}
console.log(newData)