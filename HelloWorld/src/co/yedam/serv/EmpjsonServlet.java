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
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		response.getWriter().append("Served at: ").append(request.getContextPath()).append("<h1>hong</h1>"); // 태그는 안먹음
		PrintWriter out = response.getWriter() ;
		EmpDAO dao = new EmpDAO() ;
		List<Employee> list = dao.getEmpList() ;
		
		// PrintWriter out = response.getWriter() ; 치고 out.print("<h1>JSON</h1>") 이렇게 하면 태그 먹음
		// JSON data타입 object { "name":"Hongkildong" , "age":15 , "score":80 }
		// out.print("{ \"name\":\"Hongkildong\" , \"age\":15 , \"score\":80 }") ; // 위에꺼 복사 붙여넣기 하면 알아서 이스케이프 문자 적어짐
		// {"empId":"?" , "lname":"?" , "email":"?" , "hireDate":"?" , "job":"?"}
		
		int cnt = 0 , lastCnt = list.size() ;
		out.print("[") ;
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
