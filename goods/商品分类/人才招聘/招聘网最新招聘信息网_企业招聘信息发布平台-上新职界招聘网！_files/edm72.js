$(function () {


  // 企业专场直播
  var mySwiper = new Swiper('.edm72-lived_A_a', {
    // 往期视频 swiper
    autoplay: 5000,
    slidesPerGroup: 5,
    slidesPerView: 4,
    spaceBetween: 16,
    slidesPerColumn: 2,
    pagination: '.edm72-lived-pagination_A_a',
    breakpoints: {
      //当宽度小于等于768
      768: {
        slidesPerView: 2,
        slidesPerGroup: 4,
        slidesPerColumn: 2,
      }
    }

  });
  var mySwiper = new Swiper('.edm72-lived_A_b', {
    // 往期视频 swiper
    autoplay: 5000,
    slidesPerGroup: 5,
    slidesPerView: 4,
    spaceBetween: 16,
    slidesPerColumn: 2,
    pagination: '.edm72-lived-pagination_A_b',
    breakpoints: {
      //当宽度小于等于768
      768: {
        slidesPerView: 2,
        slidesPerGroup: 4,
        slidesPerColumn: 2,
      }
    }

  });

  var mySwiper = new Swiper('.edm72-lived_aaa', {
    // 往期视频 swiper
    // autoplay: 5000,
    slidesPerGroup: 4,
    slidesPerView: 4,
    spaceBetween: 8,
    pagination: '.edm72-lived-pagination_aaa',
    breakpoints: {
      //当宽度小于等于768
      768: {
        slidesPerView: 2,//一行显示3个
        slidesPerGroup: 3,
        slidesPerColumn: 2,//显示2行
      }
    }

  });
  var videolist = new Swiper('.video_center', {
    // 新闻推荐
    autoplay: 5000,
    speed: 1000,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplayDisableOnInteraction: false,
  });


})
// function loadJs (file) {

//   var head = $("head").remove("script[role='reload']");

//   $("<scri" + "pt>" + "</scr" + "ipt>").attr({
//     role: 'reload', src: file, type: 'text/javascript'
//   }).appendTo(head);
// }