package anlee.spring.test;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ManageController {
	
	@Autowired
	ManageService manageService;

	// 등록
	@RequestMapping(value = "/manage/create", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody 
    public void insertTest(@RequestBody Map<String, Object> insertMap) throws Exception {

		manageService.insertTest(insertMap);
    }
}
