package co.yedam.serv;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.EmpDAO;
import co.yedam.common.Employee;

@WebServlet("/empjsonServlet.json")
public class EmpjsonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public EmpjsonServlet() {
        super();
    }
    
	// 데이터를 불러와서 서블릿으로 처리하는거 연습하는데 그 데이터를 데이터베이스에서 불러오려고 EmpDAO를 이용해서 불러와서 필요한 데이터 형식으로 변환하고
	// 스크립트로 실행시키는 실습

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		response.getWriter().append("Served at: ").append(request.getContextPath()).append("<h1>hong</h1>"); // 태그는 안먹음
		PrintWriter out = response.getWriter() ; 					 // 서블릿에서 스크립트를 처리하는 PrintWriter 생성
		EmpDAO dao = new EmpDAO() ;									 // EmpDAO에 있는 getEmpList 부르기 위해 생성
		List<Employee> list = dao.getEmpList() ;					 // getEmpList로 만들어진 리스트를 list에 저장
		
		// PrintWriter out = response.getWriter() ; 치고 out.print("<h1>JSON</h1>") 이렇게 하면 태그 먹음
		// JSON data타입 object { "name":"Hongkildong" , "age":15 , "score":80 }
		// out.print("{ \"name\":\"Hongkildong\" , \"age\":15 , \"score\":80 }") ; // 위에꺼 복사 붙여넣기 하면 알아서 이스케이프 문자 적어짐
		// {"empId":"?" , "lname":"?" , "email":"?" , "hireDate":"?" , "job":"?"}
		
		int cnt = 0 , lastCnt = list.size() ; // 반복문으로 데이터를 반복해서 입력하는데 , 로 데이터 사이를 구분하기위해 찍어줘야 하는데 반복문 돌아가면서 알아서 찍히게 하기 위해 필요한 변수 선언
		out.print("[") ; // 배열이라 [ ] 이게 필요
		for (Employee emp : list ) {
			out.print("{\"empId\":\""+emp.getEmployeeId()+"\",\"lname\":\""+emp.getLastName()+"\", \"email\":\""+
						emp.getEmail()+"\", \"hireDate\":\""+emp.getHireDate()+"\", \"job\": \""+emp.getJobId()+"\"}");
			// , 찍히다가 마지막 건에는 , 없게
			cnt++ ;
			if (cnt != lastCnt) { // lastCnt가 list size 니까 그만큼 반복하면서 cnt++ 하다가 같아지면 마지막이라는 뜻이니까, 마지막 전까지는 , 추가하다가 마지막엔 안하도록 함
				out.println(",") ;
			}
		}
		out.println("]") ;
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
