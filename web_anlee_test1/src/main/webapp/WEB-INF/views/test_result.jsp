<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/test_result.css">
<link rel="stylesheet" type="text/css" href="/resources/css/test_check.css">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="/resources/js/test_check.js"></script>
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
</html>