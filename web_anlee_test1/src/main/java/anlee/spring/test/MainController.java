package anlee.spring.test;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Description : 메인 컨트롤러
 * @author : 이유진
 * @ since : 2023.12.28
 * */

@Controller
public class MainController {
	
	// 초기화면 설정
	@RequestMapping(value = "/", method = RequestMethod.GET)
    public String startController() {
		
        return "test_main";
    }
	
	// 화면 전환 관련 컨트롤러
	@RequestMapping("/{url}")
    public String otherController(@PathVariable("url") String url) {
       
        return url;
    }
	
	// SELECT
	
	@Autowired
	MainService mainService;

	@RequestMapping(value = "/test_result/test", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody 
    public Map<String, Object> select(@RequestBody Map<String, Object> selectMap) throws Exception {
        Map<String, Object> selectInfo = mainService.selectInfo("mainDAO.selectQuestion", selectMap);
        return selectInfo;
    }
}