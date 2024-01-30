<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/test_basic.css">
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="/resources/js/common.js"></script>
<script src="/resources/js/test_result.js"></script>
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<title>테스트</title>
</head> 
<body>
	<div class="title">
      <h1 style="margin-top:100px" id="question_num" style="text-align: center">결과</h1>
    </div>	
	<div class="grp_border_box">
      <div class="border_box" id="resultInfo" style="height:40%">-</div>
      <div class="border_box" id="resultCombination" style="height:10%">-</div>
      <button type="button" class="button btnPush btn_style1" id="btn_share" onclick="openPopup()" style="width:30%;">결과 공유하기</button>
      <button type="button" class="button btnPush btn_style1" id="btn_reset" onclick="btn_reset_onclick()" style="width:30%;">다시하기</button>
    </div>
</body> 
<% 
  	String questionResult = request.getParameter("ibx_result");
%>
<script>
	var testSn = sessionStorage.getItem("sessionInfo");	// 테스트 일련번호
	var questionResult = '<%= questionResult %>';		// 테스트 결과
</script>
</html>