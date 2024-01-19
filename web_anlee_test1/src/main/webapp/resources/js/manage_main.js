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
    .then(response => response.text())
    .then(data => document.getElementById("loadJSP").innerHTML = data)
    .catch(error => console.error(url + " 로드 오류:", error));
}