/*
 * @Author: Alan.zheng 
 * @Date: 2019-03-07 18:36:41 
 * @Last Modified by: Alan.zheng
 * @Last Modified time: 2019-03-15 10:14:33
 */
$(function () {
    $('.bd_input_submit').on('click', function (e) {
      var $keywords= $('.bd_input_text').val();
        // 搜索关键字
        if ( $keywords.trim().length > 0) {
            zhuge.track('搜索', {
                '类别': $(".bd_input_select option:selected").text(),
                '关键字': $keywords
            });
        }

    });
    $("body").on("click", "[data-io]", function (e) {
        // data-io为事件名，data-prop为属性值以,分割
        e.preventDefault();
        var $this = $(this),
            $title = $this.data("io"),
            $propArray = $this.data("prop") ? $this.data("prop").split(',') : [],
            $prop = {};
        for (var num in $propArray) {
            if (num % 2 == 1) {
                // 偶数索引为key,奇数索引为值
                $prop[$propArray[num - 1]] = $propArray[num];
            }
        }
        $prop['文本'] = $this.text().replace(/(^\s*)|(\s*$)/g, "").replace(/[\r\n]/g, ""); // 统一添加文本值

        zhuge.track($title, $prop, LinksToJump(e.currentTarget));

    });
});

function LinksToJump($e) {
    // 是否为新窗口打开的链接
    if ($e.localName === 'a' && $e.href) {
        if ($e.getAttribute('target') === '_blank') {
            window.open($e.href, '_blank');
        } else {
            location.href = $e.href;
        }
    }
}