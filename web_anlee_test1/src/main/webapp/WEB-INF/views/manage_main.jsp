<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en" data-bs-theme="auto">
  <head>
    <meta charset="utf-8">
    <title>manage</title>
    <link href="/resources/css/bootstrap.css" rel="stylesheet">
    <link href="/resources/css/manage_main.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="/resources/js/manage_main.js"></script>
  </head>
  <body>
    <main class="d-flex flex-nowrap">
      <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px;">
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/resources/img/publicicon.png" alt="" width="32" height="32" class="rounded-circle">
            <strong>관리자이름</strong>
          </a>
          <ul class="dropdown-menu text-small shadow">
            <li><a class="dropdown-item" href="#">뭐넣을까</a></li>
            <li><a class="dropdown-item" href="#">넣을게 있긴한가</a></li>
            <li><a class="dropdown-item" href="#">없는듯</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">로그아웃</a></li>
          </ul>
        </div>
        <ul class="nav nav-pills flex-column mb-auto">
          <hr>
          <li>
            <a class="nav-link active" onclick="loadContent('manage_stats')">
              <svg class="bi pe-none me-2" width="16" height="16"></svg>
                        통계
            </a>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <a class="nav-link" onclick="loadContent('manage_test')">
              <svg class="bi pe-none me-2" width="16" height="16"></svg>
                        테스트 관리
            </a>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <a class="nav-link" onclick="loadContent('manage_setting')">
              <svg class="bi pe-none me-2" width="16" height="16"></svg>
                         설정
            </a>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <a class="nav-link" onclick="loadContent('manage_blink')">
              <svg class="bi pe-none me-2" width="16" height="16"></svg>
                         준비중
            </a>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <a class="nav-link" onclick="loadContent('manage_trash')">
              <svg class="bi pe-none me-2" width="16" height="16"></svg>
                         쓰레기
            </a>
          </li>
        </ul>
      </div>
      <div class="b-example-divider b-example-vr"></div>
      <!-- 화면 띄우기 -->
      <div id="loadJSP">

      </div>
    </main>
  <body>
</html>
