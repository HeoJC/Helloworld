let messages = ["Hello" , "Good Morning" , "Hi"] ;

let ulTag = document.createElement("ul") ;
// ulTag.innerHTML = "<li>Hello</li>" ;

for (let i = 0 ; i < messages.length ; i++) {
let liTag = document.createElement("li") ;
liTag.innerHTML = messages[i] ;                       // messages배열의 각 값을 liTag에 넣어서 리스트로 만들고
ulTag.appendChild(liTag) ;                            // 그걸 appendChild로 ulTag의 자식으로 넣음
}

// div 에 자손으로 ulTag 붙여주기
let divShow = document.getElementById("show") ;
divShow.appendChild(ulTag) ;                          // 위에서 선언한 ulTag를 div의 자식으로 넣음

const apple = {
    name : "사과" ,
    price : 1000
} ;
const banana = {
    name : "바나나" ,
    price : 2000
} ;

let fruits = [apple , banana , {                      // 체리를 따로 선언 없이 이렇게 배열에 바로 넣어줄 수 있음
    name : "체리" ,
    price : 3000
}] ;

let divFruit = document.getElementById("fruit") ;     // div 찾기
let ulTag2 = document.createElement("ul") ;           // 리스트 만들기
for (let fruit of fruits) {                           // 배열 순환
    let li = document.createElement("li") ;           // 리스트 항목 만들기
    li.innerHTML = fruit.name + " : " + fruit.price ; // 배열 순환하면서 fruit에 담아놓은 name , prcie 불러와서 리스트 항목에 넣기
    ulTag2.appendChild(li) ;                          // 위에서 담은거 ul 안에 자식으로 넣기
}
divFruit.appendChild(ulTag2) ;                        // 찾은 div에 위에꺼 자식으로 집어넣기


let multi = document.getElementById("multi") ;        // div찾기
let t = document.createElement("table") ;             // 테이블 만들기
t.setAttribute("border" , "1") ;                      // border 값으로 1을 넣음 (setAttribute 가 요소의 속성값을 지정)
// 몇단
let num = 2 ;
// thead 영역
let tr = document.createElement("tr") ;               // 행 만들기
let td = document.createElement("th") ;               // 제목 칸 만들기
td.innerHTML = num + "단" ;                           // 제목 입력
tr.appendChild(td) ;
t.appendChild(tr) ;
// tbody 영역
for (let i = 1 ; i <= 9 ; i++) {
    tr = document.createElement("tr") ;
    td = document.createElement("td") ;
    td.innerHTML = num + "*" + i + "=" + (num * i) ;
    tr.appendChild(td) ;
    t.appendChild(tr) ;                               // t는 테이블만들기인데 반복안에 있다고 테이블을 계속 만드는게 아니라 tr을 t의 자식으로 매행마다 넣어준다는 의미로 쓴거
}
multi.appendChild(t) ;