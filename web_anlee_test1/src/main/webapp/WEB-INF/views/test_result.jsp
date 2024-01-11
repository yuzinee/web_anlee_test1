<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/test_result.css">
<link rel="stylesheet" type="text/css" href="/resources/css/test_check.css">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<title>심리테스트</title>
</head>
<body>
	<div class="title">
      <h1 style="margin-top:100px" id="question_num" style="text-align: center">결과</h1>
    </div>	
	<div class="grp_question">
      <div class="question" id="result" style="">-</div>
      <button type="button" class="button btnPush btn_style1" id="btn_share" style="width:30%;">카카오톡으로 공유하기</button>
      <button type="button" class="button btnPush btn_style1" id="btn_url" onclick="btn_url_onclick()" style="width:30%;">url 복사</button>
      <button type="button" class="button btnPush btn_style1" id="btn_reset" onclick="btn_reset_onclick()" style="width:30%;">다시하기</button>
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
	
	// 카카오톡 공유하기
	Kakao.init('08628cbaedbcd09fc0864713ac4bc22b'); // kakao developers JavaScript key	
	
	Kakao.Link.createScrapButton({
       container: '#btn_share',
       requestUrl: 'http://localhost:8081/',
       templateId : 102339
    });
	
	// url 복사 버튼 클릭
	function btn_url_onclick() {
		var url = "test"; // 복사할 url

		// 임시 컴포넌트 생성 후 url 값 저장
		var inputUrl = document.createElement("input");
		inputUrl.value = url;
		document.body.appendChild(inputUrl);
		inputUrl.select();

		// 클립보드에 복사 후 삭제
		document.execCommand('copy');
		document.body.removeChild(inputUrl);

		alert("링크가 복사되었습니다.");
	}
	
	// 다시하기 버튼 클릭
	function btn_reset_onclick() {
		
		location.href="/test_main"
	}
</script>
</html>