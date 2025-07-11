


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


    //點選漢堡
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

    
    // //新增框格、新增評價內容
    // let articleArray = $('article').toArray();

    //點選贊助項目
    $('#plan article').click(function(){
        $(this).toggleClass('pborder').siblings().removeClass('pborder')
    })


    $('#plan1').click(function(){
        $('#result-plan h5').text(`1.餵浮游生物`)
        $('#dollar h5').text(`NT$ 50`)
        $('#plan-dollar h5 span').text(`50`)    

        addition();
    })

    $('#plan1').trigger('click')

    $('#plan2').click(function(){
        $('#result-plan h5').text(`2.餵小螃蟹`)
        $('#dollar h5').text(`NT$ 500`)
        $('#plan-dollar h5 span').text(`500`)    

        addition();
    })

    $('#plan3').click(function(){
        $('#result-plan h5').text(`3.餵頭足類`)
        $('#dollar h5').text(`NT$ 1000`)
        $('#plan-dollar h5 span').text(`1000`)    

        addition();
    })

    $('#plan4').click(function(){
        $('#result-plan h5').text(`4.餵磷蝦`)
        $('#dollar h5').text(`NT$ 3000`)
        $('#plan-dollar h5 span').text(`3000`)
        addition();
    })

    $('#plan5').click(function(){
        $('#result-plan h5').text(`5.餵沙丁魚`)
        $('#dollar h5').text(`NT$ 5000`)
        $('#plan-dollar h5 span').text(`5000`)

        addition();
    })

    $('#user').on('input',function(){
        let value = $(this).val()

        $('#contri span').text(`${value}`)

        addition();
    })


    function addition(){

        let userVal = parseInt($('#plan-dollar span').text())
        let planVal = parseInt($('#contri span').text())

        // console.log(userVal)
        // console.log(planVal)

        let total = userVal + planVal

        $('#final span').text(`${total}`)
    }
    
    addition();


    $('#key-word').on('input', function(){
        let keyWord = $(this).val()
        let found = false;

            $('.art').each(function(){
                let item = $(this).find('h5').data('item')

                if(item.indexOf(keyWord) != -1){
                    $(this).show()
                    found = true
                }else{
                     $(this).hide()
                }
                
            })

        if(!found){
            $('.no_value').css('display', 'block').text(`查無資料`)

        }else{
            $('.no_value').css('display', 'none')
        }

        
    })


    $('.opt').click(function () {
        let p = $(this).find('p').first();
        let text = p.text()

        let key = $(this).data('key')
        let dollImg = $('.doll').find('#' + key)

        if(text == '已裝備'){
            p.text('')
            dollImg.css('opacity', 0)
        }else{
            p.text('已裝備')
            dollImg.css('opacity', 1)
        }


});


})
