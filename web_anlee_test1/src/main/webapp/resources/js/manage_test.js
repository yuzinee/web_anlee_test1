	
	var arrCheck = [];	// 체크된 TEST_SN 배열
	
	$(document).ready(function() {	
		// 테스트 조회
		search_test();
	});
	
	// 테스트 조회
	function search_test() {
		var testParams = {
			"queryId"	: "manageTestDAO.selectTestList"	// 쿼리 ID
		  , "searchNm"	: $("#inp_search").val().trim()
		}
		
		com_selectList(testParams, function(testResult) {
			$("#testY").children().not("h6").remove();	// testY 하위 컴포넌트 비우기(h6 제외)
			$("#testN").children().not("h6").remove();	// testN 하위 컴포넌트 비우기(h6 제외)
			
			var arrTest = testResult;
			var useAt = '';
			
			// 사용여부에 따라 리스트 생성
			for (var i=0; i<arrTest.length; i++){
				if(arrTest[i].USE_AT == "Y"){
					useAt = "testY";	// Using Test 그룹에 추가
				} else {
					useAt = "testN";	// Hidden Test 그룹에 추가
				}
				
				var html = "";	
				
				html += "<div class='d-flex text-body-secondary pt-3' onclick='item_onclick(this)' style='cursor:pointer'>";
				html += "	<p class='pb-3 mb-0 small lh-sm border-bottom'>";
				html += "		<input type='checkbox' class='checkbox-input' onclick='checkbox_onclick(this)' hidden>";
				html += "		<strong class='d-block text-gray-dark' style='margin-bottom:5px'>"+arrTest[i].TEST_NM+"</strong>";
				html += "		일 방문자 수: " + arrTest[i].COUNT + "명, 총 방문자 수: " + arrTest[i].TOTAL_COUNT + "명";
				html += "		<input type='text' value='"+arrTest[i].TEST_SN+"' hidden>";
				html += "	</p>"
				html += "</div>"
				
				$("#"+useAt).append(html);
			}
			
			// Hide Management.. 추가
			var htmlY = "";	
			
			htmlY += "<small class='d-block text-end mt-3'>";
			htmlY += "	<a href='#' id='hideManageY' onclick='hide_manage_onclick(\"Y\")'>Hide Management..</a>";
			htmlY += "</small>";
			
			$("#testY").append(htmlY);
			
			var htmlN = "";	
			
			htmlN += "<small class='d-block text-end mt-3'>";
			htmlN += "	<a href='#' id='hideManageN' onclick='hide_manage_onclick(\"N\")'>Hide Management..</a>";
			htmlN += "</small>";
			
			$("#testN").append(htmlN);
		});
	}
	
	// 테스트 리스트 클릭
	function item_onclick(e) {
		var testSn = e.querySelector('input[type="text"]').value;	 // TEST_SN
		
		// 테스트 상세보기 이동
		location.href = "/manage_detail?testSn=" + testSn;
	}
	
	// Hide Management.. 클릭
	function hide_manage_onclick(testInfo) {
	    var hideBtn = $("#hideManage" + testInfo);
	    var testDiv = $("#test" + testInfo + " input[type='checkbox']");
	    var useAt = "";
	    
	    if(testInfo == "Y") {
	    		useAt = "N";
	    } else {
	    		useAt = "Y";
	    }
	    
	    if(hideBtn.text() == "Hide Management..") {
	   	 	hideBtn.text("Save..");
	    		testDiv.prop("hidden", false); 
	    } else {
	    		// 항목을 체크하지 않았을 경우
	    		if(arrCheck.length == 0) {
	    			alert("수정할 테스트를 선택해주세요.");
	    			
	    			return false;
	    		}
	    	
	    		var params = {
	    			"queryId"	: "manageTestDAO.updateUseAt"	// 쿼리 ID
	    		  , "testSn"		: arrCheck						// TEST_SN 배열
	    		  , "useAt"		: useAt							// 사용여부
	    		}
	    		
	    		com_update(params, function() {
	    			// 컴포넌트 속성 변경
	    			hideBtn.text("Hide Management..");
	    		    testDiv.prop("hidden", true);
	    		    
	    		    // TEST_SN 배열 초기화
	    		    arrCheck = [];
	    		    
	    		 	// 테스트 조회
	    			search_test();
	    		 
	    		    alert("수정 되었습니다.");
	    		})
	    } 
	}
	
	// 체크박스 클릭
	function checkbox_onclick(checkbox) {
		// 해당 p 엘리먼트에서 test_sn 값을 가져옴
        var testSnValue = checkbox.parentElement.querySelector('input[type="text"]').value;

        if (checkbox.checked) {
            // 체크되었을 때 배열에 추가
            if (!arrCheck.includes(testSnValue)) {
            		arrCheck.push(testSnValue);
            }
        } else {
            // 체크 해제되었을 때 배열에서 제거
            var index = arrCheck.indexOf(testSnValue);
            
            if (index !== -1) {
            		arrCheck.splice(index, 1);
            }
        }
	}
	
	// Create Test 클릭
	function btn_create_onclick() {
		location.href="/manage_create";
	}
