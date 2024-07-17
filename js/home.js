if( localStorage.getItem("currentUser") ){
    document.querySelector(".username").innerHTML = localStorage.getItem("currentUser")
  }else {
    window.location.href = "index.html"
  }
