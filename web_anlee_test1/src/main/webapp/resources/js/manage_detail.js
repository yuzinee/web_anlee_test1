	var qstnNum = 0;

	$(document).ready(function() {	
		// 테스트 상세 조회
		search_test_detail();
	});
	
	// 테스트 상세 조회
	function search_test_detail() {
		var testSn = com_getParameter("testSn");
		
		var params = {
			"queryId"	: "manageDetailDAO.selectTestDetail"
		  , "testSn"	  	: testSn
		}
		
		com_selectList(params, function(result){
			$("#inp_title").val(result[0].TEST_NM); // 제목 세팅
			
			// 질문ㆍ답변 세팅
			var html = "";
			
			for(var i=0; i<result.length; i++){
				html += "<div class='col-12' style='margin-bottom:15px'>"
				    html += "	<label class='form-label'>Question"+(i+1)+"</label>"
				    html += "	<input type='text' class='form-control' id='inp_question"+(i+1)+"' name='inp_question' value='"+result[i].QSTN_CNTNT+"'>"
				    html += "</div>"
				    html += "<div class='col-12' style='margin-bottom:15px'>"
				    html += "	<label class='form-label'>Answers</label>"
				    html += "	<div style='display: flex; justify-content: space-between; width: 100%;'>"
				    html += "		<input type='text' class='form-control' id='inp_answer"+(i+1)+"_1' name='inp_answer1' style='width:80%' value='"+result[i].ANS_CNTNT1+"'>"
				    html += "		<select type='text' class='form-control' id='sbx_answer"+(i+1)+"_1' name='sbx_answer1' placeholder='1234 Main St' required='' style='width:20%' onchange='inp_answer1_onchange(this)' value='"+result[i].ANS_VAL1+"'>"
				    html += "			<option" + (result[i].ANS_VAL1 === 'E' ? ' selected' : '') + ">E</option>"
				    html += "			<option" + (result[i].ANS_VAL1 === 'I' ? ' selected' : '') + ">I</option>"
				    	html += "			<option" + (result[i].ANS_VAL1 === 'S' ? ' selected' : '') + ">S</option>"
			    		html += "			<option" + (result[i].ANS_VAL1 === 'N' ? ' selected' : '') + ">N</option>"
			 		html += "			<option" + (result[i].ANS_VAL1 === 'F' ? ' selected' : '') + ">F</option>"
					html += "			<option" + (result[i].ANS_VAL1 === 'T' ? ' selected' : '') + ">T</option>"
					html += "			<option" + (result[i].ANS_VAL1 === 'J' ? ' selected' : '') + ">J</option>"
					html += "			<option" + (result[i].ANS_VAL1 === 'P' ? ' selected' : '') + ">P</option>"
				    html += "		</select>"
				    html += "	</div>"
				    html += "</div>"
				    html += "<div class='col-12' style='margin-bottom:15px'>"
				    html += "	<div style='display: flex; justify-content: space-between; width: 100%;'>"
				    html += "		<input type='text' class='form-control' id='inp_answer"+(i+1)+"_2' name='inp_answer2' style='width:80%' value='"+result[i].ANS_CNTNT2+"'>"
				    html += "		<select type='text' class='form-control' id='sbx_answer"+(i+1)+"_2' name='sbx_answer2' placeholder='1234 Main St' required='' style='width:20%' value='"+result[i].ANS_VAL2+"' disabled>"
				    html += "			<option" + (result[i].ANS_VAL2 === 'E' ? ' selected' : '') + ">E</option>"
				    html += "			<option" + (result[i].ANS_VAL2 === 'I' ? ' selected' : '') + ">I</option>"
				    	html += "			<option" + (result[i].ANS_VAL2 === 'S' ? ' selected' : '') + ">S</option>"
			    		html += "			<option" + (result[i].ANS_VAL2 === 'N' ? ' selected' : '') + ">N</option>"
			 		html += "			<option" + (result[i].ANS_VAL2 === 'F' ? ' selected' : '') + ">F</option>"
					html += "			<option" + (result[i].ANS_VAL2 === 'T' ? ' selected' : '') + ">T</option>"
					html += "			<option" + (result[i].ANS_VAL2 === 'J' ? ' selected' : '') + ">J</option>"
					html += "			<option" + (result[i].ANS_VAL2 === 'P' ? ' selected' : '') + ">P</option>"
				    html += "		</select>"
				    html += "	</div>"
				    html += "</div>"
			}
			
			$("#grp_testInfo").append(html);
			
			// Question status 세팅
			question_status_set();
			
			qstnNum = result.length + 1;
		})
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
	
	// - 버튼 클릭
	function minus_question() {
		$("#grp_testInfo").children(":last-child").remove();
		$("#grp_testInfo").children(":last-child").remove();
		$("#grp_testInfo").children(":last-child").remove();
		
		qstnNum--;
	}