var posts=["ghsc_ovo_0721/WEB-2025-SWPU-NSSCTF-秋季招新入门训练赛/","ghsc_ovo_0721/NewStar2025-Web-1月尾會再更新/","ghsc_ovo_0721/MSF的使用/","ghsc_ovo_0721/OpenSSH的使用/","ghsc_ovo_0721/NewStar2023-Canary/","ghsc_ovo_0721/Frida使用/","ghsc_ovo_0721/dirsearch使用/","ghsc_ovo_0721/ROPgadget 使用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };