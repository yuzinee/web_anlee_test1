<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Design Example</title>
  <!-- 외부 CSS 파일 링크 -->
  <link rel="stylesheet" href="/resources/css/bootstrap.css">
  <style>
    .card {
      height: 100%;
    }
    .card-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  </style>
</head>
<body>

<div class="container mt-5">
  <div class="row" id="cardContainer">
    <!-- 동적으로 생성될 카드들이 여기에 추가될 것입니다. -->
  </div>

  <script>
    // JavaScript 코드 시작
    document.addEventListener("DOMContentLoaded", function() {
      // 카드를 동적으로 생성하는 함수
      function createCard(title, text) {
        var cardHtml = `
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="https://via.placeholder.com/300" class="card-img-top" alt="Card Image">
              <div class="card-body">
                <h5 class="card-title">ㅇㅇㅇ</h5>
                <p class="card-text">ㅇㅇ</p>
                <a href="#" class="btn btn-primary">테스트 시작</a>
              </div>
            </div>
          </div>
        `;
        return cardHtml;
      }

      // 카드를 동적으로 생성하고 추가하는 함수
      function addCard(title, text) {
    	  var cardContainer = document.getElementById("cardContainer");
    	  cardContainer.innerHTML += createCard(title, text);
    	  }

      // 예제 카드들 추가
      addCard("두근두근 심리테스트", "심리테스트 주제가 뭘까용 ㅎㅎ");
    });
    // JavaScript 코드 끝
  </script>

</div>

</body>
</html>
