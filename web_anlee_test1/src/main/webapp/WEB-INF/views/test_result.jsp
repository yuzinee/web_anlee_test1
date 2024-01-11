<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/test_result.css">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<title>심리테스트</title>
</head>
<body>
	<div class="" id="result" style="">-</div>
	<div class="button_container">
	  <button class="btn_result_share"><span>카카오톡 공유하기</span></button>
	</div>
</body>

<%
  	String questionResult = request.getParameter("ibx_result");
%>
	
<script>
	/**
	 * @Description : 심리테스트 문항
	 * @author 이유진
	 * @since 2023.12.28.
	 */	
	 
	// 파라미터로 받은 심리테스트 결과 변수
	var questionResult = '<%=questionResult %>';
	$("#result").text("결과: " + questionResult);
	
	// kakao developers JavaScript key	
	Kakao.init('08628cbaedbcd09fc0864713ac4bc22b');
	
	// 카카오톡 공유하기
	Kakao.Link.createScrapButton({
       container: '.btn_result_share',
       requestUrl: 'http://localhost:8081/',
       templateId : 102339
    });
</script>
</html>