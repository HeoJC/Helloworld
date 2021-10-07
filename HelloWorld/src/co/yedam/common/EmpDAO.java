package co.yedam.common;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EmpDAO extends DAO {
	
	// 데이터 있거나, 에러가 나면(있는지 없는지 모름) -> false / 데이터가 없는게 확실하면 -> true
	public boolean checkId (String id) {
		connect() ;
		String sql = "select * from empl_demo where employee_id = ?" ;
		try {
			psmt = conn.prepareStatement(sql) ;
			psmt.setString(1, id) ;
			rs = psmt.executeQuery() ;
			if(rs.next()) {
				return false ;
			} else {
				return true ; // 에러가 난건 데이터가 있는지 없는지 확실하지 않은데 없는건 확실히 없는거니까 데이터가 있거나 에러난건 false로 처리하고 없으면 true로 처리
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect() ;
		}
		return false ;
	}
	
	public int delEmpList (String empId) {
		connect() ; 									
		String sql = "delete from empl_demo where employee_id = " + empId ;
		try {
			stmt = conn.createStatement() ; 			
			int r = stmt.executeUpdate(sql) ;
			System.out.println(r + "건 삭제됨") ;
			return Integer.parseInt(empId) ;
		} catch (SQLException e) {
			e.printStackTrace() ;
			return -1 ;
		} finally {
			disconnect() ;
		}
	}
	
	public List<Employee> getEmpList() {
		connect() ;
		List<Employee> list = new ArrayList<>() ;
		
		String sql = "select * from empl_demo" ;
		try {
			stmt = conn.createStatement() ;
			rs = stmt.executeQuery(sql) ;
			while(rs.next()) {
				Employee emp = new Employee() ;
				emp.setEmployeeId(rs.getInt("employee_id")) ;
				emp.setLastName(rs.getString("last_name")) ;
				emp.setEmail(rs.getString("email")) ;
				emp.setHireDate(rs.getString("hire_date")) ;
				emp.setJobId(rs.getString("job_id")) ;
				
				list.add(emp) ;
				
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect() ;
		}
		return list ;
	}
	
	public void deleteEmp(int empId) {
		connect() ; 									// conn = dbconnection.Connection
		String sql = "delete from empl_demo where employee_id = " + empId ;
		try {
			stmt = conn.createStatement() ; 			// statement는 new Statement 이런식으로 만드는게 아니라 conn.createStatement 사용해서 만듦
			int r = stmt.executeUpdate(sql) ;
			System.out.println(r + "건 삭제됨") ;
		} catch (SQLException e) {
			e.printStackTrace() ;
		} finally {
			disconnect() ;
		}
	}
	
	public void updateEmp(String id , String phone , String salary) {
		connect() ;
		String sql = "update empl_demo set phone_number = ? , salary = ? where employee_id = ?" ;
		try {
			psmt = conn.prepareStatement(sql) ;
			psmt.setString(1, phone) ;
			psmt.setString(2, salary) ;
			psmt.setString(3, id) ;
			int r = psmt.executeUpdate() ;
			System.out.println(r + "건 수정됨") ;
		} catch (SQLException e) {
			e.printStackTrace() ;
		} finally {
			disconnect() ;
		}
	}
	
	public boolean insertEmp(Employee emp) {
		connect() ;
		String sql = "insert into empl_demo (employee_id, last_name, email, job_id, hire_date)\r\n"
				+ "values(?, ?, ?, ?, ?)" ;
		try {
			psmt = conn.prepareStatement(sql) ;
			psmt.setInt(1, emp.getEmployeeId()) ;
			psmt.setString(2, emp.getLastName()) ;
			psmt.setString(3, emp.getEmail()) ;
			psmt.setString(4, emp.getJobId()) ;
			psmt.setString(5, emp.getHireDate()) ;
			int r = psmt.executeUpdate() ;
			System.out.println(r + "건 입력됨") ;
			return true ;
		} catch (SQLException e) {
			e.printStackTrace() ;
			return false ;
		} finally {
			disconnect() ;
		}
		
	}

}
