# chapter1

## chapter 1.1

javascript is super power  
프론트엔드에서 쓸 수 있는 프로그래밍언어는 Javascript뿐이기 때문에 배워두는 것이 좋다.  
백엔드에서도 javascript를 사용할 수 있음

## chapter 1.2

ES5, ES6, (ECMAScript) 버전이 여러가지 있음
바닐라 JS는 library가 없는 상태의 JS

## chapter 1.4

`alert('Im Working. Im JS. Im Beautiful. Im worth it')` js의 알람창 띄우기  
`console.log()` 는 다른언어들의 `print` 임

## chapter 1.6 variable

Javascript는 문법적으로 이해가 있어도 오류를 안알려줌 (html이랑 비슷)  
js는 최대한 코드를 이해하기 위해 노력함  
모든 expression은 한 줄에 있어야 한다. ;로 한 줄을 끝냄

1. Create
2. Initialize
3. Use

변수를 초기화하거나 생성할 때 변수 앞에 let을 넣어줘야 함

```
let a = 221;
let b = a - 5;
console.log(b);
```

## chapter 1.7 let, const, var

변수의 값이 변하지 않길 바랄 때 (상수로 만들고 싶을 때): 변수 앞에 const를 넣어주면 됨  
const a = 221;

## chapter 1.8 Data Type

js의 주석은 자바와 마찬가지로 //로 할 수 있음  
변수를 선언할 때는 기본으로 const를 쓰도록!, 필요할때까지 let은 쓰지말자 ( 첫 사용은 const로, 진짜 필요할때만 let)  
String("asdsad"), boolean(true, false), number(123123), float(55.1) 모두 자바처럼 쓰면 됨

## chapter 1.9 Arrays

자바스크립트의 컨벤션은 Camel case임 (소문자로 시작해서 그다음 단어부터는 대문자를 써주는 것임)  
array는 파이썬 처럼 []로 list를 만들어 주면 됨 그 안에 텍스트, t/f, 숫자, 새로운 변수 등 모두 같이 들어갈 수 있음

```
const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fir", "Sat", "Sun", true]
daysOfWeek[2]
```

## chapter 1.10 Objects

Object는 파이썬의 dictionary같은 것(key, value 값이 있음) 만드는 방법도 똑같음
object를 const로 선언해도 그 안에 있는 내용은 바꿀 수 있음, 하지만 object 자신을 바꿀 수는 없음

```
const nicoInfo = {
  name" "nico",
  age:33,
  gender:"male",
  isHandsome:true
}

nicoInfo.gender = "Female"

console.log(nicoInfo.gender)
```
