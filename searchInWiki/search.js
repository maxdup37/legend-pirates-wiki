// searchInWiki/search.js

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("searchInput");
    const resultsContainer = document.getElementById("searchResults");

    // Sécurité : si on est sur une page sans recherche, on ne fait rien
    if (!input || !resultsContainer) {
        console.warn("Recherche désactivée : éléments #searchInput ou #searchResults introuvables.");
        return;
    }

    if (typeof WIKI_PAGES === "undefined") {
        console.error("WIKI_PAGES n'est pas défini. Vérifie que search-data.js est bien chargé AVANT search.js.");
        return;
    }

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
});
