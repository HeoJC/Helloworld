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

const yun = {
    name : "윤희성" ,
    age : 22 ,
    score : 58
}

const persons = [choi , han , yun] ;
// 내가한거
document.write("<table border=\"1\" style=\"text-align: center;\">") ;
document.write("<tr>") ;
document.write("<td>이름</td><td>나이</td><td>점수</td>") ;
document.write("</tr>") ;
for(let person of persons) {
    document.write("<ul>") ;
    document.write("<tr>") ;
    for(let field in person) { document.write("<td>" + person[field] + "</td>") ; }
    document.write("</tr>") ;
    document.write("</ul>") ;
}
document.write("</table>") ;

function createTable() {

// 교수님풀이
let tag = "<table border='1'>" ;
tag += "<thead><tr><th>이름</th><th>나이</th><th>점수</th><th>합격여부</th></tr></thead>" ;
tag += "<tbody>" ;
for(let person of persons) {
    // index2에 createTr function을 만들어놓고 호출하기 위해 주석처리함
    // if(person.score >= 60) {
    //     tag += "<tr class='pass'>" ;
    // } else {
    //     tag += "<tr class='fail'>" ;
    // }
    // for (let field in person) { // field 갯수.
    //     tag += "<td>" + person[field] + "</td>" ;
    // }
    // if(person.score >= 60) {
    //     tag += "<td class='pass'>Pass</td>" ;
    // } else {
    //     tag += "<td class='fail'>Fail</td>" ;
    // }
    // tag += "</tr>" ;
    tag += createTr(person) 
}
tag = tag + "</tbody></table>" ;
document.write(tag) ;
}

createTable() ;

// java script는 정의를 먼저하고 실행하는거뿐만 아니라 실행 먼저하고 뒤에 정의해도 정상적으로 실행된다
// 이런걸 hoisting(끌어올림) 이라고 함