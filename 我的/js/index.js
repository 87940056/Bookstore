$(function(){
    //阅读提醒
    $('.btn').on('click',function(){
        $('.mask_ydtx').css({visibility:'visible'})
         return false;
    })
    $('.setting_btn').on('click',function(){
        $('.mask_ydtx').css({visibility:'hidden'})
    })


    //清除缓存
    $('.qchc_btn').on('click',function(){
        $('.mask_ychc').css({visibility:'visible'})
         return false;
    })
    $('.setting_btn').on('click',function(){
        $('.mask_ychc').css({visibility:'hidden'})
    })


    //我的头像
    $('.tx_btn').on('click',function(){
        $('.mask_tx').css({visibility:'visible'})
        return false;
    })
    $('.qx').on('click',function(){
        $('.mask_tx').css({visibility:'hidden'})
    })



    //我的性别
    $('.xb_btn').on('click',function(){
        $('.mask_xb').css({visibility:'visible'})
         return false;
    })
    $('.qx').on('click',function(){
        $('.mask_xb').css({visibility:'hidden'})
    })


    //版本信息
    $('.bbxx_btn').on('click',function(){
        $('.mask_bbxx').css({visibility:'visible'})
        return false;
    })
    $('body').on('click',function(){
        $('.mask_bbxx').css({visibility:'hidden'})
    })
})