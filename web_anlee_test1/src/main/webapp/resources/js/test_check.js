
	var currentNumber = 1;	// 현재 문항 번호
	var totalQuestions = 0;	// total 질문 수
	var arrQuestions = [];	// 질문 배열
	var arrAnswers = [];		// 답변 배열
	var result = "";			// 결과
	
	// 페이지 로드 시
	$(document).ready(function() {
		var testSn = sessionStorage.getItem("sessionInfo");

		// session이 만료되었을 시 첫 페이지로 이동
		if(sessionStorage.getItem("sessionInfo") == null) {
			//alert("잘못된 접근입니다.");
			//location.href="/test_start";
		
			//return false;
		}
		
		// 문항 조회
		var qstnParams = {
			"queryId" : "testCheckDAO.selectQuestionList"	// 쿼리 ID
		  , "testSn" : testSn								// 테스트 일련번호
		}
		
		com_selectList(qstnParams, function(e) {
			
			totalQuestions = e.length;	// 전체 문항 수
			arrQuestions = e;			// 문항 배열
			
		    $("#question_num").text(currentNumber + " / " + totalQuestions);	// 문항 번호
		    $("#question").text(arrQuestions[currentNumber - 1].QSTN_CNTNT);	// 질문
		    $("#answer1").text(arrQuestions[currentNumber - 1].ANS_CNTNT1);	// 답변1
		    $("#answer2").text(arrQuestions[currentNumber - 1].ANS_CNTNT2);	// 답변1
		    $("#answer1").val(arrQuestions[currentNumber - 1].ANS_VAL1);		// 답변1
		    $("#answer2").val(arrQuestions[currentNumber - 1].ANS_VAL2);		// 답변1
		    $("#btn_result").hide();											// 결과 확인하기
		});  
	});

	// 답변 버튼 클릭
	function btn_answer_onclick(e) {
		var ansValue = e; 			// 답변 value
		arrAnswers.push(ansValue); 	// 답변 배열에 value 저장
		
		// 마지막 문항까지 선택했을 경우
		if(currentNumber >= totalQuestions) {
			cal_result();
			
			$("#question_num").text("결과");	// 문항 수
			$("#question").hide();			// 질문
			$("#answer1").hide();			// 답변1
		    $("#answer2").hide();			// 답변2
		    $("#btn_result").show();			// 결과 확인하기
		    
			return false;
		}
 		
		currentNumber ++;

		$("#question_num").text(currentNumber + " / " + totalQuestions);	// 문항 번호
	    $("#question").text(arrQuestions[currentNumber - 1].QSTN_CNTNT);	// 질문
	    $("#answer1").text(arrQuestions[currentNumber - 1].ANS_CNTNT1);	// 답변1
	    $("#answer2").text(arrQuestions[currentNumber - 1].ANS_CNTNT2);	// 답변1
	    $("#answer1").val(arrQuestions[currentNumber - 1].ANS_VAL1);		// 답변1
	    $("#answer2").val(arrQuestions[currentNumber - 1].ANS_VAL2);		// 답변1	
	}
	
	// 결과 확인하기 버튼 클릭
	function btn_result_onclick() {
		$("#form_result").submit();
	}
	
	// 결과 계산
	function cal_result() {
		var ei = 0;
		var sn = 0;
		var ft = 0;
		var jp = 0;
		
		for(i=0; i<arrAnswers.length; i++){
			switch(arrAnswers[i]){
				case "E":
					ei++;
					break;
				case "I":
					ei--;
					break;
				case "S":
					sn++;
					break;
				case "N":
					sn--;
					break;
				case "F":
					ft++;
					break;
				case "T":
					ft--;
					break;
				case "J":
					jp++;
					break;
				case "P":
					jp--;
					break;
			}
		}
		
		if(ei>0){
			result += "E"
		} else {
			result += "I"
		}
		
		if(sn>0){
			result += "S"
		} else {
			result += "N"
		}
		
		if(ft>0){
			result += "F"
		} else {
			result += "T"
		}
		
		if(jp>0){
			result += "J"
		} else {
			result += "P"
		}
		
		$("#ibx_result").val(result);
	}
	