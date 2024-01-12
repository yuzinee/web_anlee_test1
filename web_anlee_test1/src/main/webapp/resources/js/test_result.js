	$(document).ready(function() {
		// session이 만료되었을 시 첫 페이지로 이동
 		if(sessionStorage.getItem("sessionInfo") != "Y") {
 			alert("잘못된 접근입니다.");
 			location.href="/test_start";
			
 			return false;
 		}
 		
		// 결과 표시
		result();
	});
	
	// 결과에 따른 설명 보여주기
	function result() {
		switch(questionResult) {
			case 'ISTJ' :
				$("#resultInfo").text("조카들이 장난감 부술까봐 문 걸어잠금");
				$("#resultCombination").text("최고 궁합 ESFP");
				break;
			case 'ISTP' :
				$("#resultInfo").text("은근히 잔소리하는 스타일");
				$("#resultCombination").text("최고 궁합 ESFJ");
				break;
			case 'ISFJ' :
				$("#resultInfo").text("큰 아버지랑 주식 이야기함");
				$("#resultCombination").text("최고 궁합 ESFP");
				break;
			case 'ISFP' :
				$("#resultInfo").text("하루종일 잠만잠");
				$("#resultCombination").text("최고 궁합 ENFJ");
				break;
			case 'INTJ' :
				$("#resultInfo").text("설에도 일 중이라 시골 못내려감");
				$("#resultCombination").text("최고 궁합 ENFP");
				break;
			case 'INTP' :
				$("#resultInfo").text("설 연휴에 왜 시골 내려가야하는지 이해 못함");
				$("#resultCombination").text("최고 궁합 ENFJ");
				break;
			case 'INFJ' :
				$("#resultInfo").text("잔소리 걱정하는 사람");
				$("#resultCombination").text("최고 궁합 ENFP");
				break;
			case 'INFP' :
				$("#resultInfo").text("방에 틀어박혀서 넷플릭스봄");
				$("#resultCombination").text("최고 궁합 ENFJ");
				break;
			case 'ESTJ' :
				$("#resultInfo").text("어르신 말동무 담당");
				$("#resultCombination").text("최고 궁합 INTP");
				break;
			case 'ESTP' :
				$("#resultInfo").text("설연휴에 친구 만남");
				$("#resultCombination").text("최고 궁합 ISFJ");
				break;
			case 'ESFJ' :
				$("#resultInfo").text("하루종일 인사 카톡 날림");
				$("#resultCombination").text("최고 궁합 ISTP");
				break;
			case 'ESFP' :
				$("#resultInfo").text("차례 지내지말고 여행가자고 조름");
				$("#resultCombination").text("최고 궁합 ISTJ");
				break;
			case 'ENTJ' :
				$("#resultInfo").text("꼰");
				$("#resultCombination").text("최고 궁합 INFP");
				break;
			case 'ENTP' :
				$("#resultInfo").text("보는 애들한테 전부 잔소리");
				$("#resultCombination").text("최고 궁합 INFJ");
				break;
			case 'ENFJ' :
				$("#resultInfo").text("하루종일 조카들에게 시달림");
				$("#resultCombination").text("최고 궁합 INFP");
				break;
			case 'ENFP' :
				$("#resultInfo").text("조카들 끌고 피시방 감");
				$("#resultCombination").text("최고 궁합 INFJ");
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