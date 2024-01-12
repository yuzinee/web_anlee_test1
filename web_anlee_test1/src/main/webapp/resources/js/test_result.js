	$(document).ready(function() {
		// 결과 표시
		result();

		// session이 만료되었을 시 첫 페이지로 이동
 		if(sessionStorage.getItem("sessionInfo") != "Y") {
 			alert("잘못된 접근입니다.");
 			location.href="/test_start";
			
 			return false;
 		}
	});
	
	// 결과에 따른 설명 보여주기
	function result() {
		switch(questionResult) {
			case 'ISTJ' :
				$("#result").text("결과: 1");
				break;
			case 'ISTP' :
				$("#result").text("결과: 2");
				break;
			case 'ISFJ' :
				$("#result").text("결과: 3");
				break;
			case 'ISFP' :
				$("#result").text("결과: 4");
				break;
			case 'INTJ' :
				$("#result").text("결과: 5");
				break;
			case 'INTP' :
				$("#result").text("결과: 6");
				break;
			case 'INFJ' :
				$("#result").text("결과: 7");
				break;
			case 'INFP' :
				$("#result").text("결과: 8");
				break;
			case 'ESTJ' :
				$("#result").text("결과: 9");
				break;
			case 'ESTP' :
				$("#result").text("결과: 10");
				break;
			case 'ESFJ' :
				$("#result").text("결과: 11");
				break;
			case 'ESFP' :
				$("#result").text("결과: 12");
				break;
			case 'ENTJ' :
				$("#result").text("결과: 13");
				break;
			case 'ENTP' :
				$("#result").text("결과: 14");
				break;
			case 'ENFJ' :
				$("#result").text("결과: 15");
				break;
			case 'ENFP' :
				$("#result").text("결과: 16");
				break;
		}
	}
	
	// 공유하기 버튼 클릭
	function openPopup(){
		window.open("pop_share", "", "width=600px, height=300px");
	}
	
	// 다시하기 버튼 클릭
	function btn_reset_onclick() {
		location.href="/test_start";
	}