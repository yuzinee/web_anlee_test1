<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/test_check.css">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<title>테스트</title>
</head>

<body>
  <div class="title">
	<h1 style="margin-top:100px" id="question_num" style="text-align: center;">-</h1>
  </div>	
  <div class="grp_question">
  	<div class="question" id="question" style="">Question</div>
  	<button class="button btnPush btn_style1" id="answer1" onclick="btn_answer_onclick(1)" style="width:30%;">A1</button>
  	<button class="button btnPush btn_style1" id="answer2" onclick="btn_answer_onclick(2)" style="width:30%;">A2</button>
  	<button class="button btnPush btn_style1" id="result" onclick="btn_result_onclick()" style="width:30%;">쿠팡 후 결과 보기</button>
  </div>
</body>
<script>
	/**
	 * @Description : 심리테스트 문항
	 * @author 이유진
	 * @since 2023.12.28.
	 */
	
	// 문항 번호
	var currentNumber = 1;
    var totalQuestions = 12;
    
    // 점수
    var scoreE = 0;
    var scoreI = 0;
    var scoreS = 0;
    var scoreN = 0;
    var scoreF = 0;
    var scoreT = 0;
    var scoreJ = 0;
    var scoreP = 0;
    
    var result = "";
    
 	// 질문
    var arrQuestion = [
    		"명절이 설레는 이유는?"
    	  , "기다리던 설날이 되었다."
    	  , "오랜만에 사촌들을 만났다."
    	  , "용돈으로 5만원을 받았다."
    	  , "명절 선물을 고를때 나는?"
    	  , "-"
    	  , "명절 덕담으로 듣고 싶은 말은?"
    	  , "친구가 명절 잘 보냈냐고 물어본다."
    	  , "친구가 명절에 아무데도 안 간다고 한다."
    	  , "이제 집에 돌아갈 시간이다."
    	  , "남은 연휴동안 뭐하지?"
    	  , "-"
    	]
    
 	// 답변
    var arrAnswer1 = [
    		"긴 연휴를 즐길 수 있어서"
    	  , "가족, 친구랑 즐거운 시간 보내야지"
    	  , "오랜만에 본 사촌이랑 술한잔 하기"
    	  , "물가는 오르는데 용돈은 그대로구만"
    	  , "실용적인 선물"
    	  , "-"
    	  , "응원이나 격려의 덕담"
    	  , "오랜만에 친척들 만나서 즐거웠어!"
    	  , "진짜? 좋겠다 쉬는게 최고지"
    	  , "차 막힐 시간 생각해서 출발"
    	  , "이미 계획 다 세워뒀지!"
    	  , "-"
    	]
    
    var arrAnswer2 = [
    		"오랜만에 친구들과 친척들을 만날 수 있어서"
    	  , "그냥 연휴일 뿐인데 집에서 쉬고싶어"
    	  , "별로 안 친한데? tv나 봐야지"
    	  , "우와 이걸로 뭐하지?"
    	  , "특별한 선물"
    	  , "-"
    	  , "아무말도 안 했으면 좋겠다."
    	  , "용돈 많이 받아서 좋았어"
    	  , "정말? 왜 아무데도 안 가?(집에 무슨 일 있나?)"
    	  , "남들 출발할 때 출발"
    	  , "음.. 이제 뭐하지?"
      , "-"
    	]
	
	$(document).ready(function() {
	    // 초기 세팅
	    $("#question_num").text(currentNumber + " / " + totalQuestions);
	    $("#question").text(arrQuestion[currentNumber - 1]);
	    $("#answer1").text(arrAnswer1[currentNumber - 1]);
	    $("#answer2").text(arrAnswer2[currentNumber - 1]); 
	    $("#result").hide();
	});
	
 	// btn_answer onclick event
	function btn_answer_onclick(score) {
    		// 마지막 문항까지 선택했을 경우
		if(currentNumber >= totalQuestions) {
// 			window.location.href = 'http://localhost:8081/test_result';

			// 심리테스트 결과
			score_result();
			
			// 컴포넌트 세팅
			$("#question_num").text("결과");
			$("#question").hide();
			$("#answer1").hide();
		    $("#answer2").hide();
		    $("#result").show();
			
			return false;
		}
    		
    		// 점수 계산
    		score_calculation(currentNumber, score);
	
   	 	// 문항 번호 +1 후 세팅
	    currentNumber++;
   	 	
	    $("#question_num").text(currentNumber + " / " + totalQuestions);
		$("#question").text(arrQuestion[currentNumber - 1]);
	    $("#answer1").text(arrAnswer1[currentNumber - 1]);
	    $("#answer2").text(arrAnswer2[currentNumber - 1]);
	    
	    console.log(scoreE);
	    console.log(scoreI);
	    console.log(scoreS);
	    console.log(scoreN);
	    console.log(scoreF);
	    console.log(scoreT);
	    console.log(scoreJ);
	    console.log(scoreP);
	    console.log("---");
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
 	
 	// 심리테스트 결과
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
 		
 		console.log(result);
 	}
</script>
</html>