
  
  function changeThemeHome(id) {
      const theme = document.getElementsByTagName('link')[1];
      switch (id) {
        case "plag":
            console.log(theme);
            theme.href = "css/blackplague/blackplague.css";
            localStorage.setItem('selectedTheme', 'plag');
            break;
        case "colo":
            theme.href = "css/colonization/colonization.css";
            localStorage.setItem('selectedTheme', 'colo');
            break;
        case "crash":
            theme.href = "css/wallstreet_crash/wallstreet_crash.css";
            localStorage.setItem('selectedTheme', 'crash');
            break;
        case "cold":
            theme.href = "css/thecoldwar/thecoldwar.css";
            localStorage.setItem('selectedTheme', 'cold');
            break;
        case "cons":
  
            theme.href = "css/conspiracy/conspiracy.css";
            localStorage.setItem('selectedTheme', 'cons');
            break;
        case "ali":
            theme.href = "css/alieninvasion/alieninvasion.css";
            localStorage.setItem('selectedTheme', 'ali');
            break;
        case 'default':
        default:
            theme.href = "css/colonization/colonization.css";
            localStorage.setItem('selectedTheme', 'default');
            break;
      }
    }
    
let docname = document.getElementsByTagName("title")[0];
// console.log(docname.innerHTML);
if(docname.innerHTML == 'Home'){


    if (localStorage.getItem('selectedTheme')) {
        // console.log('this is home block');
        changeThemeHome(localStorage.getItem('selectedTheme'));
        }

}
else{
    if (localStorage.getItem('selectedTheme')) {
        // console.log('else block not home');
        changeThemeDoc(localStorage.getItem('selectedTheme'));
        }
}

    
  
function changeThemeDoc(id) {
    const theme = document.getElementsByTagName('link')[1];
    switch (id) {
    case "plag":
        theme.href = "../../css/blackplague/blackplague.css";
        localStorage.setItem('selectedTheme', 'plag');
        break;
    case "colo":
        theme.href = "../../css/colonization/colonization.css";
        localStorage.setItem('selectedTheme', 'colo');
        break;
    case "crash":
        theme.href = "../../css/wallstreet_crash/wallstreet_crash.css";
        localStorage.setItem('selectedTheme', 'crash');
        break;
    case "cold":
        theme.href = "../../css/thecoldwar/thecoldwar.css";
        localStorage.setItem('selectedTheme', 'cold');
        break;
    case "cons":

        theme.href = "../../css/conspiracy/conspiracy.css";
        localStorage.setItem('selectedTheme', 'cons');
        break;
    case "ali":

        theme.href = "../../css/alieninvasion/alieninvasion.css";
        localStorage.setItem('selectedTheme', 'ali');
        break;
    default:
        theme.href = "../../css/colonization/colonization.css"; 
        localStorage.setItem('selectedTheme', 'default');
        break;
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
  
  