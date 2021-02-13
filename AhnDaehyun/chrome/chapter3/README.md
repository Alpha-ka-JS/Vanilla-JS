# Chapter3

## chapter 3.0

```javascript
// 날짜 가져오기
const date = new Date();
date.getDate();
date.getDay();

// 시간 구하는 함수
```

## chapter 3.1

```javascript
// 3초마다 sayHi라는 함수를 실행하기 (미리세컨즈단위이기 때문에 3000이 3초임)
SetInterval(sayHi, 3000);

// 아래 코드를 통해 매초 시간이 변하는 html 화면을 만들 수 있음
const clockContainer = document.querySelector('js-clock'),
  clockTitle = clockContainer.querySelector('h1');

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

SetInterval(getTime, 1000);
```

## chapter 3.2

```javascript
// 로컬 저장소에 값 저장
localStorage.setItem('nico', true);
// 로컬저장소에서 nico key의 value값 얻기
localStorage.getItem('nico');
```
