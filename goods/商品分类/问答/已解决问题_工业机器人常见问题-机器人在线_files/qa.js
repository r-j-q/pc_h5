$(function () {
  $(document).on("scrollstart", function () {
    alert("开始滚动！");
  });
  // 问答推荐  tab
  $(".inform_down  .gy_tit_a").click(function () {
    $(this).addClass("gy_tit_A").siblings().removeClass("gy_tit_A");
    $(".gy_tit_shwo").hide().eq($('.inform_down  .gy_tit_a').index($(this))).show();
  });
  // 资讯推荐  tab
  $(".inform_down  .gy_tit_b").click(function () {
    $(this).addClass("gy_tit_A").siblings().removeClass("gy_tit_A");
    $(".gy_tit_shwo_A").hide().eq($('.inform_down  .gy_tit_b').index($(this))).show();
  });

  // 判断手机
  if (is_mobile()) {
    $('.new-links-boxac').each(function () {
      var $this = $(this);
      var length = $this.children('a').length;
      if (length > 5 && $this.not('clasbox_pinpai')) {

        $this.append(
          '<span class=" clasbox_open"><b class="text">展开全部</b> <i class="iconfont icon-xiangxia ani"></i> </span>');
      }
    });
  } else {
    // 相关推荐 展开
    $('.new-links-boxac').each(function () {
      var $this = $(this);
      var length = $this.children('a').length;
      if (length > 34 && $this.not('clasbox_pinpai')) {

        $this.append(
          '<span class="hidden-xs clasbox_open"><b class="text">展开全部</b> <i class="iconfont icon-xiangxia ani"></i> </span>');
      }
    });
  };
  // 问答 移动端选择
  // 伪input移动端的选项
  $(".quot_sel_li").hide();
  $(".quot_li_ul").hide();
  $(".bd_input_select ").click(function () {
    $(".quot_sel_li").show();
    $(".bd_input_select  .quot_sel_text .icon-xiangxia").addClass("icon-xiangxia_A");
    // return false;
  });
  // 类型选择
  $(".quot_sel_li").click(function () {
    // $(this).addClass("li_ab").siblings().removeClass("li_ab");
    $(".quot_li_ul").hide().eq($('.quot_sel_li').index(this)).show();
  })
  // 选择子条件返回伪input值
  $(".quot_li_ul li").click(function () {
    $(".quot_sel_text span").text($(this).text());
    $(".quot_li_ul").hide();
    $(".quot_sel_li").hide();
    $(".bd_input_select  .quot_sel_text .icon-xiangxia").removeClass("icon-xiangxia_A");
  });
  //  获取移动端的滚动条/伪input移动端的选项隐藏 
  $(document).scroll(function () {
    var scrTop = $(window).scrollTop();
    if (scrTop > 1) {
      $(".quot_sel_li").hide();
      $(".bd_input_select  .quot_sel_text .icon-xiangxia").removeClass("icon-xiangxia_A");
    }
  });
  // 点击选择后将内容返给伪input中
  var win_A = document.location.href;
  var href_A = $(".quot_sel_li .quot_li_ul li a");
  for (var i = 0; i <= href_A.length - 1; i++) {
    if (href_A[i].href == win_A) {
      $(".quot_sel_text span").text(href_A[i].text);
    }
  }

});
// 上述所有展开加载的展开
$("body").on('click', '.clasbox_open', function () {
  // alert(13135)
  var $this = $(this);
  $this.toggleClass('clasbox_close').parents('.new-links-boxa').toggleClass('cur');

  if ($this.hasClass('clasbox_close')) {

    $this.find('.text').html('收起');

  } else {
    $this.find('.text').html('展开全部');
  }
});
// 判断手机端
function is_mobile () {
  var regex_match = /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;
  var u = navigator.userAgent;
  if (null == u) {
    return true;
  }
  var result = regex_match.exec(u);

  if (null == result) {
    return false
  } else {
    return true
  }

}