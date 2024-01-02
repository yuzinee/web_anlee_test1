<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/test_check.css">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<title>테스트</title>
</head>

<body>
  <div class="title">
	<h1 style="margin-top:100px" id="questions_num">1 / 10</h1>
  </div>	
  <div class="grp_question">
  	<div class="question" id="test" style="">Question</div>
  	<button href="" class="button btnPush btn_answer" id="" style="width:30%;">A1</button>
  	<button href="" class="button btnPush btn_answer" style="width:30%;">A2</button>
	<button href="" class="button btnPush btn_answer" style="width:30%;">A3</button>
	<button href="" class="button btnPush btn_answer" style="width:30%;">A4</button>
  </div>
</body>
<script>
	/**
	 * @Description : 심리테스트 문항
	 * @author 이유진
	 * @since 2023.12.28.
	 */
	
	$(document).ready(function() {
	    // 초기 값 설정
	    var currentNumber = 1;
	    var totalQuestions = 10;
	
	    // 답변 onclick 이벤트
	    $(".btnPush.btn_answer").on("click", function() {
	    		
	    		// 마지막 문항까지 선택했을 경우
	    		if(currentNumber >= totalQuestions) {
	    			window.location.href = 'http://localhost:8081/test_result';
	    			
	    			return false;
	    		}
	    	
	        // 문항 번호 +1
	        currentNumber++;
	        $("#questions_num").text(currentNumber + " / " + totalQuestions);
	    });
	});
</script>
</html>