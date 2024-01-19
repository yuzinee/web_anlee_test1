<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/test_basic.css">
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="/resources/js/common.js"></script>
<script src="/resources/js/test_check.js"></script>
<title>테스트</title>
</head>

<body>
  <form id="form_result" action="/test_result" method="post">
    <div class="title">
      <h1 style="margin-top:100px" id="question_num" style="text-align: center">-</h1>
    </div>	
    <div class="grp_border_box">
      <div class="border_box" id="question" style="">Question</div>
      <button type="button" class="button btnPush btn_style1" id="answer1" onclick="btn_answer_onclick(1)" style="width:30%;">A1</button>
      <button type="button" class="button btnPush btn_style1" id="answer2" onclick="btn_answer_onclick(2)" style="width:30%;">A2</button>
      <button type="button" class="button btnPush btn_style1" id="btn_result" onclick="btn_result_onclick()" style="width:30%;">결과 확인하러 가기</button>
    </div>
    <input type="hidden" name="ibx_result" id="ibx_result" value=''>
  </form>
</body>

<script>
	
</script>
</html>