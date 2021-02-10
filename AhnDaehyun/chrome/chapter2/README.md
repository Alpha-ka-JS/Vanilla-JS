# Chapter 2

## chapter 2.0

console.log에서 console은 object, log는 function  
js에서 function 만들기

```javascript
function sayHello() {
  console.log('Hello!');
}
```

## chapter 2.1

변수와 string을 같이 출력하고 싶을 때 (파이썬의 fstring 같은 것):  
백틱으로 감싸고 ${변수명} 으로 쓰면 됨

```javascript
console.log(`Hello ${name} you are ${age} years`);
```

계산기 object 만들기

```javascript
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};

const plus = calculator.plus(5, 5);
console.log(plus);
```

## chapter 2.2

HTML이 JS랑 쓰려고하면 어떻게 쓸 수 있을까  
이렇게 html에서 id를 찾아서 슬 수 있음

```javascript
const title = document.getElementById('title');
title.innerHTML = 'Hi! From JS!';
console.log(title);
```

DOM(Document Object Model)
자바스크립트는 html에 있는 모든 요소를 가져와서 그것들을 객체로 바꿀 것임
위와 같이 title이라는 태그요소를 가져와서 object가 되어서 안의 innerHTML이라고 하는 key에 값을 넣어줌  
페이지에서 자바스크립트로 선택한 것은 객체과 된다.

## chapter 2.3

```javascript
console.dir(title);

title.style.color = 'red';
```

을 통해서 title이 가지고 있는 모든 것을 볼 수 있어서 여기서 본 다음에 내가 html css를 바꾸지 않고 js로 제어할 수 있음

```javascript
const title = document.querySelector('#title');
```

title아이디 selector를 찾겠다.
이제부터 querySelector를 많이 쓸것임.

## chapter 2.4

js는 이벤트에 반응하기 위해서 만들어진 것임  
이벤트란 웹사이트에서 발생하는 것들(click, resize, submit, input, change 등)을 말한다.

```javascript
const title = document.getElementById('title');
console.log(title);

function handleResize() {
  console.log('I have been resized');
}

// 함수를 바로 호출하지 않고 창이 resize 되었을 때(이벤트 발생 시) 실행이 됨
window.addEventListener('resize', handleResize);
// 얘는 이벤트의 유무와 상관없이 함수를 바로 호출시킴
window.addEventListener('resize', handleResize());

// 클릭할 때 변화주기
function handleClick() {
  title.style.color = 'red';
}
// title에 변화주기
title.addEventListener('click', handleClick);
```
