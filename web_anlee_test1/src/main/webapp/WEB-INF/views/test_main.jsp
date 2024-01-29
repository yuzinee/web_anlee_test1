<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Design Example</title>
  <!-- 외부 CSS 파일 링크 -->
  <link rel="stylesheet" href="/resources/css/bootstrap.css">
  <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
  <script src="/resources/js/common.js"></script>
  <script src="/resources/js/test_main.js"></script>
  <style>
    .card {
      height: 100%;
    }
    .card-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  </style>
</head>
<body>

<div class="container mt-5">
  <div class="row" id="cardContainer"></div>
</div>

</body>
</html>
