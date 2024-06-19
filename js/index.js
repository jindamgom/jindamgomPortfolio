function acyncMovePage(url){
    console.log("버튼 클릭");
            // ajax option
            var ajaxOption = {
                    url : url,
                    async : true,
                    type : "POST",
                    dataType : "html",
                    cache : false
            };
            
            $.ajax(ajaxOption).done(function(data){
                // Contents 영역 삭제
                $('#div_content').children().remove();
                // Contents 영역 교체
                $('#div_content').html(data);
            });
}

function loadContent(url) {
    console.log("버튼 클릭111111");
    $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
            $('#div_content').html(data);
        },
        error: function() {
            alert('콘텐츠를 불러오는 데 실패했습니다.');
        }
    });
}