document.addEventListener("DOMContentLoaded", function() {
  // 카드를 동적으로 생성하는 함수
  function createCard(sn, title, text, imageurl) {
    var cardHtml = `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${imageurl}" class="card-img-top" alt="Card Image">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${text}</p>
            <a href="/test_start?testSn=${sn}" class="btn btn-primary">테스트 시작</a>
          </div>
        </div>
      </div>
    `;
    return cardHtml;
  }

  function search_test() {
    var testParam = {
      "queryId": "testMainDAO.selectTestList" // 쿼리 ID
    }
    com_selectList(testParam, function(testResult) {
      var arrTest = testResult;

      var cardContainer = document.getElementById("cardContainer");
      for (var i = 0; i < arrTest.length; i++) {
        // 카드들 추가
        cardContainer.innerHTML += createCard(arrTest[i].TEST_SN, arrTest[i].TEST_NM, "테스트 요약", "https://via.placeholder.com/300");
      }
    });
  }
  // search_test 함수 호출
  search_test();
});