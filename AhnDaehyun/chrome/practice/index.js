// const calculator = {
//   plus: function(a, b){
//     return a + b;
//   }
// }

// const plus = calculator.plus(5,5)
// console.log(plus)
// function handleResize() {
//   console.log("I have been resized")
// }

// // 함수를 바로 호출하지 않고 창이 resize 되었을 때(이벤트 발생 시) 실행이 됨
// window.addEventListener("resize", handleResize);
// // 얘는 이벤트의 유무와 상관없이 함수를 바로 호출시킴
// window.addEventListener("resize", handleResize());

// // 클릭할 때 변화주기
// function handleClick() {
//   title.style.color = "red";
// }
// // title에 변화주기
// title.addEventListener("click", handleClick);



const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
console.log('123123');

// 이 코드랑 밑의 toggle 코드랑 똑같음
function handleClick(){
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if(!hasClass){
    title.classList.add(CLICKED_CLASS);
  }
  else{
    title.classList.remove(CLICKED_CLASS);
  }
}
// 위 코드랑 똑같이 실행함
function handleClick(){
  title.classList.toggle(CLICKED_CLASS);
}

function init(){
  title.addEventListener("click", handleClick);
}

init();
