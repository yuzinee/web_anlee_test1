package anlee.spring.test;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("ManageService")
public class ManageService {
	
	@Autowired
	MainDAO mainDAO;
	
	@Transactional
	public void insertTest(Map<String, Object> insertMap) throws Exception {

		// 테스트 등록
		mainDAO.insert("manageCreateDAO.insertTest", insertMap);
		
		// 질문 등록
		mainDAO.insert("manageCreateDAO.insertQuestions", insertMap);
		
		// 답변 등록
		mainDAO.insert("manageCreateDAO.insertAnswers", insertMap);
	}
}