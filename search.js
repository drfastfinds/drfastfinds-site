document.addEventListener('DOMContentLoaded', function() {
    let searchBox = document.getElementById('search-input'); // Make sure this matches your HTML element ID
    let searchResults = document.getElementById('search-results');

    let baseURL = "https://drfastfinds.github.io/drfastfinds-site";

    // Fetch the search index from the generated search.json.liquid file
    fetch(baseURL + '/search.json.liquid')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(pages => {
            let idx = lunr(function () {
                this.field('title');
                this.field('content');
                this.ref('url');

                pages.forEach(function (page) {
                    this.add(page);
                }, this);
            });

            searchBox.addEventListener('input', function() {
                let query = searchBox.value;
                let results = idx.search(query);

                searchResults.innerHTML = '';

                if (results.length > 0) {
                    results.forEach(function(result) {
                        let page = pages.find(p => p.url === result.ref);
                        let li = document.createElement('li');
                        let a = document.createElement('a');
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
        .catch(err => console.error('Failed to fetch search.json.liquid', err));
});
