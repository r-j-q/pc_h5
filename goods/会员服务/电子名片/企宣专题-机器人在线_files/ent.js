       ;

$(function(){
    //    var职业教育 
        $(".cmcc_aa").mouseover(function(){
            $(".nav_b").show();  
        })
        $(".cmcc_aa").mouseout(function(){
            $(".nav_b").hide();
        })
    
        // 生意通
        $(".cmcc_ab").mouseover(function(){
            $(".nav_c").show();  
            $(".nav_v").show();  
        })
        $(".cmcc_ab").mouseout(function(){
            $(".nav_c ").hide();
            $(".nav_v ").hide();
        })
        // 数媒营销
        $(".cmcc_ad").mouseover(function(){
            $(".nav_d").show();  
            $(".nav_v_d").show();  
        })
        $(".cmcc_ad").mouseout(function(){
            $(".nav_d ").hide();
            $(".nav_v_d ").hide();
        })
        // 系统销售
        $(".cmcc_ae").mouseover(function(){
            $(".nav_e").show();  
            $(".nav_v_e").show();  
        })
        $(".cmcc_ae").mouseout(function(){
            $(".nav_e ").hide();
            $(".nav_v_e").hide();
        })
        // 供需对接
        $(".cmcc_af").mouseover(function(){
            $(".nav_f").show();  
            $(".nav_v_f").show();  
        })
        $(".cmcc_af").mouseout(function(){
            $(".nav_f").hide();
            $(".nav_v_f").hide();
        })
        // 点击去掉导航的背景
        $(".nav_a a").on("click",function(){
            $(this).css("background","none")
        }) ;



        $(".widh_a").mouseover(function(){
            $(this).css({ "background":"#3e6bf2","color":"#fff"})
            $(".widh_a_1 ").eq($(this).index()).css({ "color":"#fff"})
            $(".ent_tie_A_1").eq($(this).index()).css("color","#fff");
             $(".ent_tie_c").eq($(this).index()).css("height","210px")
        })
        $(".widh_a").mouseout(function(){
            $(this).css("background-color","#f5f5f5")
            $(".widh_a_1 ").eq($(this).index()).css({ "color":""})
        $(".ent_tie_A_1").eq($(this).index()).css({ "color":""});
        $(".ent_tie_c").eq($(this).index()).css("height","0")
        });


        $(".btn_as").click(function(){
           $(".ASP_a").toggle();
        })
        


       

        
    })

    /*
 * @Author: Alan.zheng 
 * @Date: 2018-05-03 10:19:50 
 * @Last Modified by: Alan.zheng
 * @Last Modified time: 2020-07-13 17:15:51
 */

$('.clasbox_right').not('.classi_hot_right').each(function () {
    var $this = $(this);
    var length = $this.children('a').length;
    
    if (length > 9 && $this.not('clasbox_pinpai')) {
       
        $this.append(
            '<span class="hidden-xs clasbox_open"><b class="text">更多</b> <i class="iconfont icon-xiangxia ani"></i> </span>');
    }
});
$("body").on('click', '.clasbox_open', function () {
    // alert(13135)
    var $this = $(this);
    $this.toggleClass('clasbox_close').parents('.clasbox_right').toggleClass('cur');
   
    if ($this.hasClass('clasbox_close')) {
        
        $this.find('.text').html('收起');
        
    } else {
        $this.find('.text').html('更多');
    }
});

// $('.classi_list_more').on('click',function(){
//         $(this).toggleClass('cur');
//         $('.classi_list_more_box').toggle();
//     });



$('.shu_A').last().css('display', 'none');
//ie8以下 ，提示更新浏览器
if (navigator.appName == "Microsoft Internet Explorer") {
    var versionIE = navigator.appVersion.split(";")[1].replace(/[ ]/g, "");
    if (versionIE == "MSIE8.0" || versionIE == "MSIE7.0" || versionIE == "MSIE6.0" || versionIE == "MSIE5.0") {
        alert('您正在使用' + versionIE + '浏览器,为了保证您能有更好的访问效果,我们建议您使用360浏览器（极速模式）、Chrome浏览器、火狐Firefox浏览器或者IE8以上版本浏览器！');
    }
}
//百度统计+百度商桥
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?19ae894f01d1e10994813d3c94c65df9";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
//百度站长推送
(function () {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
// 百度事件统计
$("[data-track]").on("click", function () {
    var category = $(this).data("track");
    var opt_label = $(this).data("label");
    window._hmt && window._hmt.push(['_trackEvent', category, 'click', opt_label]);
});

$.zqTab = function (_tab, _box, _hover, _shijian) {
    //选项卡插件 _tab触发div _box执行div _hover当前选中class _shijian点击，滑动事件     
    var index; //索引值
    $(_tab).eq(0).addClass(_hover); //第一个导航高亮显示 
    $(_box).hide().eq(0).show(); //第一个内容显示
    $(_tab).bind(_shijian, function () {
        _index = $(_tab).index(this); //获取当前点击的索引值
        $(this).addClass(_hover).siblings().removeClass(_hover); //当前点击高亮显示
        $(_box).eq(_index).show().siblings().hide(); //通过索引值让对应的选项内容区显示
    });
};
$.zqTab_A = function (_tab, _box, _hover, _shijian) {
    //选项卡插件 _tab触发div _box执行div _hover当前选中class _shijian点击，滑动事件     
    var index; //索引值
    $(_tab).eq(0).addClass(_hover); //第一个导航高亮显示 
    $(_box).hide().eq(0).show(); //第一个内容显示
    $(_tab).bind(_shijian, function () {
        _index = $(_tab).index(this); //获取当前点击的索引值
        $(this).addClass(_hover).siblings().removeClass(_hover); //当前点击高亮显示
        $(_box).eq(_index).show().siblings().remove(); //通过索引值让对应的选项内容区显示
    });
};
// $.zqTab("#Tab>li","#page>.box","li-hover","click");//调用方法
// $.zqTab("#Tab2>li","#page2>.box","li-hover","mouseenter");//调用方法
// $.zqTab(".navbar-nav_A li", ".top_op .classification_fix_A ", "sad", "mouseenter");


//ajax 封装
var DEBUG = true;
var ST = {
    imgUrl: 'https://image.imrobotic.com/',
    myreg: /^1[3|4|5|6|7|8|9]\d{9}$/,
    request: function (action, sendObj, fb, disableTip, mockData) {
        if (mockData && DEBUG) {
            // 模拟数据调试
            setTimeout(function () {
                if (!mockData['err']) {
                    fb(0, mockData['result']);
                } else {
                    fb(mockData['err'], mockData['msg']);
                }
            }, 500);
        } else {
            var reAjax = $.ajax({
                url: action,
                type: "POST",
                data: sendObj,
                dataType: "json",
                beforeSend: function () {
                    //ajax loading  
                    if (!disableTip) {
                        ajxaLayerLoad = layer.load(0, {
                            time: 20 * 1000
                        });
                    }
                }
            });
            reAjax.then(function (data, status, xhr) {
                // console.info("[ACK]", JSON.stringify(data));
                if (!disableTip) {
                    layer.close(ajxaLayerLoad);
                }
                if (!data['err']) {
                    fb(0, data);
                } else {
                    fb(data['err'], data);
                }
            }, function (xhr, error, exception) {
                if (fb) {
                    fb(-1, error);
                }
            });
        }
    },
    lazyload: function () {
        //图片懒加载
        $("img[data-src]").lazyload({
            threshold: 100,
            skip_invisible: false, 
            data_attribute: "src",
            placeholder: "http://image.imrobotic.com/jiqiren/images/grey.png", //加载图片前的占位图片
            effect: "fadeIn" //加载图片使用的效果(淡入)
        });
    },
    // aniQQFun: function () {
    //     $('.menu_leftQQ').toggleClass('aniQQ');
    // },

    infoQh: function ($info) {
    var info_index = 0;
    $($info).parent().find('.hyh').on('click', function () {
            info_index++
            if (info_index >= $($info + ' li').length) {
                info_index = 0;
            }
            var $curLi =  $($info).find('li').eq(info_index);
            $curLi.trigger('mouseenter');
            var $href=  $curLi.find('a').attr('href');
            $($info).parent().find('.more').attr('href',$href);
        })
    },
    GoToLogin: function ($title) {
        var callbackUrl = window.location.href;
        layer.confirm($title, {
            icon: 3,
            title: '确定'
        }, function () {
            window.location.href = 'http://user.imrobotic.com/login?redirect_uri=' + callbackUrl;
        });
    },
    isMobile: function () {
        return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    },
    setCookie: function (cname, cvalue, exdays, cdomain) {
        var d = new Date();
        cdomain = cdomain || location.hostname;
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/;domain=" + cdomain + ";";
    },
    getCookie: function (name) {
        var getArr, getReg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (getArr = document.cookie.match(getReg)) {
            var getValue = unescape(getArr[2])
            return getValue;
        } else {
            return false;
        }
    },
    saveToLocal: function (id, key, value) {
        var imrobotic = window.localStorage.__imrobotic__;
        if (!imrobotic) {
            // 第一次存储
            imrobotic = {};
            imrobotic[id] = {};
        } else {
            // 已经有存储，localStorage存储的是字符串，用JSON.parse()转成json对象
            imrobotic = JSON.parse(imrobotic);
            if (!imrobotic[id]) {
                imrobotic[id] = {};
            }
        }
        imrobotic[id][key] = value;
        window.localStorage.__imrobotic__ = JSON.stringify(imrobotic);
    },
    loadFromLocal: function (id, key, def) {
        // 取localStorage值
        var imrobotic = window.localStorage.__imrobotic__;
        if (!imrobotic) {
            // 如果没有localStorage，则返回默认值
            return def;
        }
        imrobotic = JSON.parse(imrobotic)[id];
        if (!imrobotic) {
            return def;
        }
        var ret = imrobotic[key];
        return ret || def;
    },
    getQueryString:function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
    debounce:function (fn, wait) {
        // 防抖
        var timeout = null;
        return function () {
            if (timeout !== null)
                clearTimeout(timeout);
            timeout = setTimeout(fn, wait);
        }
    },
    throttle:function (func, delay) {
        // 节流
        var timer = null;
        var startTime = Date.now();
        return function () {
            var curTime = Date.now();
            var remaining = delay - (curTime - startTime);
            var context = this;
            var args = arguments;
            clearTimeout(timer);
            if (remaining <= 0) {
                func.apply(context, args);
                startTime = Date.now();
            } else {
                timer = setTimeout(func, remaining);
            }
        }
    },
    getGuestBook: function () {
        // 留言
        layer.open({
            type: 2,
            title: '我要留言',
            area: ['600px', '600px'],
            content: '/about/guestbook', 
            success: function (dom, index) {
            if (ST.isMobile()) {
                    //手机端全屏
                    layer.full(index);
                    $(dom).find('.layui-layer-content').height('100%');
                }
            }
        });
    },

    pjaxInfo:function (info, url, container, i) {
        var htmlArr=[];
        htmlArr[i] = [];
        $(info + ' li').on('mouseenter', function () {
            $(this).addClass('cur').siblings().removeClass('cur');
            var $id = $(this).data('href');
            if (!htmlArr[i][$id]) {
                $.ajax({
                    url: url + $id,
                    dataType: 'html',
                    type: 'get',
                    success: function (data) {
                        $(container).html(data);
                        htmlArr[i][$id] = data;
                    }
                })
            } else {
                
                $(container).html(htmlArr[i][$id]);
            }
        });

        
    },
    toCollect: function ($this) {
        var $data = {
            type: $this.data('type'),
            id: $this.data('id'),
            cancel: $this.data('cancel')
        };
        var defer = $.Deferred();
        ST.request('/user/collect', $data, function (err, data) {
            if (!err) {
                if ($data.cancel !== 0) {
                    $this.data('cancel', 0).find('.text').text('收藏');
                    defer.resolve('取消收藏');
                } else {
                    $this.data('cancel', 1).find('.text').text('已收藏');
                    layer.msg('收藏成功', {
                        icon: 6
                    });
                    defer.resolve('收藏成功');
                }
                $this.find('.iconfont').toggleClass('cur');
            } else {
                layer.msg('请求失败');
                defer.reject(0);
            }
        });
        return defer.promise();

    },
    login: function (needform) {
        var _needform = needform ? '?needform=' + encodeURI(needform) : '';
        var $width = this.isMobile() ? '100%' : '500px';
        var $height = this.isMobile() ? '100%' : '410px';
        layer.open({
            type: 2,
            title: '快捷登录',
            area: [$width, $height],
            content: '/index/smsLogin' + _needform,
            success: function (dom, index) {
               /* zhuge.track('快捷登录-弹出窗', {
                    '来源入口':location.href,
                });*/
            }, cancel: function () {
              /*  zhuge.track('快捷登录-关闭弹出窗', {
                    '来源入口': location.href,
                });*/
            }
        });
    }
};
var imToken = {
    authByCookie: function () {
        var token = ST.getCookie('token'); // 获取cookie
        if (token) {
            return JSON.parse(this.jwt.decode(token));
        }
    },
    jwt: {
        // jwt解码
        decode: function (sJWS) {
            var a = sJWS.split(".");
            var uHeader = b64utos(a[0]);
            var uClaim = b64utos(a[1]);

            var pHeader = KJUR.jws.JWS.readSafeJSONString(uHeader);
            var pClaim = KJUR.jws.JWS.readSafeJSONString(uClaim);

            var sHeader = JSON.stringify(pHeader, null, "  ");
            var sClaim = JSON.stringify(pClaim, null, "  ");

            return sClaim;
        }
    }
}
/*REM begin*/
ST.pjaxInfo('.type_topinfo', '/index/getLink?type=', '.top_op', 1);

// 128 px（ 盒子） / 640 px(设计稿) * 10 == 2 rem;
! function (e) {
    function t() {
        var t = n.clientWidth,
            r = "}";
        !navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && t > 1024 && (t = 640, r = ";font-size:12px;}"),
            e.rem = t / 10,
            /ZTE U930_TD/.test(navigator.userAgent) && (e.rem = 1.13 * e.rem),
            /Android\s+4\.4\.4;\s+M351\s/.test(navigator.userAgent) && (e.rem = e.rem / 1.05),
            i.innerHTML = t <= 414 ? "html{font-size:" + e.rem + "px!important;}body{font-size:" + 12 * (t / 320) + "px" + r : "html{font-size:40px!important;}body{font-size:14px"
    }
    var n = document.documentElement,
        i = document.createElement("style");
    n.firstElementChild.appendChild(i),
        e.addEventListener("resize", function () {
            t()
        }, !1),
        e.addEventListener("pageshow", function (e) {
            e.persisted && t()
        }, !1),
        t()
}(window);

/*REM end*/

/*REM end*/
$(function () {




    $("#qcode").hover(function () {
        //手机版微信二维码显示隐藏
        $(".qrcode").fadeToggle("fast");
    });

    $('video').on('contextmenu', function () {
        // 禁用video右键
        return false;
    });
    // var intQQ = self.setInterval("ST.aniQQFun()", 1000);
    if ($("img[data-src]").length > 0) {
        ST.lazyload(); //图片懒加载
    }
    $('#getGuestBook').on('click', function (e) {
        // 留言板
        e.preventDefault();
        ST.getGuestBook();
    });
    $("#go_top").click(function () {
        // 返回顶部
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
    /* nav菜单栏点击切换事件/在企宣专题没有用的  */
    // $('.navbar-toggle').on('click', function () {
    //     $('.navbar-collapse').addClass('cur').show();
    //     $(".navbar-nav").animate({
    //         right: '0'
    //     });
    // });
    // $('.navbar-collapse').on('click', function () {
    //     $(".navbar-nav").animate({
    //         right: '-100%'
    //     });
    //     $(this).hide().removeClass('cur');
    // });
    // $(".navbar-nav").on(function (e) {
    //     e.stopPropagation();
    // });
    // 确定能使用pjax时
    if ($.support.pjax) {
        var pjaxLoad=null;
        $(document).on('pjax:send', function () {
            pjaxLoad = layer.load();
        });
        $(document).on('pjax:complete', function () {
            layer.close(pjaxLoad);
        });
    }
    

    
    $('.classi_list_more').on('click',function(){
        $(this).toggleClass('cur');
        $('.classi_list_more_box').toggle();
    });
   

    $('.navbar-nav_a').bind('click',function(){
        $(this).toggleClass('cur');
        $('.navbar-nav_A').toggle();
        $('.top_op').css("display","none");
        
    });
     if($(".type_topinfo").css("display")=="block" ){
        $('.navbar-nav_a').unbind();
     }
  
     $('.type_topinfo li').bind("mouseenter",function(){
        $(this).addClass('active_A').siblings().removeClass('active_A');
    })
  
});





  
        

    