let xhtp = new XMLHttpRequest() ;
		xhtp.onload = function() {
			let data = JSON.parse(xhtp.responseText)
			console.log(data) ; // 확인용
			showEmpList(data) ;
		}
		xhtp.open("get" , "../empjsonServlet.json") ;
		xhtp.send() ;

// 데이터를 서블릿으로 처리하는거 실습. 웹에서 바로바로 적용되는걸 구현하기위해 XMLHttpRequest라는 객체를 생성
// 그리고 이 객체를 이용해서 서블릿에게 get방식으로 요청. 오버라이딩 한 do get , do post 를 실행해서 처리, response를 리턴해줌
// 응답으로 온 데이터를 JSON방식 데이터로 parse해서 data에 저장하고 이걸 showEmpList에 넘겨줌
// 그럼 아래 showEmpList function에서 화면구현을 함

function showEmpList(data) {
	let table , tr , td , txt ;
	table = document.createElement("table") ;
	table.setAttribute("border" , "1") ;
	tr = document.createElement("tr") ;
	table.appendChild(tr) ;
	
	for (let field in data[0]) {
		td = document.createElement("th") ;
		txt = document.createTextNode(field) ;
		td.appendChild(txt) ;
		tr.appendChild(td) ;
	}
	td2 = document.createElement("th") ;
	txt2 = document.createTextNode("Del") ;
	td2.appendChild(txt2) ;
	tr.appendChild(td2) ;
	
	for (let obj of data) {
		tr = document.createElement("tr") ;
		table.appendChild(tr) ;
		for (let field in data[0]) {
			td = document.createElement("td") ;
			txt = document.createTextNode(obj[field]) ;
			td.appendChild(txt) ;
			tr.appendChild(td) ;
		}
			td2 = document.createElement("td") ;
			input = document.createElement("button") ;
			input.setAttribute("onclick" , "delBtn(event)") ;
			input.textContent = "Del" ;
			td2.appendChild(input) ;
			tr.appendChild(td2) ;
	}
	
	document.getElementById("show").appendChild(table) ;
}

	function delBtn(e) {
		let id = e.target.parentNode.parentNode.firstChild.innerHTML ;
		let tr = e.target.parentNode.parentNode ;
		let xhtp = new XMLHttpRequest() ;
		xhtp.onload = function() {
			console.log(xhtp.responseText) ;
			let result = JSON.parse(xhtp.responseText) ;
			if (result.retCode == "success") {
				tr.remove() ;
			} else {
			 	window.alert("처리중 에러발생") ;
			}			
		}
		xhtp.open("get" , "../DeljsonServlet?id=" + id) ;
		xhtp.send() ;
	}