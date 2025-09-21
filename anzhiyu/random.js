var posts=["2025/09/19/hello-world/","2025/09/21/如何发布文章到hexo博客上-含插入图片的方法/","2025/09/21/(WEB)2025 SWPU-NSSCTF 秋季招新入门训练赛/(WEB)2025 SWPU-NSSCTF 秋季招新入门训练赛/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };