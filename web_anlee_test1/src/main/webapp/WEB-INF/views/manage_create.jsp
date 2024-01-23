<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="/resources/js/common.js"></script>
    <script src="/resources/js/manage_create.js"></script>
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
	            <span>E - I</span>
	            <strong id="eiCount">0</strong>
	          </li>
	          <li class="list-group-item d-flex justify-content-between">
	            <span>S - N</span>
	            <strong id="snCount">0</strong>
	          </li>
	          <li class="list-group-item d-flex justify-content-between">
	            <span>F - T</span>
	            <strong id="ftCount">0</strong>
	          </li>
	          <li class="list-group-item d-flex justify-content-between">
	            <span>J - P</span>
	            <strong id="jpCount">0</strong>
	          </li>
	        </ul>
	        <button class="w-100 btn btn-secondary btn-lg" id="btn_save" onclick="btn_save_onclick()">Save</button>
	      </div>
	      <div class="col-md-7 col-lg-8">
	        <h4 class="mb-3">Test Info</h4>
	        <form class="needs-validation" novalidate="" id="form_test">
	          <div class="row g-3" id="grp_testInfo">
	            <div class="col-12" style="margin-bottom:15px">
	              <label class="form-label">Title</label>
	              <input type="text" class="form-control" id="inp_title" name="inp_title">
	            </div>
	          </div>
	          <div style="display: flex; justify-content: space-between; width: 100%;">
		          <button type="button" class="w-100 btn btn-secondary btn-lg" onclick="add_question()">+</button>
		          <div style="margin: 0 2px;"></div>
		          <button type="button" class="w-100 btn btn-secondary btn-lg" onclick="minus_question()">-</button>
	          </div>
	        </form>
	      </div>
	    </div>
	  </main>
	</div>
</body>
<script>
</script>
</html>