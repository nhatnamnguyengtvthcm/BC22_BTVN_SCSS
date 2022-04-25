function Services(){
  this.fetchData = function(){
    return axios({
        url: "https://625569798646add390d6709e.mockapi.io/api/User",
        method: "GET",
    })      
  } 

}


// .then(function (result) {
//     this.arr = result.data;
//     console.log(this.arr);
//     renderHtml(this.arr);
    
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//   console.log(this.arr);