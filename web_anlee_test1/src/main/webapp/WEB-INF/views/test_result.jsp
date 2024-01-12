<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/test_basic.css">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="/resources/js/test_result.js"></script>
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<title>심리테스트</title>
</head>
<body>
	<div class="title">
      <h1 style="margin-top:100px" id="question_num" style="text-align: center">결과</h1>
    </div>	
	<div class="grp_border_box">
      <div class="border_box" id="result" style="">-</div>
      <div class="border_box" id="test" style="">-</div>
      <button type="button" class="button btnPush btn_style1" id="btn_share" onclick="openPopup()" style="width:30%;">공유하기</button>
      <button type="button" class="button btnPush btn_style1" id="btn_reset" onclick="btn_reset_onclick()" style="width:30%;">다시하기</button>
    </div>
</body>
<%
  	String questionResult = request.getParameter("ibx_result");
%>
<script>
	//파라미터로 받은 심리테스트 결과 변수
	var questionResult = '<%= questionResult %>';
</script>
</html>