let v1 = 10 ;
console.log(v1) ;

let v2 = 20 ;
console.log(v2) ;


const choi = {
    name : "최선영" ,
    age : 20 ,
    score : 90
}

const han = {
    name : "한동일" ,
    age : 21 ,
    score : 89
}

for(let field in han) {                               // java 에서 향상된 for 랑 같은거 , han의 필드들을 가지고와서 field에 넣고 출력
    console.log(field + "-" + han[field]) ;           // han[field]는 han의 각 필드의 값을 불러옴
}

const yun = {
    name : "윤희성" ,
    age : 22 ,
    score : 88
}

                                                      // 값을 불러오는 방법 3가지
console.log(choi.name) ;                              // 1. . 연산자로 필드명 지정해서 불러오기
console.log(choi["age"]) ;                            // 2. [] 배열처럼 써서 age 필드를 가지고 오기
let field = "score" ;
console.log(choi[field]) ;                            // = choi["score"] 3. 필드명을 변수에 넣어서 변수로 불러오기


const persons = [choi , han , yun] ;
for(let i = 0 ; i < persons.length ; i++) {
console.log(persons[i].name) ;
console.log(persons[i]["age"]) ;
field = "score" ;
console.log(persons[i][field]) ;
console.log("======") ;
}

for(let person of persons) {                          // 위에랑 같은건데 다른 표현 (java로 치면 향상된for)
    console.log(person.name) ;
    console.log(person["age"]) ;
    field = "score" ;
    console.log(person[field]) ;
    console.log("======") ;
}

for(let person of persons) {                          // 위에랑 같은건데 다른 표현
    for(let field in person) {
        console.log(person[field]) ;
    }
    console.log("=====")
}

for(let person of persons) {                          // 위에랑 같은건데 다른 표현
    document.write("<ul>") ;
    for(let field in person) {
        console.log(person[field]) ;
        document.write("<li class=" + field + ">" + person[field] + "</li>") ;
    }
    document.write("</ul>") ;
}