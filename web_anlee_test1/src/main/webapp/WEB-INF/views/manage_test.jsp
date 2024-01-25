<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
	<script src="/resources/js/common.js"></script>
	<script src="/resources/js/manage_test.js"></script>
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
	  <div class="my-3 p-3 bg-body rounded shadow-sm" id="testY">
	    <h6 class="border-bottom pb-2 mb-0">Using Test</h6>
	  </div>
	  <div class="my-3 p-3 bg-body rounded shadow-sm" id="testN">
	    <h6 class="border-bottom pb-2 mb-0">Hidden Test</h6>
	  </div>
	  <button class="btn btn-secondary my-2" id="btn_create" style="float: right" onclick="btn_create_onclick()">Create Test</button>
	</main>
</body>
</html>