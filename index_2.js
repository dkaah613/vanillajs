const title = document.getElementById("title");

title.innerHTML ="Hi! From JS";
title.style.color =  'blue';
console.dir(document);
document.title = 'I own you now ';

//console.dir() : dom을 볼수있음
//DOM (Document Object Module)
//자바스크립트의 있는 객체를 모두 html로 가져와 객체로 만듬
//모든 js 객체를 dom으로 바꿀수 있다 !!


//querySelector 제공된 선택자 또는 묶음과 일치하는 문서 내의
//첫번째 'Element'를 반환한다. 만약 일치하는 요소가 없으면
//'null'을 반환한다. 탐색은'depth-first', 'pre-order'를 기반으로
// 문서의 첫 번째 'Element'부터 시작해 자식 노드의 수를 기준으로
//순회한다.

//querySelector은 자식들중 id를 찾아서 반환한다
