


$(document).ready(function(){

    /*
    1.找到滑鼠的x軸
    2.企鵝X軸與滑鼠的相減，計算出距離
    3.讓企鵝能夠追著滑鼠跑
    */

    let mouseX = 0

    $(document).mousemove(function(e){
        mouseX = e.clientX
    })


    setInterval(function(){
        let penguinX = $('.pet').offset().left;
        let dx = mouseX - penguinX;

        if (dx < 0) {
            $('.pet').css('transform', 'scaleX(-1)');
        }else{
            $('.pet').css('transform', 'scaleX(1)');
        }

        $('.pet').css('left', penguinX + dx * 0.1);
    }, 20);

    $('.ham').click(function(){
        $(this).toggleClass('active')
    })


    // 字數限制
    let textMax = $('#con').attr('maxlength')
    $('#limit').html(`還能再打<span>${textMax}</span> / ${textMax}個字 `)


    $('#con').keyup(function(){
        let textLength = $(this).val().length

        $('#limit').html(`還能再打<span>${textMax - textLength}</span> / ${textMax}個字`)       
    })

    
    //新增框格、新增評價內容
    let articleArray = $('article').toArray();

    
})
