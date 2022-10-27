
function changeThemeHome(id) {
    const theme = document.getElementsByTagName('link')[1];
    switch (id) {
    case "plag":
        // console.log(theme);
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
        

    case "default":
        default:
        theme.href = "css/colonization/colonization.css";
        localStorage.setItem('selectedTheme', 'default');
        break;

    

    }
}
    

function changeThemeDoc(id,name) {
    const theme = document.getElementsByTagName('link')[1];

    console.log(id,name);
    switch (id) {

    case "plag":
        if (name == "Home"){ theme.href = "css/blackplague/blackplague.css";}
        
        else{
            theme.href = "../../css/blackplague/blackplague.css";
        }
        localStorage.setItem('selectedTheme', 'plag');
        break;
       

    case "colo":
        if (name == "Home"){theme.href = "css/colonization/colonization.css";}
        
        else{
            theme.href = "../../css/colonization/colonization.css";
        }
        
        localStorage.setItem('selectedTheme', 'colo');
        break;
       

    case "crash":
        if (name == "Home"){ theme.href = "css/wallstreet_crash/wallstreet_crash.css";}
        
        else{
            theme.href = "../../css/wallstreet_crash/wallstreet_crash.css";
        }
        
        localStorage.setItem('selectedTheme', 'crash');
        break;
       

    case "cold":
        if (name == "Home"){theme.href = "css/thecoldwar/thecoldwar.css";}
        
        else{
            theme.href = "../../css/thecoldwar/thecoldwar.css";
        }
        
        localStorage.setItem('selectedTheme', 'cold');
        break;
        

    case "cons":
        if (name == "Home"){theme.href = "css/conspiracy/conspiracy.css";}
        
        else{
            theme.href = "../../css/conspiracy/conspiracy.css";
        }

        
        localStorage.setItem('selectedTheme', 'cons');
        break;
      

    case "ali":
        if (name == "Home"){theme.href = "css/alieninvasion/alieninvasion.css";}
        
        else{
            theme.href = "../../css/alieninvasion/alieninvasion.css";
        }

        
        localStorage.setItem('selectedTheme', 'ali');
        break;
       
    
    case "default":
        default:
        if (name == "Home"){theme.href = "css/colonization/colonization.css";}
        
        else{
            theme.href = "../../css/colonization/colonization.css";
        }

        
        localStorage.setItem('selectedTheme', 'default');
        break;

        

         
    }
}


docname = document.getElementsByTagName("title")[0];
// console.log(localStorage);


if(localStorage.getItem('selectedTheme')){


    changeThemeDoc(localStorage.getItem('selectedTheme'),docname.innerHTML)
    // docname.innerHTML == 'Home'

    // console.log(localStorage);

    // changeThemeHome("default");
    // console.log(localStorage,'if');


    // if (localStorage.getItem('selectedTheme')) {
       
    //     changeThemeHome(localStorage.getItem('selectedTheme'));
    //     }
}
// else{
    // console.log(localStorage,'else');
    // changeThemeDoc("default");

    // if (localStorage.getItem('selectedTheme')) {
    //     changeThemeDoc(localStorage.getItem('selectedTheme'));
    //     }

// }
// localStorage.clear(); 


    
  


  const navbar = document.querySelector('.nav-fixed');
  const collapseNav = document.querySelector(".navbar-collapse");
  window.onscroll = () => {
       if (window.scrollY > 30) {
           navbar.classList.add('nav-active');
       } else {
           navbar.classList.remove('nav-active');
       }
   };
  
  