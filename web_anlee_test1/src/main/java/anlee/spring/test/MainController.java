package anlee.spring.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Description : 메인 컨트롤러
 * @author : 이유진
 * @ since : 2023.12.28
 * */

@Controller
public class MainController {
	
	@RequestMapping("/{url}")
    public String handleTestRequests(@PathVariable("url") String url) {
       
        return url;
    }
}