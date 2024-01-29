	
	$(document).ready(function() {
		// session이 만료되었을 시 첫 페이지로 이동
//  		if(sessionStorage.getItem("sessionInfo") != "Y") {
//  			alert("잘못된 접근입니다.");
//  			location.href="/test_start";
			
//  			return false;
//  		}
		
		// 결과 표시
		result();
	});
	
	// 결과에 따른 설명 보여주기
	function result() {
		var params = {
			"queryId" : "testResultDAO.selectResult"	// 쿼리 ID
		  , "testSn" : "test2"						// 테스트 일련번호
		  , "mbti" : questionResult					// MBTI 결과
		}
		
		com_selectOne(params, function(e){
			$("#resultInfo").text(e.RESULT);				// 결과 세팅
			$("#resultCombination").text(e.COMBINATION);	// 궁합 세팅
		})
	}
	
	// 공유하기 버튼 클릭
	function openPopup(){
		window.open("pop_share", "", "width=600px, height=300px");
	}
	
	// 다시하기 버튼 클릭
	function btn_reset_onclick() {
		location.href="/test_start";
	}	