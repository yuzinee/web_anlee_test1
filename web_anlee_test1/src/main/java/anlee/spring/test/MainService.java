package anlee.spring.test;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("mainService")
public class MainService {
	
	@Autowired
	MainDAO mainDAO;
	
	public Map<String, Object> selectInfo(String queryId, Map<String, Object> selectMap) throws Exception {

		return mainDAO.select(queryId, selectMap);
	}

}
