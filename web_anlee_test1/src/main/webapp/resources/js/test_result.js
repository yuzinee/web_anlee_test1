	/**
	 * @Description : 심리테스트 문항
	 * @author 이유진
	 * @since 2023.12.28.
	 */
	
	$(document).ready(function() {
			// session이 만료되었을 시 첫 페이지로 이동
	// 		if(sessionStorage.getItem("sessionInfo") != "Y") {
	// 			alert("잘못된 접근입니다.");
	// 			location.href="/test_start";
				
	// 			return false;
	// 		}
			
		// 파라미터로 받은 심리테스트 결과 변수
		var questionResult = '<%=questionResult %>';
		$("#result").text("결과: " + questionResult);
	});
	 
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