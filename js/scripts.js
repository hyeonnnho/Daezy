const slides = document.querySelectorAll(".visual-img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex = 0;

// 슬라이드 초기화
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

// 이전 슬라이드
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// 다음 슬라이드
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// 버튼 클릭 이벤트
prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

// 자동 슬라이드 전환
setInterval(nextSlide, 3000); // 3초마다 전환


function showAlert() {
  alert("(회장) 010-8854-5212 (부회장) 010-9733-3674 연락주시면 감사하겠습니다!");
}