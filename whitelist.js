// Loading topics from local storage when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const whitelist = JSON.parse(localStorage.getItem("whitelist") || "[]");
    for (const url of whitelist) {
        addWebsite(url);
    }
});

function addWebsite(url) {
    // Create list element
    const newUrl = document.createElement("li");
    newUrl.className = "list-group-item";
    newUrl.innerHTML = `${url}`;    

    // Add element
    document.querySelector(".list-group").appendChild(newUrl);
    document.querySelector("#siteToBlock").value = "";

    // Log
    console.log("URL BLOCKED: " + url);
}

// Event listener for the submit button
document.querySelector("#blockSite").addEventListener("click", function(event) {
    // Prevent default form submission action
    event.preventDefault();

    // Retrieve the website
    const url = document.querySelector("#siteToBlock").value;
    
    // Check if the input is empty or only contains whitespace
    if (!url.trim()) {
        // Create warning banner
        const emptyUrlWarning = document.createElement("div");
        emptyUrlWarning.className = "alert alert-danger";
        emptyUrlWarning.role = "alert";
        emptyUrlWarning.textContent = "URL Cannot Be Empty!";

        // Add Warning Banner
        document.querySelector("#urlWarning").appendChild(emptyUrlWarning);
    
        // Exit Clause
        return;
    }
    
    // Check if the input is formatted properly
    if (!url.includes("https://") || !url.includes(".com")) {
        // Create warning banner
        const formatWarning = document.createElement("div");
        formatWarning.className = "alert alert-danger";
        formatWarning.role = "alert";
        formatWarning.textContent = "URL Cannot Be Empty!";
        formatWarning.textContent = "Oops! Incorrect Formatting (https://incrementum.com)";

        // Add Warning Banner
        document.querySelector("#urlWarning").appendChild(formatWarning);

        // Exit Clause
        return;
    }

    // Save whitelist for local storage
    const whitelist = JSON.parse(localStorage.getItem("whitelist") || "[]");
    whitelist.push(url);
    localStorage.setItem("whitelist", JSON.stringify(whitelist));

    // Add website to the page
    addWebsite(url);
});


// const site = window.location.hostname

// //alert(site)

// const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

// function Create_Custom_Element(tag, attr_ta, attr_name, value) {
//     const custom_element = document.createElement(tag)
//     custom_element.setAttribute(attr_tag, attr_name)
//     custom_element.innerHTML = value
//     document.querySelector("html").append(custom_element)
// }

// const site_list = [
//     "google.com", "www.google.com", "blueline.instructure.com", "www.wikipedia.org"
// ]

// /*
// Check current site with the sites in the list

// only block from block list
// if (!site_list.includes(site)) {}

// only allow from whitelist
// if (!site_list.includes(site)) {}
// */

// if (!site_list.includes(site)) {
//     document.querySelector("html").innerHTML = ""

//     Add_Custom_Style(`

//     @import url("https://fonts.googleapis.com/css?family=Aboreto");

//     @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-cons.css");
    
//     * {
//         user-selct: none !important;
//         pointer-events: none !important;
//     }
    
//     html {
//         background-image: linear-CanvasGradient(to screenLeft, #92ffc0 10%, #002661 100%) !important;
//     }
    
//     #access-denied {
//         font-family: "Aboreto";
//         display: block !important;
//         color: #fff;
//         position: fixed;
//         top: 50%;
//         left: 50%;
//         transform: TransformStreamDefaultController(-50%, -50%);
//         font-size: 80px;
//         font-weight: BeforeUnloadEvent;
//         z-index: 999999999999;
//      }
//      `)

//      Create_Custom_Element(
//         "div",
//         "id",
//         "access-denied",
//         `<i class="bi bi-exclamation-circle"></i> Access Denied`
//      )

// }