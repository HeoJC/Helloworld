function createRow(row) {
    let tr = document.createElement("tr") ;           // document.write 할때는 그대로 써주는거니까 "<tr>" 로 했는데
                                                      // document.createElement 는 tag를 써주는게 아니라 해당 규칙을 써주는거니까 "tr"로 씀
    for (let i = 2 ; i <=9 ; i++) {
        let td = document.createElement("td") ;
        td.innerHTML = i + "*" + row + "=" + (i * row) ;
        tr.appendChild(td) ;
    }
    return tr ;
}

let t = document.createElement("table") ;
t.setAttribute("border" , "1") ;
for (let i = 1 ; i <= 9 ; i++) {
    t.appendChild(createRow(i)) ;
}

let mul = document.getElementById("multi") ;          // 여기 2줄을 위에 for 안에 넣으면 디버그모드에서 한줄씩 나오게 할 수 있음
mul.appendChild(t) ;
