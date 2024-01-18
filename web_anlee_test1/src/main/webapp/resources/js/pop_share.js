
	$(document).ready(function() {
		//카카오톡 공유하기
		Kakao.init('08628cbaedbcd09fc0864713ac4bc22b'); // kakao developers JavaScript key	
		
		Kakao.Link.createScrapButton({
		   container: '#btn_share',
		   requestUrl: 'http://localhost:8081/',
		   templateId : 102339
		});
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