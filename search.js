document.addEventListener('DOMContentLoaded', function() {
    let searchBox = document.getElementById('search-box');
    let searchResults = document.getElementById('search-results');

    // Hardcode the base URL
    let baseURL = "https://drfastfinds.github.io/drfastfinds-site";

    // Fetch the search index
    fetch(baseURL + '/search.json')
        .then(response => response.json())
        .then(pages => {
            // Initialize Lunr.js with the index
            let idx = lunr(function () {
                this.field('title');
                this.field('content');
                this.ref('url');

                pages.forEach(function (page) {
                    this.add(page);
                }, this);
            });

            // Handle search input
            searchBox.addEventListener('input', function() {
                let query = searchBox.value;
                let results = idx.search(query);

                // Clear old results
                searchResults.innerHTML = '';

                if (results.length > 0) {
                    // Show new results
                    results.forEach(function(result) {
                        let page = pages.find(p => p.url === result.ref);
                        let li = document.createElement('li');
                        let a = document.createElement('a');
                        // Hardcode base URL in result links
                        a.href = baseURL + page.url;
                        a.textContent = page.title;
                        li.appendChild(a);
                        searchResults.appendChild(li);
                    });
                } else if (query.length > 0) {
                    searchResults.innerHTML = '<li>No results found</li>';
                }
            });
        })
        .catch(err => console.error('Failed to fetch search.json', err));
});
