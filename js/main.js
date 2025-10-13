document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch and insert HTML content
    const loadComponent = (selector, url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Could not load ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                const element = document.querySelector(selector);
                if (element) {
                    element.innerHTML = data;
                }
            })
            .catch(error => console.error(error));
    };

    // Load header and footer into their placeholders
    loadComponent("#header-placeholder", "partials/header.html");
    loadComponent("#footer-placeholder", "partials/footer.html");
});