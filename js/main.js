function getEleID(id) {
  return document.getElementById(id);
}

var services = new Services();

function getListTeacher() {
  /* 
        * Axios trả vê đối tượng promiss:
        * - pending (chờ)
        * - resolve (thành công)
        * - reject (thất bại)

    */
  // getEleID("loading").style.display = "block";
  services
    .fetchData()
    .then(function (result) {
      // getEleID("loading").style.display = "none";
      renderHtml(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log(this.arr);
  // renderHtml(services.arr);
}

function renderHtml(arr) {
  var content = "";
  for (let i = 0; i < arr.length; i++) {
    // content += `
    //     <div class="col-12 col-md-6 col-lg-4">
    //     <div class="card cardPhone">
    //     <img src="./img/${arr[i].hinhAnh}" class="card-img-top" alt="..." />
    //     <div class="card-body">
    //       <div class="d-flex justify-content-between">
    //         <div>
    //           <h3 class="cardPhone__title">${arr[i].tenSP}</h3>
    //           <p class="cardPhone__text">${arr[i].moTa}</p>
    //         </div>
    //         <div>
    //           <h3 class="cardPhone__title">${arr[i].gia}</h3>
    //         </div>
    //       </div>
    //       <div class="d-flex justify-content-between">
    //         <div class="cardPhone__rating">
    //           <i class="fa fa-star"></i>
    //           <i class="fa fa-star"></i>
    //           <i class="fa fa-star"></i>
    //           <i class="fa fa-star"></i>
    //           <i class="fa fa-star"></i>
    //         </div>
    //         <div>
    //           <button class="btnPhone-shadow">
    //             <i class="fa fa-shopping-cart"></i> Buy Now
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   </div>
    //     `;
    content += `
        <div class="card col-lg-3 col-xl-3 col-6">
      
        <h1 class="card-img-top">${arr[i].hinhAnh}</h1>
        <div class="card-body">
          <h4 class="card-title card-user-name">${arr[i].ngonNgu}</h4>
          <h1 class="card-title">${arr[i].hoTen}</h1>
          <p class="card-text">${arr[i].moTa}</p>
        </div>
      </div>
      `;
  }
  getEleID("teacher-list").innerHTML = content;
}

getListTeacher();
