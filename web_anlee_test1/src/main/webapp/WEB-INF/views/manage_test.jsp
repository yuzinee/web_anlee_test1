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
<body class="bg-body-tertiary" cz-shortcut-listen="true" style="font-size: 18px">
	<main class="container">
	  <div class="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm" style="background:#5a6268">
	  	<div class="lh-1">
	      <h1 class="h6 mb-0 text-white lh-1">Test Manage</h1>
	    </div>
	  </div>
	  <form class="card p-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Test Name">
          <button type="submit" class="btn btn-secondary">Search</button>
        </div>
      </form>
	  <div class="my-3 p-3 bg-body rounded shadow-sm" id="usingTest">
	    <h6 class="border-bottom pb-2 mb-0">Using Test</h6>
	  </div>
	  <div class="my-3 p-3 bg-body rounded shadow-sm" id="hiddenTest">
	    <h6 class="border-bottom pb-2 mb-0">Hidden Test</h6>
	  </div>
	  <button class="btn btn-secondary my-2" style="float: right">Create Test</button>
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
			var useAt = '';
			
			// 사용여부에 따라 리스트 생성
			for (var i=0; i<arrTest.length; i++){
				if(arrTest[i].USE_AT == "Y"){
					useAt = "usingTest";	// Using Test 그룹에 추가
				} else {
					useAt = "hiddenTest";	// Hidden Test 그룹에 추가
				}
				
				var html = "";	
				
				html += "<div class='d-flex text-body-secondary pt-3'>";
				html += "<p class='pb-3 mb-0 small lh-sm border-bottom'>";
				html += "<strong class='d-block text-gray-dark' style='margin-bottom:5px'>"+arrTest[i].TEST_NM+"</strong>";
				html += "일 방문자 수: " + arrTest[i].COUNT + "명, 총 방문자 수: " + arrTest[i].TOTAL_COUNT + "명";
				html += "</p>"
				html += "</div>"
				
				$("#"+useAt).append(html);
			}
			
			// 맨 밑에 Text 추가
			var htmlY = "";	
			
			htmlY += "<small class='d-block text-end mt-3'>";
// 			htmlY += "<a href='/manage_create?useAt=Y'>Hide Management..</a>";
			htmlY += "<a href='#'>Hide Management..</a>";
			htmlY += "</small>";
			
			$("#usingTest").append(htmlY);
			
			var htmlN = "";	
			
			htmlN += "<small class='d-block text-end mt-3'>";
// 			htmlN += "<a href='/manage_create?useAt=N'>Hide Management..</a>";
			htmlN += "<a href='#'>Hide Management..</a>";
			htmlN += "</small>";
			
			$("#hiddenTest").append(htmlN);		
		});  
	});

</script>
</html>