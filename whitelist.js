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

function warningBanner(message) {
    // Get the warning container
    const warningContainer = document.querySelector("#urlWarning");
    
    // Check if a warning already exists
    const existingWarning = warningContainer.querySelector(".alert.alert-danger");
    
    if (existingWarning) {
        // Update the existing warning's message
        existingWarning.textContent = message;
    } else {
        // Create a new warning banner
        const warningMessage = document.createElement("div");
        warningMessage.className = "alert alert-danger";
        warningMessage.role = "alert";
        warningMessage.textContent = message;

        // Add the new warning banner
        warningContainer.appendChild(warningMessage);
    }
}

// Event listener for the submit button
document.querySelector("#blockSite").addEventListener("click", function(event) {
    // Prevent default form submission action
    event.preventDefault();

    // Retrieve the website
    const url = document.querySelector("#siteToBlock").value;
    
    // Check if the input is empty or only contains whitespace
    if (!url.trim()) {
        warningBanner("URL Cannot Be Empty!");
        return;
    }
    
    // Check if the input is formatted properly
    if (!url.includes("https://") || !url.includes(".com")) {
        warningBanner("Oops! Incorrect Formatting (https://incrementum.com)");
        return;
    }

    // Save whitelist for local storage
    const whitelist = JSON.parse(localStorage.getItem("whitelist") || "[]");

    if (whitelist.includes(url)) {
        warningBanner("Website Already Blocked!");
        return;
    }
    
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