	
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
				    html += "		<input type='text' class='form-control' id='inp_answer"+(i+1)+"_2' name='inp_answer2' style='width:80%' value='"+result[i].ANS_CNTNT2+"'>"
				    html += "		<select type='text' class='form-control' id='sbx_answer"+(i+1)+"_2' name='sbx_answer2' placeholder='1234 Main St' required='' style='width:20%' value='"+result[i].ANS_VAL2+"' disabled>"
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
			}
			
			$("#grp_testInfo").append(html);
		})
	}