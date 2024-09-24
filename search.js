var searchIndex = lunr(function () {
    this.field('title');
    this.field('content');
    this.ref('url');
});

// Fetch the search index (JSON file)
fetch('/search.json').then(function(response) {
    return response.json();
}).then(function(pages) {
    pages.forEach(function(page) {
        searchIndex.add(page);
    });
});

// Search and display results
document.getElementById('search-box').addEventListener('input', function() {
    var query = this.value;
    var results = searchIndex.search(query);
    var resultList = document.getElementById('search-results');
    resultList.innerHTML = '';

    results.forEach(function(result) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.href = result.ref;
        link.textContent = result.ref;
        listItem.appendChild(link);
        resultList.appendChild(listItem);
    });
});
