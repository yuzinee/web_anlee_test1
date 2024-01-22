<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="generator" content="Hugo 0.115.4">
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <title>test</title>
    <link rel="canonical" href="https://getbootstrap.kr/docs/5.3/examples/checkout/">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3">
	<link href="/resources/css/bootstrap.css" rel="stylesheet">
	<link href="/resources/css/bootstrap.min.css" rel="stylesheet">
	<meta name="theme-color" content="#712cf9">
    <style>
      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;
        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }
    </style>
</head>
<body class="bg-body-tertiary" cz-shortcut-listen="true">  
	<div class="container">
	  <main>
	    <div class="py-5 text-center">
	      <h2>Create Test</h2>
	      <p class="lead">start making it</p>
	    </div>
	    <div class="row g-5">
	      <div class="col-md-5 col-lg-4 order-md-last">
	        <h4 style="margin-bottom:15px">Question status</h4>
	        <ul class="list-group mb-3">
	          <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
	            <div class="text-success">
	              <h6 class="my-0">Total Questions</h6>
	            </div>
	            <span class="text-success" id="totalCount">0</span>
	          </li>
	          <li class="list-group-item d-flex justify-content-between">
	            <span>E vs I</span>
	            <strong id="eiCount">0</strong>
	          </li>
	          <li class="list-group-item d-flex justify-content-between">
	            <span>S vs N</span>
	            <strong id="snCount">0</strong>
	          </li>
	          <li class="list-group-item d-flex justify-content-between">
	            <span>F vs T</span>
	            <strong id="ftCount">0</strong>
	          </li>
	          <li class="list-group-item d-flex justify-content-between">
	            <span>J vs P</span>
	            <strong id="jpCount">0</strong>
	          </li>
	        </ul>
	        <button class="w-100 btn btn-secondary btn-lg">Save</button>
	      </div>
	      <div class="col-md-7 col-lg-8">
	        <h4 class="mb-3">Test Info</h4>
	        <form class="needs-validation" novalidate="">
	          <div class="row g-3" id="grp_testInfo">
	            <div class="col-12" style="margin-bottom:15px">
	              <label class="form-label">Title</label>
	              <input type="text" class="form-control" id="inp_title">
	            </div>
	          </div>
	          <button type="button" class="w-100 btn btn-secondary btn-lg" onclick="add_question()">+</button>
	        </form>
	      </div>
	    </div>
	  </main>
	</div>
</body>
<script>
	var qstnNum = 1; // 질문 수
	
	// + 버튼 클릭
	function add_question() {
		// 질문ㆍ답변 추가
	    var html = "";
		
	    html += "<div class='col-12' style='margin-bottom:15px'>"
	    html += "<label class='form-label'>Question"+qstnNum+"</label>"
	    html += "<input type='text' class='form-control' id='inp_title'>"
	    html += "</div>"
	    html += "<div class='col-12' style='margin-bottom:15px'>"
	    html += "<label class='form-label'>Answers</label>"
	    html += "<div style='display: flex; justify-content: space-between; width: 100%;'>"
	    html += "<input type='text' class='form-control' id='inp_answer"+qstnNum+"_1' style='width:80%'>"
	    html += "<select type='text' class='form-control' id='sbx_answer"+qstnNum+"_1' placeholder='1234 Main St' required='' style='width:20%' onchange='inp_answer1_onchange(this)'>"
	    html += "<option>E</option>"
	    html += "<option>I</option>"
	    	html += "<option>S</option>"
    		html += "<option>N</option>"
 		html += "<option>F</option>"
		html += "<option>T</option>"
		html += "<option>J</option>"
		html += "<option>P</option>"
	    html += "</select>"
	    html += "</div>"
	    html += "</div>"
	    html += "<div class='col-12' style='margin-bottom:15px'>"
	    html += "<div style='display: flex; justify-content: space-between; width: 100%;'>"
	    html += "<input type='text' class='form-control' id='inp_answer"+qstnNum+"_2' style='width:80%'>"
	    html += "<select type='text' class='form-control' id='sbx_answer"+qstnNum+"_2' placeholder='1234 Main St' required='' style='width:20%' disabled>"
	    html += "<option>E</option>"
	    html += "<option selected>I</option>"
	    	html += "<option>S</option>"
    		html += "<option>N</option>"
 		html += "<option>F</option>"
		html += "<option>T</option>"
		html += "<option>J</option>"
		html += "<option>P</option>"
	    html += "</select>"
	    html += "</div>"
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
</script>
</html>