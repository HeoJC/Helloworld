"hello".slice(0 , 3) ;
"hello".substring(0 , 3) ;
"hello".substr(1 , 2) ;

function checkGender(birthInfo) {
    // 2000년 01.01 이전 출생자 주민번호 뒷자리 (1:남자 , 2:여자)
    // 2000년 01.01 이후 출생자 주민번호 뒷자리 (3:남자 , 4:여자)
    let year = parseInt(birthInfo.slice(0,2)) ;
    let genNum = birthInfo.slice(7,8) ;

    if ((genNum ==1)||(genNum==2)){
        if(genNum == 1){
            gender = "남자" ;
        } else if(genNum == 2) {
            gender = "여자" ;
        } else {
            gender = "잘못된 주민등록번호"
        }
    } else if ((genNum ==3)||(genNum==4)){
        if(genNum == 3){
            gender = "남자" ;
        } else if(genNum == 4) {
            gender = "여자" ;
        } else {
            gender = "잘못된 주민등록번호"
        }
    }
    return gender ;
}
console.log(checkGender("901111-3111111")) ;

let divgender = document.getElementById("gender") ;
let ulTag = document.createElement("ul") ;
let liTag = document.createElement("li") ;
liTag.innerHTML = checkGender("901111-3111111") ;
ulTag.appendChild(liTag) ;
divgender.appendChild(ulTag) ;