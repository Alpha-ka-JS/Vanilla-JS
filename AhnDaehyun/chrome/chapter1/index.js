// const calculator = {
//   plus: function(a, b){
//     return a + b;
//   }
// }

// const plus = calculator.plus(5,5)
// console.log(plus)
const title = document.getElementById("title");
console.log(title)

function handleResize() {
  console.log("I have been resized")
}

// 함수를 바로 호출하지 않고 창이 resize 되었을 때(이벤트 발생 시) 실행이 됨
window.addEventListener("resize", handleResize);
// 얘는 이벤트의 유무와 상관없이 함수를 바로 호출시킴
window.addEventListener("resize", handleResize());

// 클릭할 때 변화주기
function handleClick() {
  title.style.color = "red";
}
// title에 변화주기
title.addEventListener("click", handleClick);