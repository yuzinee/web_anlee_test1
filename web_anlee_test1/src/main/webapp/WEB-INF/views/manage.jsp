<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en" data-bs-theme="auto">
  <head>
    <meta charset="utf-8">
    <title>manage</title>
    <link href="/resources/css/bootstrap.css" rel="stylesheet">
    <link href="/resources/css/sidebars.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="/resources/js/sidebars.js"></script>
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
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
        <ul class="nav nav-pills flex-column mb-auto">
          <hr>
          <li>
            <a href="#" class="nav-link active">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"/></svg>
                        통계
            </a>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <a href="#" class="nav-link">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
                        게시글 관리
            </a>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <a href="#" class="nav-link">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"/></svg>
                         설정
            </a>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <a href="#" class="nav-link">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
                         설정
            </a>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <a href="#" class="nav-link">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
                         설정
            </a>
          </li>
        </ul>
      </div>
      <div class="b-example-divider b-example-vr"></div>
    </main>
  <body>
</html>
