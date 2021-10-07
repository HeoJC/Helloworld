package co.yedam.serv;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.EmpDAO;

@WebServlet("/DeljsonServlet")
public class DeljsonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public DeljsonServlet() {
        super();
    }
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter() ;
		String id = request.getParameter("id") ;
		
		System.out.println("id : " + id) ;
		
		EmpDAO dao = new EmpDAO() ;
		
		
		if(dao.delEmpList(id) != -1) {
			// {"retCode":"success" , "id":"id"}
			out.println("{\"retCode\":\"success\" , \"id\":" + id + "}") ;
		} else {
			out.println("{\"retCode\":\"fail\"") ;
		} ;
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
