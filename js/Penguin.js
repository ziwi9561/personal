/*

要製作一個網頁寵物，並且寵物會追著滑鼠跑，y軸距離不動
1.找到滑鼠的x軸
2.企鵝X軸與滑鼠的相減，計算出距離
3.讓企鵝能夠追著滑鼠跑

之後處理
1.當滑鼠到了企鵝反面時，企鵝垂直旋轉

*/

$(function () {

    // let pet = {
    //     x = 0
    //     y = 0
    // }

    // let petX = mouseX - pet.x

    //1
    document.addEventListener('movemove', e => {
        mouseX = e.clientX

        console.log(mouseX)
    })

    
})







