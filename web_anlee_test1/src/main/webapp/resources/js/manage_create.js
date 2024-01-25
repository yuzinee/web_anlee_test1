	
	var qstnNum = 1; // 질문 수
	
	// 페이지 로드 시
	$(document).ready(function() {
		// 답변 추가
		add_question();
	});

	// + 버튼 클릭
	function add_question() {
		// 질문ㆍ답변 추가
	    var html = "";
		
	    html += "<div class='col-12' style='margin-bottom:15px'>"
	    html += "	<label class='form-label'>Question"+qstnNum+"</label>"
	    html += "	<input type='text' class='form-control' id='inp_question"+qstnNum+"' name='inp_question'>"
	    html += "</div>"
	    html += "<div class='col-12' style='margin-bottom:15px'>"
	    html += "	<label class='form-label'>Answers</label>"
	    html += "	<div style='display: flex; justify-content: space-between; width: 100%;'>"
	    html += "		<input type='text' class='form-control' id='inp_answer"+qstnNum+"_1' name='inp_answer1' style='width:80%'>"
	    html += "		<select type='text' class='form-control' id='sbx_answer"+qstnNum+"_1' name='sbx_answer1' placeholder='1234 Main St' required='' style='width:20%' onchange='inp_answer1_onchange(this)'>"
	    html += "			<option>E</option>"
	    html += "			<option>I</option>"
	    	html += "			<option>S</option>"
    		html += "			<option>N</option>"
 		html += "			<option>F</option>"
		html += "			<option>T</option>"
		html += "			<option>J</option>"
		html += "			<option>P</option>"
	    html += "		</select>"
	    html += "	</div>"
	    html += "</div>"
	    html += "<div class='col-12' style='margin-bottom:15px'>"
	    html += "	<div style='display: flex; justify-content: space-between; width: 100%;'>"
	    html += "		<input type='text' class='form-control' id='inp_answer"+qstnNum+"_2' name='inp_answer2' style='width:80%'>"
	    html += "		<select type='text' class='form-control' id='sbx_answer"+qstnNum+"_2' name='sbx_answer2' placeholder='1234 Main St' required='' style='width:20%' disabled>"
	    html += "			<option>E</option>"
	    html += "			<option selected>I</option>"
	    	html += "			<option>S</option>"
    		html += "			<option>N</option>"
 		html += "			<option>F</option>"
		html += "			<option>T</option>"
		html += "			<option>J</option>"
		html += "			<option>P</option>"
	    html += "		</select>"
	    html += "	</div>"
	    html += "</div>"
	
	    $("#grp_testInfo").append(html);
	    
	    qstnNum++;
	    
	    // Question Status 세팅
	    question_status_set();
	    
	}
	
	// 답변1 selectBox onchange
	function inp_answer1_onchange(e) {
		var inpAnswer1 = $('#'+e.id).val();					// 답변1 inputBox ID
		var inpAnswer2 = $('#'+e.id.substring(0, 11)+"_2");	// 답변2 inputBox ID
	
		switch(inpAnswer1) {
			case 'E':
				inpAnswer2.val("I");
				break;
		  	case 'I':
		  		inpAnswer2.val("E");
				break;
		  	case 'S':
				inpAnswer2.val("N");
				break;
		  	case 'N':
				inpAnswer2.val("S");
				break;
		  	case 'F':
				inpAnswer2.val("T");
				break;
		  	case 'T':
				inpAnswer2.val("F");
				break;
		  	case 'J':
				inpAnswer2.val("P");
				break;
		  	case 'P':
				inpAnswer2.val("J");
				break;
		}
		
		// Question Status 세팅
		question_status_set();
	}
	
	// Question Status 세팅
	function question_status_set() {
		var totalCount = $('[id^="sbx_answer"]').length/2;
		var eiCount = count_selectd_options('E');
		var snCount = count_selectd_options('S');
		var ftCount = count_selectd_options('F');
		var jpCount = count_selectd_options('J');
		
		$("#totalCount").text(totalCount);
		$("#eiCount").text(eiCount);
		$("#snCount").text(snCount);
		$("#ftCount").text(ftCount);
		$("#jpCount").text(jpCount);
	}
	
	// sbx_answer value 계산
	function count_selectd_options(value) {
	    var count = 0;
	    
	    $('[id^="sbx_answer"]').each(function() {
	        if ($(this).find('option:selected').val() === value) {
	            count++;
	        }
	    });
	    
	    return count;
	}
	
	// - 버튼 클릭
	function minus_question() {
		$("#grp_testInfo").children(":last-child").remove();
		$("#grp_testInfo").children(":last-child").remove();
		$("#grp_testInfo").children(":last-child").remove();
		
		qstnNum--;
	}
	
	// Save 버튼 클릭
	function btn_save_onclick() {
		// TEST_SN MAX 값 추출
		param = {
			"queryId" : "manageCreateDAO.selectTestSn"
		};
		
		com_selectOne(param, function (result){
			// 테스트 정보ㆍ질문ㆍ답변 등록
			var formData = [];											// insert 파라미터
			var testSn = "test" + (parseInt(result.TEST_SN.slice(4))+1);	// 테스트 일련번호
			
			for(var i=1; i<qstnNum; i++){
				qntnInfo = {
					 "testSn"	: testSn									// 테스트 일련번호
				   ,	 "title"		: $("#inp_title").val()					// 테스트 제목
				   , "qstnSn"	: testSn + "_" + i						// 질문 일련번호
				   , "qstnCntnt"	: $('#inp_question' + i).val()			// 질문 내용
				   , "ansSn1"	: testSn + "_" + i + "_1" 				// 답변1 일련번호
				   , "ansCntnt1"	: $('#inp_answer' + i + '_1').val()		// 답변1 내용
				   , "ansVal1" 	: $('#sbx_answer' + i + '_1').val()		// 답변1 값
				   , "ansSn2"	: testSn + "_" + i + "_2" 				// 답변2 일련번호
				   , "ansCntnt2"	: $('#inp_answer' + i + '_2').val()		// 답변2 내용
				   , "ansVal2" 	: $('#sbx_answer' + i + '_2').val() 		// 답변2 값
				}
				
				formData.push(qntnInfo);
			}
			
			var insertParams = {
				"insertParams" : formData
			}
			
			$.ajax({
			    url: "/manage/create",
			    type: "POST",
			    contentType: "application/json",
			    data: JSON.stringify(insertParams),
			    success: function (responseData) {
			    		alert("테스트가 생성되었습니다.");
			    },
			    error: function (result) {
			        alert("error");
			    }
			});

		});
		
		// 유효성 검사
		check_info();
	}
	
	// 유효성 검사
	function check_info() {
		
		// inputBox Check
		var inputCheck = true;
		
		$('input').each(function() {
            // 값이 비어 있는지 확인
            if ($(this).val().trim() === '') {
                alert('모든 입력란을 채워주세요.');
                inputCheck = false;
                
                return false;
            }
        });
		
		if (!inputCheck) {
			
		    return false;
		}
		
		// 문항 수 Check
		if($("#eiCount").text() == 0 || $("#eiCount").text() % 2 == 0) {
			alert("E-I 문항을 추가해 주세요.");
						
			return false;
		}
		
		if($("#snCount").text() == 0 || $("#snCount").text() % 2 == 0) {
			alert("S-N 문항을 추가해 주세요.");
			
			return false;
		}
		
		if($("#ftCount").text() == 0 || $("#ftCount").text() % 2 == 0) {
			alert("F-T 문항을 추가해 주세요.");
			
			return false;
		}
		
		if($("#jpCount").text() == 0 || $("#jpCount").text() % 2 == 0) {
			alert("J-P 문항을 추가해 주세요.");
			
			return false;
		}
	}