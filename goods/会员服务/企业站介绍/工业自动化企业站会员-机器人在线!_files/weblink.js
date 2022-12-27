/*
 * @Author: Alan.zheng 
 * @Date: 2020-06-12 09:59:38 
 * @Last Modified by: Alan.zheng
 * @Last Modified time: 2020-07-13 10:52:50
 */
var $putong =
    '  <div class="text-center" style="padding-bottom:30px;">' +
    '<p class="f-18 mar_b15 mar_t20">你已是生意通普通会员</p>' +
    '<div class="c999  setp_html_bottom">' +
    '<p class=""> 是否需要升级成为生意通高级会员</p>' +
    '<p> <a href="/store/membership" class="f-12 weblink_blue">查看生意通高级会员特权</a> </p>' +
    ' <p class="mar_t10"><a data-io="访问生意通主页-点击升级为高级会员" href="javascript:;" class="btn red-btn  in_blck buyMeal" data-href="/jcs/buyBuopMeal/2">升级为高级会员</a></p>' +
    ' <a href="/store/index" target="_blank" class="btn btn-default  in_blck " >企业站管理后台</a>' +
    '</div></div>';
 var $gaojitong =
     '  <div class="text-center" style="padding-bottom:30px;">' +
     '<p class="f-18 mar_b15 mar_t20">你已是生意通高级会员</p>' +
     '<div class="c999  setp_html_bottom">' +
     '<p class=""> 生意通高级会员拥有企业站最高权限，请完善信息，让企业站传递更多价值。</p>' +
     ' <p class="mar_t10"><a href="/store/index" target="_blank" class="btn red-btn  in_blck " >企业站管理后台</a></p>' +
     '</div></div>';
$(".go_top").click(function () {
    // 返回顶部
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

$('body').on('click', '.buyMeal', function () {
   // zhuge.track('访问生意通主页-点击开通生意通会员');
    opening($(this).attr('data-href'));

});

function opening(data_href) {
    layer.closeAll();
    var user = imToken.authByCookie() || '';
    if (user.user_id) {
        ST.request(data_href, {}, function (error, data) {
            if (data.err == 2) {
                layer.confirm(data.msg, {
                    icon: 3,
                    title: '确认框'
                }, function (index) {
                    ST.request(data.redirect, {}, function (error, data) {
                        if (!data.err) {
                            window.location.href = data.redirect;
                            return false;
                        }
                    });
                });
            } else if (data.err == 3) {
                window.location.href = data.redirect;
                return false;
            } else if (data.msg) {
                layer.alert(data.msg, function () {
                    if (data.redirect != undefined) {
                        window.location.href = data.redirect;
                    }
                });
            }
        });
    } else {
        // ST.redirect = data_href;
        ST.login();
    }
}