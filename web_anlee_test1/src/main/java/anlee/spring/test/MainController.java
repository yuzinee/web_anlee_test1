package anlee.spring.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
    public String MainController(@PathVariable("url") String url) {
       
        return url;
    }
}