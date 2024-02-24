window.addEventListener("load", function (e) {
    var btn = document.querySelector("#submit");
    var result = document.querySelector("#result");

    btn.addEventListener("click", function (e) { 
        const url = "data.txt";

        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function () {
            console.log("XHR Loaded")
            if (xhr.status == 200) {
                result.textContent = xhr.responseText;
            }
        })
        xhr.open("GET", url);
        xhr.send(); 
    })
        

});
