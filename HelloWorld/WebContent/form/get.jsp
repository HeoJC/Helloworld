<%@page import="co.yedam.common.EmpDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>form/get.jsp</title>
</head>
<body>
	<!-- 자바 소스 쓰려면 <% %> 해야됨 -->
	<%
		EmpDAO dao = new EmpDAO() ;							// 여기서 import 할때 ctrl shift o 아니고 ctrl space
		
		String id = request.getParameter("employeeId") ;
		String pw = request.getParameter("phone") ;
		String salary = request.getParameter("salary") ;
		
		dao.updateEmp(id , pw , salary) ;
		out.println("<h3>정상적으로 수정됨</h3>") ;				// out.println 은 html 태그를 출력
	%>
</body>
</html>