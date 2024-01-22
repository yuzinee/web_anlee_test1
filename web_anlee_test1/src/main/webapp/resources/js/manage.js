$(document).ready(function() {
  // 클릭한 화면 표시
  $('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active'); // Remove active class from all nav-links
    $(this).addClass('active'); // Add active class to the clicked nav-link
  });

  // 관리자 메뉴 열기
  $('.dropdown-toggle').on('click', function() {
    $(this).next('.dropdown-menu').toggleClass('show');
  });

  // 관리자 메뉴 닫기
  $(document).on('click', function(event) {
    var dropdownToggle = $('.dropdown-toggle');
    if (!dropdownToggle.is(event.target) && dropdownToggle.has(event.target).length === 0) {
      $('.dropdown-menu').removeClass('show');
    }
  });
  
  loadContent('manage_stats');
});

// jsp 화면 띄우기
function loadContent(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(url + " 로드 실패");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("loadJSP").innerHTML = data;
      // 로드 성공시 실행할 이벤트 추가
      handleLoadSuccess(url);
    })
    .catch(error => console.error(url + " 로드 오류:", error));
}

// 자식 jsp 화면 로드시
function handleLoadSuccess(url) {
  // 원하는 이벤트 처리 코드를 여기에 추가
  switch (url) {
    case "manage_stats":
      createChart();
      break;
    case "manage_test":
      break;
    case "manage_setting":
      break;
    case "manage_trash":
      break;
    default:
      break;
  }
}

//*************
//차트 꾸미기
//*************
function createChart() {
  // 샘플 데이터
  var data = {
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [{
                    label: 'Monthly Data',
                    borderColor: 'rgb(75, 192, 192)',
                    data: [65, 59, 80, 81, 56],
                    fill: false
                }]
            };
            // 그래프 옵션
            var options = {
                responsive: true,
                maintainAspectRatio: false
            };
            // 라인 차트 생성
            var ctx = document.getElementById('lineChart').getContext('2d');
            var lineChart = new Chart(ctx, {
                type: 'line',
                data: data,
                options: options
            });
        }