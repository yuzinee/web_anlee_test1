 	
	// 단건 조회
	function com_selectOne(param) {	
		if(param.length < 1){
			alert("쿼리 ID를 입력해 주세요.");
			
			return false;
		}
		
		
		$.ajax({
		    url: "/test/selectOne",
		    type: "POST",
		    contentType: "application/json",
		    data: JSON.stringify(param),
		    success: function (result) { 
		        console.log(result);
		    },
		    error: function (result) {
		        alert("error");
		    }
		});
	}
	 
//	function com_selectOne(params){
//		// XMLHttpRequest 객체 생성
//	    var xhr = new XMLHttpRequest();
//
//	    // 요청 설정
//	    xhr.open("POST", "/test/selectOne", true);
//
//	    // 요청 헤더 설정 (POST 요청일 때 필요한 설정)
//	    xhr.setRequestHeader("Content-Type", "application/json");
//
//	    // 요청 완료 시의 콜백 함수 설정
//	    xhr.onreadystatechange = function () {
//	        // 요청이 완료되고 응답 상태가 201 (Created)인 경우
//	        if (xhr.readyState == 4 && xhr.status == 201) {
//	        		console.log("asdf");
//	        }
//	    };
//
//	    // 파라미터 데이터를 JSON 문자열로 변환하여 요청 본문에 추가
//	    xhr.send(JSON.stringify(params));
//		
//	}
	
	// 리스트 조회
	function com_selectList(param) {	
		if(param.length < 1){
			alert("쿼리 ID를 입력해 주세요.");
			
			return false;
		}
		
		$.ajax({
		    url: "/test/selectList",
		    type: "POST",
		    contentType: "application/json",
		    data: JSON.stringify(param),
		    success: function (result) {
		        console.log(result);
		    },
		    error: function (result) {
		        alert("error");
		    }
		});
	}
	
	// 등록
	function com_insert(param) {	
		if(param.length < 1){
			alert("쿼리 ID를 입력해 주세요.");
			
			return false;
		}
		
		$.ajax({
		    url: "/test/insert",
		    type: "POST",
		    contentType: "application/json",
		    data: JSON.stringify(param),
		    success: function (result) {
		        console.log(result);
		    },
		    error: function (result) {
		        alert("error");
		    }
		});
	}
	
	// 수정
	function com_update(param) {	
		if(param.length < 1){
			alert("쿼리 ID를 입력해 주세요.");
			
			return false;
		}
		
		$.ajax({
		    url: "/test/update",
		    type: "POST",
		    contentType: "application/json",
		    data: JSON.stringify(param),
		    success: function (result) {
		        console.log(result);
		    },
		    error: function (result) {
		        alert("error");
		    }
		});
	}
	
	// 삭제
	function com_delete(param) {	
		if(param.length < 1){
			alert("쿼리 ID를 입력해 주세요.");
			
			return false;
		}
		
		$.ajax({
		    url: "/test/delete",
		    type: "POST",
		    contentType: "application/json",
		    data: JSON.stringify(param),
		    success: function (result) {
		        console.log(result);
		    },
		    error: function (result) {
		        alert("error");
		    }
		});
	}