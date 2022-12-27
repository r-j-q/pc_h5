
$(function () {
  var ondition = $(".brand_conditions_Aa .span").text();
  // console.log(ondition);
  var ondition_label = $(".brand_conditions_Aa label");
  var brand_selectd_a1 = $(".brand_selectd_a");
  if (ondition.length == "") {
    ondition_label.css("display", "none");
    brand_selectd_a1.css("display", "block")
  } else {
    brand_selectd_a1.css("display", "none")
  }

  $(".box_A").on('mouseenter ', function () {

    $(this).eq($("#zu_Y").index()).addClass('asb_a')
  })

  //点击品牌选择滚动事件
  var one_no = $(".single .name ").eq(0);
  one_non = one_no.addClass('active');

  // 品牌中心的查询机型的input筛选
  $('.nav_bran').on('click', function () {
    $(".su_nav_A").show();
  });
  $('.su_nav_A').on('mouseleave ', function () {
    $(this).hide();
    $(".brand_list_AB").hide()
  });

});

//品牌中心标签筛选--点击事件
$('.jqr_txte .hots-icon').on('click', function () {
  var status = $(this).attr('data-status');//获取状态值
  tagShow(status);
});

//品牌中心标签筛选--隐藏显示
function tagShow (status) {
  $("." + status + "_div-a").toggle(); //隐藏查看应用产品和图
  $("." + status + "_div").toggleClass("Filter_sa");//去或加，筛选样式的
  $("." + status).toggleClass("icon-guanbi_o");//切换icon
  $("." + status).parent().parent().toggleClass("yiny");//去点父级的阴影
}


//点击品牌选择滚动事件
function getScroll (num) {
  var self = $('#brand_' + num);
  navT = self.text();
  // alert(navT);
  list = self.closest('.brand_left').find('.brand_list');
  self.addClass('active').siblings().removeClass('active');
  list.animate({
    scrollTop: list.find('.name:contains(' + navT + ')').prop('offsetTop')
  }, 'fast');
}
//ajax 提交获取机型
function ajaxModel (bid) {
  var type = $('#is_selects').val();
  var list_cont_aB = $("#brand_list .list_cont_aB li .ASB_aC")
  var list = $('#brand_' + bid);
  list_cont_aB.removeClass("TAB_AB");
  list.addClass("TAB_AB");
  $(".brand_list_AB").show().eq($('.brand_list .list_cont_aB .omg').index(list_cont_aB)).show();
  $.ajax({
    url: "/brand/ajaxGetUnitType",
    data: { bid: bid, type: type },
    type: "POST",
    dataType: "json",
    success: function (data) {
      if (data.err == 0) {
        $('.namess').remove();
        $('.brand_model').append(data.data);
      } else {
        alert(data.err)
      }
    }
  });
}
//翻页
function getPage (type, status) {

  var str = $('#' + type + '_page').contents().filter(function (index, content,) {
    return content.nodeType === 3;
  }).text();
  var a_page = str.replace(/\//g, '');//总页数
  var c_page = $('#' + type + '_page b').text();//当前页
  if (status == 'up') {
    if (c_page == 1) {
      return false;
    }
    page = parseInt(c_page) - 1;
  } else if (status == 'down') {
    if (parseInt(a_page - c_page) == 0) {
      return false;
    }
    page = parseInt(c_page) + 1;
  }
  //最后一页 不可以点击
  if (parseInt(a_page) < parseInt(c_page)) {
    return false;
  }

  $('.' + type + '_brand').css("display", "block"); //loading
  $('#' + type + '_page b').text(page);
  var tid = $('.' + type + '_page').attr('tag_data');
  $.ajax({
    url: "/brand/ajaxBrandInfo",
    data: { page: page, type: type, tid: tid },
    type: "POST",
    dataType: "json",
    success: function (data) {
      if (data.err == 0) {
        $('.' + type + '_brand').css("display", "none");

        $('#' + type + '_brand').empty();
        $('#' + type + '_page').html('<b>' + page + '</b>/' + data.data.page);
        $('#' + type + '_brand').append(data.data.html);
        $('#' + type + '_count').text(data.data.count);
      } else {
        alert(data.err)
      }
    }
  });
}
function getBrand () {
  //获取被选中的option标签
  var type = $('#is_selects  option:selected').val();
  if (type == '') {
    return false;
  }
  $.ajax({
    url: "/brand/ajaxGetBrand",
    data: { type: type },
    type: "POST",
    dataType: "json",
    success: function (data) {
      if (data.err == 0) {
        $('.name').remove();
        $('.names').remove();
        $('#brand_alphabet').append(data.data.alphabet);
        $('#brand_info').append(data.data.brand_info);
      } else {
        alert(data.data);
      }
    }
  });
}

//选择标签
$('.tagInfo a').on('click', function () {

  var tid = $(this).parent().attr('tag_data');
  var type = $(this).parent().attr('tag_type');
  //loading
  $('.' + type + '_brand').css("display", "block");

  $('.' + type + '_div span a').removeClass('bang_A');
  $(this).addClass('bang_A');
  $('.' + type + '_page').attr('tag_data', tid);
  $.ajax({
    url: "/brand/ajaxBrandInfo",
    data: { tid: tid, type: type },
    type: "POST",
    dataType: "json",
    success: function (data) {

      if (data.err == 0) {
        $('.' + type + '_brand').hide();
        $('#' + type + '_brand').empty();
        $('#' + type + '_page').html('<b>1</b>/' + data.data.page);
        $('#' + type + '_brand').append(data.data.html);
        $('#' + type + '_count').text(data.data.count);
      } else {
        alert(data.data);

      }
    }
  });

});





