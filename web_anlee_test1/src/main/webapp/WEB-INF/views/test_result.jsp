<!--
   * @Description : 심리테스트 결과
   * @author 이유진
   * @since 2023.12.28.
-->

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/test_result.css">
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<title>심리테스트</title>
</head>
<body>
	result
	
	<div class="button_container">
	  <button class="btn_result_share"><span>카카오톡 공유하기</span></button>
	</div>
	
	<script>

	// kakao developers JavaScript key	
	Kakao.init('08628cbaedbcd09fc0864713ac4bc22b');
	
	// 카카오톡 공유하기
	Kakao.Link.createScrapButton({
        container: '.btn_result_share',
        requestUrl: 'http://localhost:8081/',
        templateId : 102339
    });
		
	</script>
</body>

</html>