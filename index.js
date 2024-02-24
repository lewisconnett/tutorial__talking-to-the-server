// Wait for the window to finish loading before executing any JavaScript
window.addEventListener("load", function (e) {
    // Select the submit button and result paragraph for the first button
    var btn = document.querySelector("#submit");
    var result = document.querySelector("#result");

    // Select the submit button, result paragraph, and form for the second button
    var btn2 = document.querySelector("#submit2");
    var result2 = document.querySelector("#result2");
    const form = document.querySelector("form");

    // Event listener for the first button
    btn.addEventListener("click", function (e) {
        // Specify the URL to fetch data from
        const url = "data.txt";

        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Event listener for when the XHR request is loaded
        xhr.addEventListener("load", function () {
            console.log("XHR Loaded");
            // If the status is 200 (OK), update the result paragraph with the response text
            if (xhr.status == 200) {
                result.textContent = xhr.responseText;
            }
        });

        // Open the XHR request with a GET method and the specified URL
        xhr.open("GET", url);
        // Send the XHR request
        xhr.send();
    });

    // Event listener for the second button
    btn2.addEventListener("click", function (e) {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Specify the URL to send the POST request to
        const url = "http://mw159.brighton.domains/ci527/echo.php";

        // Get the values of the actor and rating inputs
        const actor = document.querySelector("#actor").value;
        const rating = document.querySelector("#rating").value;

        // Encode the parameters for safe transport
        const params =
            "actor=" +
            encodeURIComponent(actor) +
            "&rating=" +
            encodeURIComponent(rating);

        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Event listener for when the XHR request is loaded
        xhr.addEventListener("load", function () {
            // If the status is 200 (OK), update the result2 paragraph with the response text
            if (xhr.status == 200) {
                result2.textContent = xhr.responseText;
            }
        });

        // Open the XHR request with a POST method, the specified URL, and asynchronous flag set to true
        xhr.open("POST", url, true);

        // Set the request header to specify the content type
        xhr.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
        );

        // Send the XHR request with the encoded parameters
        xhr.send(params);
    });
});
