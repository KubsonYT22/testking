const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
    //   searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
    document.addEventListener('click', ({ target }) => {

    if (target.matches('ion-icon')) {
        if(target.getAttribute("request") == "block") {
            const xhr= new XMLHttpRequest() 
            var theUrl = "/admin/block";
            
            xhr.open("POST", theUrl);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({"type": "block", "user": `${target.getAttribute("data-user")}`}))
            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if(xhr.responseText == "Sukces") {
                        document.location.reload()
                    } else {
                        alert("Błąd: "+xhr.responseText);
                        if(xhr.responseText == "Nie jesteś zalogowany") {
                            document.location.reload()
                        }
                    }
                    
            }
        }
        } else if(target.getAttribute("request") == "unblock") {
            const xhr= new XMLHttpRequest() 
            var theUrl = "/admin/block";
            
            xhr.open("POST", theUrl);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({"type": "unblock", "user": `${target.getAttribute("data-user")}`}))
            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if(xhr.responseText == "Sukces") {
                        document.location.reload()
                    } else {
                        alert("Błąd: "+xhr.responseText);
                        if(xhr.responseText == "Nie jesteś zalogowany") {
                            document.location.reload()
                        }
                    }
                    
            }
        }
        }

    

}
});

toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})


// searchBtn.addEventListener("click" , () =>{
//     sidebar.classList.remove("close");
// })

// modeSwitch.addEventListener("click" , () =>{
//     body.classList.toggle("dark");
    
//     if(body.classList.contains("dark")){
//         modeText.innerText = "Light mode";
//     }else{
//         modeText.innerText = "Dark mode";
        
//     }
// });