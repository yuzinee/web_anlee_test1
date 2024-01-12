<!--
     * @Description : 심리테스트 시작화면
     * @author 안상현
     * @since 2024.01.03
-->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>심리테스트 시작</title>
  <link rel="stylesheet" type="text/css" href="/resources/css/test_start.css">
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script src="/resources/js/test_start.js"></script>
</head>
<body>
  <div class="top">
    <h1 class="title">설연휴 심리테스트</h1>
  </div>
  <div class="middle">
    <img src="/resources/img/simpleimage.png">
  </div>
  <div class="bottom">
    <button class="btn_black btn_concave"id="btn_reset" onclick="btn_onclick()">
    테스트 시작
    </button>
  </div>

</body>
</html>

<script>
function btn_onclick() {
	sessionStorage.setItem("sessionInfo", "Y");
    location.href="/test_check"
 }
</script>