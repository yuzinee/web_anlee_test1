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
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
    public String startController() {
		
        return "test_main"; // 이는 실제 JSP 파일의 이름에 맞게 수정해야 합니다.
    }
	
	@RequestMapping("/{url}")
    public String MainController(@PathVariable("url") String url) {
       
        return url;
    }
}