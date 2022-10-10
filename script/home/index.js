// change the theme
function changeTheme(id) {
    const theme = document.getElementsByTagName('link')[1];
    switch (id) {
        case "plag":
            theme.href = "../../css/blackplague/blackplague.css";
            break;
        case "colo":
            theme.href = "../../css/colonization/colonization.css";
            break;
        case "crash":
            theme.href = "../../css/wallstreet_crash/wallstreet_crash.css";
            break;
        case "cold":
            theme.href = "../../css/thecoldwar/thecoldwar.css";
            break;
        case "cons":
  
            theme.href = "../../css/conspiracy/conspiracy.css";
            break;
        case "ali":

            theme.href = "../../css/alieninvasion/alieninvasion.css";
            break;
    }
  }
  
  function changeThemeHome(id) {
      const theme = document.getElementsByTagName('link')[1];
      switch (id) {
        case "plag":
            theme.href = "../../css/blackplague/blackplague.css";
            break;
        case "colo":
            theme.href = "../../css/colonization/colonization.css";
            break;
        case "crash":
            theme.href = "../../css/wallstreet_crash/wallstreet_crash.css";
            break;
        case "cold":
            theme.href = "../../css/thecoldwar/thecoldwar.css";
            break;
        case "cons":
  
            theme.href = "../../css/conspiracy/conspiracy.css";
            break;
        case "ali":

            theme.href = "../../css/alieninvasion/alieninvasion.css";
            break;
      }
    }
  
    function changeThemeDoc(id) {
      const theme = document.getElementsByTagName('link')[1];
      switch (id) {
        case "plag":
            theme.href = "../../css/blackplague/blackplague.css";
            break;
        case "colo":
            theme.href = "../../css/colonization/colonization.css";
            break;
        case "crash":
            theme.href = "../../css/wallstreet_crash/wallstreet_crash.css";
            break;
        case "cold":
            theme.href = "../../css/thecoldwar/thecoldwar.css";
            break;
        case "cons":
  
            theme.href = "../../css/conspiracy/conspiracy.css";
            break;
        case "ali":

            theme.href = "../../css/alieninvasion/alieninvasion.css";
            break;
      }
    }
  
    function changeThemeAbout(id) {
      const theme = document.getElementsByTagName('link')[1];
      switch (id) {
        case "plag":
            theme.href = "../../css/blackplague/blackplague.css";
            break;
        case "colo":
            theme.href = "../../css/colonization/colonization.css";
            break;
        case "crash":
            theme.href = "../../css/wallstreet_crash/wallstreet_crash.css";
            break;
        case "cold":
            theme.href = "../../css/thecoldwar/thecoldwar.css";
            break;
        case "cons":
  
            theme.href = "../../css/conspiracy/conspiracy.css";
            break;
        case "ali":

            theme.href = "../../css/alieninvasion/alieninvasion.css";
            break;
      }
    }
  
  function changeModeFuture(id){
    const theme = document.getElementsByTagName('link')[1];
    switch (id) {
        case "enable-futuredark":
          theme.href = "/typetravel/styles/themes/future/mainFuture.css";
          break;
        case "enable-futurelight":
          theme.href = "/typetravel/styles/themes/future/mainFutureLight.css";
          break;
    }
  }
  
  function changeModeFutureDoc(id){
      const theme = document.getElementsByTagName('link')[1];
      switch (id) {
          case "enable-futuredark":
            theme.href = "/typetravel/styles/themes/future/docFuture.css";
            break;
          case "enable-futurelight":
            theme.href = "/typetravel/styles/themes/future/docFutureLight.css";
            break;
      }
    }
  
  
  function addClass(element) {
      if (element.innerHTML == "Read Better") {
          document.getElementById("metadata").classList.remove("col-md-3","d-md-block");
          document.getElementById("article-1").classList.replace("col-lg-3", "col-lg-4");
          document.getElementById("article-2").classList.replace("col-lg-3", "col-lg-4");
          document.getElementById("article-3").classList.replace("col-lg-3", "col-lg-4");
          document.getElementById("article-1").classList.add("larger");
          document.getElementById("article-2").classList.add("larger");
          document.getElementById("article-3").classList.add("larger");
          document.getElementById("expand-animation").classList.add("all-articles");
          element.innerHTML = "Read More";
      } else {
          document.getElementById("metadata").classList.add("col-md-3", "d-md-block");
          document.getElementById("article-1").classList.replace("col-lg-4", "col-lg-3");
          document.getElementById("article-2").classList.replace("col-lg-4", "col-lg-3");
          document.getElementById("article-3").classList.replace("col-lg-4", "col-lg-3");
          document.getElementById("article-1").classList.remove("larger-before");
          document.getElementById("article-2").classList.remove("larger-before");
          document.getElementById("article-3").classList.remove("larger-before");
          document.getElementById("expand-animation").classList.remove("all-articles");
          element.innerHTML = "Read Better";
      }  
  }


  const navbar = document.querySelector('.nav-fixed');
  const collapseNav = document.querySelector(".navbar-collapse");
  window.onscroll = () => {
       if (window.scrollY > 30) {
           navbar.classList.add('nav-active');
       } else {
           navbar.classList.remove('nav-active');
       }
   };
  
  