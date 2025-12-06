// on initialise la recherche
const input = document.getElementById("searchInput");
const resultsContainer = document.getElementById("searchResults");

function searchWiki(query) {
    const q = query.toLowerCase().trim();
    resultsContainer.innerHTML = ""; // on vide les anciens résultats

    if (!q) {
        return;
    }

    const results = WIKI_PAGES.filter(page => {
        const haystack = (page.title + " " + page.tags + " " + page.content).toLowerCase();
        return haystack.includes(q);
    });

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>Aucun résultat trouvé.</p>";
        return;
    }

    const ul = document.createElement("ul");

    results.forEach(page => {
        const li = document.createElement("li");
        li.innerHTML = `
            <a href="${page.url}"><strong>${page.title}</strong></a><br>
            <small>${page.content}</small>
        `;
        ul.appendChild(li);
    });

    resultsContainer.appendChild(ul);
}

// on lance la recherche à chaque frappe
input.addEventListener("input", (e) => {
    searchWiki(e.target.value);
});