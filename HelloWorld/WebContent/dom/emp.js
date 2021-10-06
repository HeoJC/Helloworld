let xhtp = new XMLHttpRequest() ;
		xhtp.onload = function() {
			let data = JSON.parse(xhtp.responseText)
			console.log(data) ; // 확인용
			showEmpList(data) ;
		}
		xhtp.open("get" , "../empjsonServlet.json") ;
		xhtp.send() ;
		
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
            		input.setAttribute("onclick" , "click(event)") ;
            		input.textContent = "Del" ;
            		td2.appendChild(input) ;
                	tr.appendChild(td2) ;
            }
            
            function click(e) {
            	let btn = e.target ;
            	btn.parentNode.parentNode.remove() ;
            }
            
            document.getElementById("show").appendChild(table) ;
		}