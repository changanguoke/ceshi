$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
    });
});

$(document).ready(function() {
    // 处理第四屏的垂直居中
    function centerFourthScreen() {
        const fourthSection = $('.section').eq(3); // 获取第四屏
        const content = fourthSection.find('.ly-box82');
        const screenHeight = $(window).height();
        const contentHeight = content.outerHeight();
        
        // 计算并设置上边距以实现垂直居中
        const marginTop = (screenHeight - contentHeight) / 2;
        content.css({
            'margin-top': marginTop + 'px',
            'position': 'relative'
        });
    }

    // 页面加载和窗口大小改变时调用
    centerFourthScreen();
    $(window).on('resize', centerFourthScreen);
});

//loadAudioFile('../music/1.mp3');
