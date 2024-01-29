document.addEventListener("DOMContentLoaded", function() {
  // 카드를 동적으로 생성하는 함수
  function createTest(sn, title, text, imageurl) {
    var cardHtml = `
      <div class="display">
        <h1 class="title">${title}</h1>
        <img src="/resources/img/simpleimage.png">
      </div>
      <div class="display">
        <button class="btn_concave" onclick="btn_onclick()">테스트 시작</button>
        <img class="btn_public" src="/resources/img/publicicon.png" onclick="openPopup()">
      </div>
    `;
    return cardHtml;
  }

  function search_test() {
	var testSn = com_getParameter("testSn");
	
    var testParam = {
        "queryId": "testMainDAO.selectTestOne" // 쿼리 ID
      , "testSn": testSn // 시리얼 넘버
    }
    com_selectOne(testParam, function(testResult) {
      var arrTest = testResult;

      var cardContainer = document.getElementById("testEntrance");
      cardContainer.innerHTML = createTest(arrTest.TEST_SN, arrTest.TEST_NM, "", "");
    });
  }
  // search_test 함수 호출
  search_test();
});

function btn_onclick() {
	sessionStorage.setItem("sessionInfo", "Y");
    location.href="/test_check"
 }