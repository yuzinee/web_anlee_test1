<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
	<script src="/resources/js/common.js"></script>
	<link href="/resources/css/bootstrap.min.css" rel="stylesheet" >
	<title>테스트 관리</title>
</head>
<body class="bg-body-tertiary" cz-shortcut-listen="true">
	<main class="container">
	  <div class="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm" style="background : #a3a3a3">
	  	<div class="lh-1">
	      <h1 class="h6 mb-0 text-white lh-1">Test Manage</h1>
	    </div>
	  </div>
	  <div class="my-3 p-3 bg-body rounded shadow-sm" id="usingTest">
	    <h6 class="border-bottom pb-2 mb-0">Using Test</h6>
	  </div>
	  <div class="my-3 p-3 bg-body rounded shadow-sm" id="hiddenTest">
	    <h6 class="border-bottom pb-2 mb-0">Hidden Test</h6>
	</main>
</body>

<script>

	$(document).ready(function() {	
		// 질문 조회
		var testParam = {
			"queryId" : "manageTestDAO.selectTestList"	// 쿼리 ID
		}
		
		com_selectList(testParam, function(testResult) {
			var arrTest = testResult;
			
			// 사용여부에 따라 리스트 생성
			for (var i=0; i<arrTest.length; i++){
				if(arrTest[i].USE_AT == "Y"){
					var html1 = "";	
					
					html1 += "<div class='d-flex text-body-secondary pt-3'>";
					html1 += "<p class='pb-3 mb-0 small lh-sm border-bottom'>";
					html1 += "<strong class='d-block text-gray-dark'>"+arrTest[i].TEST_NM+"</strong>";
					html1 += "일 방문자수: " + arrTest[i].COUNT + ", 총 방문자수: " + arrTest[i].TOTAL_COUNT;
					html1 += "</p>"
					html1 += "</div>"
					
					$("#usingTest").append(html1);
				}
				
				if(arrTest[i].USE_AT == "N"){
					var html1 = "";	
					
					html1 += "<div class='d-flex text-body-secondary pt-3'>";
					html1 += "<p class='pb-3 mb-0 small lh-sm border-bottom'>";
					html1 += "<strong class='d-block text-gray-dark'>"+arrTest[i].TEST_NM+"</strong>";
					html1 += "일 방문자수: " + arrTest[i].COUNT + ", 총 방문자수: " + arrTest[i].TOTAL_COUNT;
					html1 += "</p>"
					html1 += "</div>"
					
					$("#hiddenTest").append(html1);
				}
			}
			
			// 구분선
			var html2 = "";	
			
			html2 += "<small class='d-block text-end mt-3'>";
			html2 += "<a href='#'>All updates</a>";
			html2 += "</small>";
			
			$("#usingTest").append(html2);
			$("#hiddenTest").append(html2);		
		});  
	});

</script>
</html>