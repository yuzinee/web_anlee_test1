
	// 문항 번호
	var currentNumber = 1;
	var totalQuestions = 0;
	
	// 점수
	var scoreE = 0;
	var scoreI = 0;
	var scoreS = 0;
	var scoreN = 0;
	var scoreF = 0;
	var scoreT = 0;
	var scoreJ = 0;
	var scoreP = 0;
	
	// 결과ㆍ질문ㆍ답변
	var result = "";
	var arrQuestions = []
	var arrAnswers = {}
	
	// 페이지 로드 시
	$(document).ready(function() {
		// session이 만료되었을 시 첫 페이지로 이동
		if(sessionStorage.getItem("sessionInfo") != "Y") {
			//alert("잘못된 접근입니다.");
			//location.href="/test_start";
		
			//return false;
		}
		
		// 질문 조회
		var qstnParams = {
			"queryId" : "testCheckDAO.selectQuestionList"	// 쿼리 ID
		  , "testSn" : "test1"								// 테스트 일련번호
		}
		
		com_selectList(qstnParams, function(qstnResult) {
			
			arrQuestions = qstnResult; 				// 질문 배열
			totalQuestions = arrQuestions.length; 	// 질문 수
			
			// 답변 조회
			ansParams = {
				"queryId" : "testCheckDAO.selectAnswerList"			// 쿼리 ID
			  , "qstnSn" : arrQuestions[currentNumber - 1].QSTN_SN	// 질문 일련번호
			}
			
			com_selectOne(ansParams, function(ansResult) {
				arrAnswers = ansResult;	// 답변 리스트
				
				// 초기 세팅
			    $("#question_num").text(currentNumber + " / " + totalQuestions);	// 문항 번호
			    $("#question").text(arrQuestions[currentNumber - 1].QSTN_CNTNT);	// 질문
			    $("#answer1").text(arrAnswers.F_ANS);							// 답변1
			    $("#answer2").text(arrAnswers.S_ANS); 							// 답변2
			    $("#btn_result").hide();											// 결과 확인하기
			})
		});  
	});

	// 답변 버튼 클릭
	function btn_answer_onclick(score) {
		
		// 마지막 문항까지 선택했을 경우
		if(currentNumber >= totalQuestions) {
			// 심리테스트 결과
			score_result();
			
			return false;
		}
		
		// 점수 계산
		score_calculation(currentNumber, score);

	 	// 문항 번호 +1 후 세팅
	    currentNumber++;
		
		// 답변 조회
		ansParams = {
			"queryId" : "testCheckDAO.selectAnswerList"			// 쿼리 ID
		  , "qstnSn" : arrQuestions[currentNumber - 1].QSTN_SN	// 질문 일련번호
		}

		com_selectOne(ansParams, function(ansResult) {
			arrAnswers = ansResult;	// 답변 리스트

		    $("#question_num").text(currentNumber + " / " + totalQuestions);	// 문항 번호
		    $("#question").text(arrQuestions[currentNumber - 1].QSTN_CNTNT);	// 문항 수
		    $("#answer1").text(arrAnswers.F_ANS);							// 답변1
		    $("#answer2").text(arrAnswers.S_ANS); 							// 답변2
		    $("#btn_result").hide();											// 결과 확인하기
		})
	}
	
	// 결과 확인하기 버튼 클릭
	function btn_result_onclick() {
		$("#form_result").submit();
	}
	
	// 점수 계산
	function score_calculation(currentNumber, score) {
		if(currentNumber < 4 && score == 1) {
			scoreE++;
		}
		
		if(currentNumber < 4 && score == 2) {
			scoreI++;
		}
		
			if(currentNumber > 3 && currentNumber < 7 && score == 1) {
			scoreS++;
		}
		
		if(currentNumber > 3 && currentNumber < 7 && score == 2) {
			scoreN++;
		}
		
		if(currentNumber > 6 && currentNumber < 10 && score == 1) {
			scoreF++;
		}
		
		if(currentNumber > 6 && currentNumber < 10 && score == 2) {
			scoreT++;
		}
		
		if(currentNumber > 9 && score == 1) {
			scoreJ++;
		}
		
		if(currentNumber > 9 && score == 2) {
			scoreP++;
		}
	}
	
	// 테스트 결과
	function score_result() {
		if (scoreE > scoreI) {
		    result += "E";
		} else {
		    result += "I";
		}

		if (scoreS > scoreN) {
		    result += "S";
		} else {
		    result += "N";
		}

		if (scoreF > scoreT) {
		    result += "F";
		} else {
		    result += "T";
		}

		if (scoreJ > scoreP) {
		    result += "J";
		} else {
		    result += "P";
		}
		
	 	// 컴포넌트 세팅
		$("#question_num").text("결과");	// 문항 수
		$("#question").hide();			// 질문
		$("#answer1").hide();			// 답변1
	    $("#answer2").hide();			// 답변2
	    $("#btn_result").show();			// 결과 확인하기
	    $("#ibx_result").val(result);	// 결과
	}