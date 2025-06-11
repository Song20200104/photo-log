const photoData = [
    { img: "images/1.jpg", date: "2023-09-07", place: "서울상공", distance: 21.3 },
    { img: "images/2.jpg", date: "2021-06-06", place: "제주도 남원", distance: 445.1 },
    { img: "images/3.jpg", date: "2021-06-11", place: "제주도 (장소 미상)", distance: 440.2 },
    { img: "images/4.jpg", date: "2021-06-11", place: "제주도 (장소 미상)", distance: 440.2 },
    { img: "images/5.jpg", date: "2021-06-11", place: "제주도 (장소 미상)", distance: 440.2 },
    { img: "images/6.jpg", date: "2021-06-11", place: "제주도 (장소 미상)", distance: 440.2 },
    { img: "images/7.jpg", date: "2021-06-11", place: "제주도 (장소 미상)", distance: 440.2 },
    { img: "images/8.jpg", date: "2021-06-19", place: "제주도 남원", distance: 445.1 },
    { img: "images/9.jpg", date: "2021-06-19", place: "제주도 남원", distance: 445.1 },
    { img: "images/10.jpg", date: "2021-06-23", place: "제주도 (장소 미상)", distance: 440.2 },
    { img: "images/11.jpg", date: "2021-06-29", place: "경기도 가평", distance: 90.7 },
    { img: "images/12.jpg", date: "2021-09-11", place: "전라남도 목포", distance: 293.6 },
    { img: "images/13.jpg", date: "2021-09-11", place: "전라남도 목포", distance: 293.6 },
    { img: "images/14.jpg", date: "2021-09-12", place: "전라남도 목포", distance: 293.6 },
    { img: "images/15.jpg", date: "2022-01-03", place: "강원도 강릉", distance: 189.2 },
    { img: "images/16.jpg", date: "2022-01-03", place: "강원도 강릉", distance: 189.2 },
    { img: "images/17.jpg", date: "2022-01-04", place: "강원도 강릉", distance: 189.2 },
    { img: "images/18.jpg", date: "2022-07-16", place: "인천 강화도", distance: 32.5 },
    { img: "images/19.jpg", date: "2022-08-25", place: "인천 남동구 간석동", distance: 5.9 },
    { img: "images/20.jpg", date: "2023-02-10", place: "일본 교토", distance: 862.5 },
    { img: "images/21.jpg", date: "2023-03-31", place: "인천 남동구 만수동", distance: 6.7 },
    { img: "images/22.jpg", date: "2023-05-22", place: "인천 남동구 만수동", distance: 6.7 },
    { img: "images/23.jpg", date: "2023-08-09", place: "안산 대부도", distance: 39.2 },
    { img: "images/24.jpg", date: "2023-08-09", place: "안산 대부도", distance: 39.2 },
    { img: "images/25.jpg", date: "2023-08-09", place: "안산 대부도", distance: 39.2 },
    { img: "images/26.jpg", date: "2023-08-09", place: "안산 대부도", distance: 39.2 },
    { img: "images/27.jpg", date: "2023-08-09", place: "안산 대부도", distance: 39.2 },
    { img: "images/28.jpg", date: "2023-08-09", place: "안산 대부도", distance: 39.2 },
    { img: "images/29.jpg", date: "2023-08-09", place: "안산 대부도", distance: 39.2 },
    { img: "images/30.jpg", date: "2023-08-23", place: "인천 남동구 만수동", distance: 6.7 },
    { img: "images/31.jpg", date: "2023-08-30", place: "인천 남동구 만수동", distance: 6.7 },
    { img: "images/32.jpg", date: "2023-09-07", place: "제주상공", distance: 441.5 },
    { img: "images/33.jpg", date: "2023-09-08", place: "제주도 에코랜드", distance: 443.9 },
    { img: "images/34.jpg", date: "2023-09-08", place: "제주도 에코랜드", distance: 443.9 },
    { img: "images/35.jpg", date: "2023-09-08", place: "제주도 에코랜드", distance: 443.9 },
    { img: "images/36.jpg", date: "2023-09-08", place: "제주도 에코랜드", distance: 443.9 },
    { img: "images/37.jpg", date: "2023-09-08", place: "제주도 (장소 미상)", distance: 440.2 },
    { img: "images/38.jpg", date: "2023-10-02", place: "인천 영종도", distance: 16.1 },
    { img: "images/39.jpg", date: "2023-10-02", place: "인천 영종도", distance: 16.1 },
    { img: "images/40.jpg", date: "2023-11-30", place: "인천 남동구 소래선 녹지공원", distance: 9.2 },
    { img: "images/41.jpg", date: "2023-11-30", place: "인천 남동구 소래포구", distance: 9.4 },
    { img: "images/42.jpg", date: "2024-03-01", place: "인천 강화도", distance: 32.5 },
    { img: "images/43.jpg", date: "2024-06-09", place: "제주도 (장소 미상)", distance: 440.2 },
    { img: "images/44.jpg", date: "2024-06-09", place: "제주도 우도", distance: 455.2 },
    { img: "images/45.jpg", date: "2024-06-11", place: "제주도 표선해수욕장", distance: 446.4 },
    { img: "images/46.jpg", date: "2024-06-12", place: "제주도 (장소 미상)", distance: 440.2 },
    { img: "images/47.jpg", date: "2024-06-12", place: "제주도 남원", distance: 445.1 },
    { img: "images/48.jpg", date: "2024-06-17", place: "제주도 소정방폭포", distance: 443.9 },
    { img: "images/49.jpg", date: "2024-06-17", place: "제주도 (장소 미상)", distance: 440.2 },
    { img: "images/50.jpg", date: "2024-06-17", place: "제주도 (장소 미상)", distance: 440.2 },
    { img: "images/51.jpg", date: "2024-06-17", place: "제주도 (장소 미상)", distance: 440.2 },
    { img: "images/52.jpg", date: "2024-06-17", place: "제주도 속골유원지", distance: 445.1 },
    { img: "images/53.jpg", date: "2024-06-17", place: "제주도 속골유원지", distance: 445.1 },
    { img: "images/54.jpg", date: "2024-06-17", place: "제주도 속골유원지", distance: 445.1 },
    { img: "images/55.jpg", date: "2024-06-17", place: "제주도 속골유원지", distance: 445.1 },
    { img: "images/56.jpg", date: "2024-06-17", place: "제주도 속골유원지", distance: 445.1 },
    { img: "images/57.jpg", date: "2024-06-17", place: "제주도 속골유원지", distance: 445.1 },
    { img: "images/58.jpg", date: "2024-06-19", place: "제주도 대왕수천", distance: 444.2 },
    { img: "images/59.jpg", date: "2024-06-19", place: "제주도 대평포구 근처", distance: 448.5 },
    { img: "images/60.jpg", date: "2024-07-01", place: "인천 남동구 만수산", distance: 7.4 },
    { img: "images/61.jpg", date: "2025-01-28", place: "강원도 춘천", distance: 104.8 },
    { img: "images/62.jpg", date: "2025-01-28", place: "강원도 춘천", distance: 104.8 },
    { img: "images/63.jpg", date: "2025-01-28", place: "강원도 춘천", distance: 104.8 },
    { img: "images/64.jpg", date: "2025-01-28", place: "강원도 춘천", distance: 104.8 },
    { img: "images/65.jpg", date: "2025-01-28", place: "강원도 춘천", distance: 104.8 }
];
      
function sortPhotoData(criteria) {
    if (criteria === "date-asc" || criteria === "date-desc") {
      photoData.sort((a, b) => {
        const da = new Date(a.date);
        const db = new Date(b.date);
        return (criteria === "date-asc") ? (da - db) : (db - da);
      });
    } else if (criteria === "dist-asc" || criteria === "dist-desc") {
      photoData.sort((a, b) => {
        return (criteria === "dist-asc") ? (a.distance - b.distance) : (b.distance - a.distance);
      });
    }
  }
      
  function renderGrid4() {
    const grid = document.querySelector(".grid-4col");
    grid.innerHTML = "";
    const currentView = "grid-4col";
    photoData.forEach(photo => {
      const item = document.createElement("div");
      item.className = "thumbnail-item";
  
      const img = document.createElement("img");
      img.src = photo.img;
      img.alt = `${photo.date} · ${photo.place}`;
      img.setAttribute("data-info", `${photo.date} · ${photo.place}`);
      img.addEventListener("click", () => {
        const url = `photo.html?img=${encodeURIComponent(photo.img)}&info=${encodeURIComponent(`${photo.date} · ${photo.place}`)}&view=${currentView}&sort=${currentSort}`;
        window.location.href = url;
      });
  
      item.appendChild(img);
      grid.appendChild(item);
    });
  }
  
  function renderGrid2() {
    const grid = document.querySelector(".grid-2col");
    grid.innerHTML = "";
    const currentView = "grid-2col";
    photoData.forEach(photo => {
      const item = document.createElement("div");
      item.className = "thumbnail-item";
  
      const img = document.createElement("img");
      img.src = photo.img;
      img.alt = `${photo.date} · ${photo.place}`;
      img.setAttribute("data-info", `${photo.date} · ${photo.place}`);
      img.addEventListener("click", () => {
        const url = `photo.html?img=${encodeURIComponent(photo.img)}&info=${encodeURIComponent(`${photo.date} · ${photo.place}`)}&view=${currentView}&sort=${currentSort}`;
        window.location.href = url;
      });
  
      item.appendChild(img);
      grid.appendChild(item);
    });
  }
  
  function renderList() {
    const list = document.querySelector(".thumbnail-list ul");
    list.innerHTML = "";
    const currentView = "thumbnail-list";
    photoData.forEach(photo => {
      const li = document.createElement("li");
      li.textContent = `${photo.date} · ${photo.place}`;
      li.setAttribute("data-img", photo.img);
      li.addEventListener("click", () => {
        const url = `photo.html?img=${encodeURIComponent(photo.img)}&info=${encodeURIComponent(`${photo.date} · ${photo.place}`)}&view=${currentView}&sort=${currentSort}`;
        window.location.href = url;
      });
      list.appendChild(li);
    });
  }
      
      function renderGalleryView() {
        const mainImage = document.getElementById("gallery-main-image");
        const thumbnailsContainer = document.querySelector(".gallery-thumbnails");
        thumbnailsContainer.innerHTML = "";
        photoData.forEach((photo, index) => {
          const thumb = document.createElement("img");
          thumb.src = photo.img.replace("300x200", "150x100");
          thumb.alt = `${photo.date} · ${photo.place}`;
          thumb.addEventListener("click", () => {
            showImageAt(index);
          });
          thumbnailsContainer.appendChild(thumb);
        });
        if (photoData.length > 0) {
          showImageAt(0);
        }
      }
      
      const sortSelect = document.getElementById("sort-select");
      let currentSort = sortSelect.value; 
      
      sortSelect.addEventListener("change", () => {
        currentSort = sortSelect.value;
        sortPhotoData(currentSort);
        updateCurrentView();
      });
      
      const buttons = document.querySelectorAll(".view-mode span");
      const views = [
        document.querySelector(".grid-4col"),
        document.querySelector(".grid-2col"),
        document.querySelector(".thumbnail-list"),
        document.querySelector(".gallery-view")
      ];
      
      buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          views.forEach((v, i) => {
            v.classList.toggle("active", i === index);
          });
          sortPhotoData(currentSort); 
          updateCurrentView();
        });
      });
      
      function updateCurrentView() {
      if (document.querySelector(".grid-4col").classList.contains("active")) {
          renderGrid4();
          document.body.classList.remove('gallery-view-active');
      } else if (document.querySelector(".grid-2col").classList.contains("active")) {
          renderGrid2();
          document.body.classList.remove('gallery-view-active');
      } else if (document.querySelector(".thumbnail-list").classList.contains("active")) {
          renderList();
          document.body.classList.remove('gallery-view-active');
      } else if (document.querySelector(".gallery-view").classList.contains("active")) {
          renderGalleryView();
          document.body.classList.add('gallery-view-active');
      }
  }
      
      const galleryMainImage = document.getElementById("gallery-main-image");
      let currentIndex = 0;
      function showImageAt(index) {
        const thumbnails = document.querySelectorAll(".gallery-thumbnails img");
        if (thumbnails.length === 0) return;
        const target = thumbnails[index];
        galleryMainImage.src = target.src;
        thumbnails.forEach(t => t.classList.remove("active"));
        target.classList.add("active");
        currentIndex = index;
      }
      
      document.querySelector(".gallery-arrow.left")?.addEventListener("click", () => {
        const thumbnails = document.querySelectorAll(".gallery-thumbnails img");
        const newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        showImageAt(newIndex);
      });
      
      document.querySelector(".gallery-arrow.right")?.addEventListener("click", () => {
        const thumbnails = document.querySelectorAll(".gallery-thumbnails img");
        const newIndex = (currentIndex + 1) % thumbnails.length;
        showImageAt(newIndex);
      });
      
      
  const galleryParams = new URLSearchParams(window.location.search);
  const initialView = galleryParams.get("view") || "grid-4col";
  const initialSort = galleryParams.get("sort") || "date-desc";
  
  
  currentSort = initialSort;
  sortSelect.value = currentSort;
  
  
  sortPhotoData(currentSort);
  
  
  views.forEach((v, i) => {
    v.classList.remove("active");
  });
  if (initialView === "grid-4col") {
    views[0].classList.add("active");
  } else if (initialView === "grid-2col") {
    views[1].classList.add("active");
  } else if (initialView === "thumbnail-list") {
    views[2].classList.add("active");
  } else if (initialView === "gallery-view") {
    views[3].classList.add("active");
  }
  
  
  updateCurrentView();

  function toggleInfo() {
    const popup = document.getElementById('info-popup');
    popup.classList.toggle('show');
}