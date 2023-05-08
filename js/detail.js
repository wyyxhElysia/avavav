//小图片前进后退效果==================
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var ul = document.querySelector(".spec-items ul");
var lis = document.querySelectorAll(".spec-items ul li");

prev.onclick = function () {
  ul.style.left = "0";
};
next.onclick = function () {
  ul.style.left = "-116px";
};
//===========
var img = document.querySelector(".img1");
var imgs = document.querySelectorAll(".spec-items img");
console.log(imgs);
//显示中图效果
for (var i = 0; i < lis.length; i++) {
  lis[i].onmouseover = function () {
    for (var j = 0; j < lis.length; j++) {
      lis[j].className = "";
    }
    this.className = "img-hover";
    img.src = imgs[i].src;
  };
}
