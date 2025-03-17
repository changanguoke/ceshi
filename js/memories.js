$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
    });
});
//loadAudioFile('../music/1.mp3');

function playVideo(imgElement) {
  // 获取视频URL
  const videoUrl = imgElement.getAttribute('data-video');
  
  // 创建视频元素
  const video = document.createElement('video');
  video.src = videoUrl;
  video.controls = true;
  video.style.width = '100%';
  video.style.height = '100%';
  
  // 替换图片为视频
  const parent = imgElement.parentElement;
  parent.replaceChild(video, imgElement);
  
  // 自动播放
  video.play();
  
  // 视频播放结束后恢复图片
  video.onended = function() {
    parent.replaceChild(imgElement, video);
  }
}

// 图片点击预览
document.addEventListener('DOMContentLoaded', function() {
  const preview = document.getElementById('imagePreview');
  const previewImg = document.getElementById('previewImage');
  
  // 为所有带ly-img类的图片添加点击事件
  document.querySelectorAll('[class^="ly-img"]').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      previewImg.src = this.src;
      preview.style.display = 'block';
    });
  });

  // 点击预览区域关闭预览
  preview.addEventListener('click', function() {
    preview.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    
    // 为所有图片添加点击事件
    document.querySelectorAll('.ly-img11, .ly-img21, .ly-img22, .ly-img23, .ly-img31').forEach(img => {
        img.addEventListener('click', function(e) {
            if(!this.dataset.video) { // 只处理非视频的图片
                previewImage.src = this.src;
                imagePreview.style.display = 'flex';
                e.stopPropagation();
            }
        });
    });
    
    // 点击预览区域关闭预览
    imagePreview.addEventListener('click', function() {
        this.style.display = 'none';
    });
});
