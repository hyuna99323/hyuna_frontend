// page 이동 ---------------------------------------------
// mainpage
// 베르첼 배포시 url 바꾸기
function home(){
  let url = "http://127.0.0.1:5500/html/01_ediya_main.html";
  window.location = url;
}

// loginpage
function login(){
  let url = "http://127.0.0.1:5502/html/02_ediya_login.html";
  window.location = url;
  }

// aboutpage
function about(){
  let url = "http://127.0.0.1:5502/html/03_ediya_about.html";
  window.location = url;
  }

// SNS Facebook
function sns_F(){
  window.open("https://www.facebook.com/iEDIYA","_blank");
}

// SNS Instargram
function sns_I(){
  window.open("https://www.instagram.com/ediya.coffee/","_blank");
}

// SNS Naver blog
function sns_N(){
  window.open("https://blog.naver.com/ediya-coffee","_blank");
}

// SNS Youtube
function sns_Y(){
  window.open("https://youtube.com/c/%EC%9D%B4%EB%94%94%EC%95%BC%EC%BB%A4%ED%94%BCediyacoffee","_blank");
}