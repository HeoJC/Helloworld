function sum(a , b) {
    let n1 = a ;
    let n2 = b ;
    return n1 + n2 ;
}

console.log(sum(11 , 22)) ;

function createObject(name , age , score) {
    let obj = {                                       // object 선언 let obj = {} ; (타입 변수명 = {} ;)
        name : name ,
        age : age ,
    } ; 
    obj.score = score ;                               // 추가적인 필드는 이렇게 추가하면 됨
    obj.pass = (score >= 60) ? "pass" : "fail" ;      // 필드 추가 , 3항연산자

    return obj ;
}

let newObj = createObject("유상우" , 23 , 85) ;
console.log("이름 : " + newObj.name + " 나이 : " + newObj.age + //
            " 점수 : " + newObj.score + " 합격 : " + newObj.pass) ;

// TR 태그 생성 연습
function createTr() {

}