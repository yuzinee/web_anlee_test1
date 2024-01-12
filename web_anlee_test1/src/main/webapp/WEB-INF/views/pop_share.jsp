<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/test_basic.css">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<script src="/resources/js/pop_share.js"></script>
<title>공유하기</title>
</head>
<body>
	<div class="grp_border_box">
      <button type="button" class="button btnPush btn_style1" id="btn_share" style="width:30%;">카카오톡으로 공유하기</button>
      <button type="button" class="button btnPush btn_style1" id="btn_url" onclick="btn_url_onclick()" style="width:30%;">url 복사</button>
    </div>
</body>
</html>