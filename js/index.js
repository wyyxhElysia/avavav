//模糊查询===============================================================
let keyword = document.querySelector(".keyword"); //获取输入框
let searchlist = document.querySelector(".search-list");
// 定义数组 存搜索内容
let searchArr = ["小米手机", "苹果手机", "小米电视", "小米平板", "苹果12"];
//绑定内容改变事件
keyword.oninput = function () {
  searchlist.innerHTML = "";
  for (let i = 0; i < searchArr.length; i++) {
    if (searchArr[i].indexOf(keyword.value) != -1) {
      searchlist.innerHTML += "<p>" + searchArr[i] + "</p>";
      searchlist.style.display = "block";
    }
  }
};
// 轮播图的切换========================================================
let img = document.querySelector(".img");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slide = document.querySelector(".slide");
let lis = document.querySelectorAll(".banner-btn li");
let imgArr = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];
let count = 0;
// 切换图片路径
function cutimg() {
  img.src = "./img/" + imgArr[count];
  for (let i = 0; i < lis.length; i++) {
    lis[i].className = "";
  }
  lis[count].className = "active";
}
// 设置定时器
let timer = setInterval(function () {
  count++;
  if (count > imgArr.length - 1) {
    count = 0;
  }
  cutimg();
}, 4000);
// 点击下一张图片
next.onclick = function () {
  count++;
  if (count > imgArr.length - 1) {
    count = 0;
  }
  cutimg();
};
// 点击上一张
prev.onclick = function () {
  count--;
  if (count < 0) {
    count = imgArr.length - 1;
  }
  cutimg();
};
// 鼠标移入停止，移出启动
slide.onmouseover = function () {
  clearInterval(timer);
};
slide.onmouseout = function () {
  let timer = setInterval(function () {
    count++;
    if (count > imgArr.length - 1) {
      count = 0;
    }
    cutimg();
  }, 4000);
};
// li绑定事件
for (let i = 0; i < lis.length; i++) {
  lis[i].onclick = () => {
    count = i;
    cutimg();
  };
}
// 楼层定位切换=====================================================
let header = document.querySelector(".header");
let banner = document.querySelector(".banner");
let elevator = document.querySelector(".elevator");
// 楼层滚动文字变色==========================================
let items = document.querySelectorAll(".content .item");
let elevatorA = document.querySelectorAll(".elevator a");
let elevatorArr = [];
let base = header.offsetHeight + banner.offsetHeight;
for (let i = 0; i < items.length; i++) {
  base = base + items[i].offsetHeight;
  elevatorArr.push(base);
}

function clearcolor() {
  for (let i = 0; i < elevatorA.length; i++) {
    elevatorA[i].style.color = "";
  }
}
let search = document.querySelector(".search");
let searchM = document.querySelector(".search-m");
let form = document.querySelector(".form");
let searchlogo = document.querySelector(".search_logo");
// 获取滚动条滚了多少
document.onscroll = function () {
  let top = document.documentElement.scrollTop || document.body.scrollTop;
  let headerheight = header.offsetHeight;
  let bannerheight = banner.offsetHeight;
//   滚动到一定程度，修改属性
  if (top >= headerheight + bannerheight) {
    elevator.className = "elevator elevator-fix";
    search.className = "search search-fix";
    searchM.style.height = "50px";
    form.style.top = "8px";
    searchlogo.style.display = "block";
  } else {
    elevator.className = "elevator";
    search.className = "search";
    searchM.style.height = "60px";
    form.style.top = "25px";
    searchlogo.style.display = "none";
  }

  //   切换楼层颜色===============
  if (top < header.offsetHeight + banner.offsetHeight) {
    clearcolor();
  } else if (
    top >= header.offsetHeight + banner.offsetHeight &&
    top < elevatorArr[0]
  ) {
    clearcolor();
    elevatorA[0].style.color = "red";
  } else if (top >= elevatorArr[0] && top < elevatorArr[1]) {
    clearcolor();
    elevatorA[1].style.color = "red";
  } else if (top >= elevatorArr[1] && top < elevatorArr[2]) {
    clearcolor();
    elevatorA[2].style.color = "red";
  } else if (top >= elevatorArr[2]) {
    clearcolor();
    elevatorA[3].style.color = "red";
  }
};
