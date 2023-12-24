document.addEventListener('DOMContentLoaded', (event) => {
    fetch('./blogpost.json')
        .then(response => response.json())
        .then(data => {
            const postListContainer = document.querySelector('.post-list');

            // Iterate over all articles in the JSON and append them to the list
            data.forEach(article => {
                postListContainer.innerHTML += generateArticleHTML(article);
            });
        })
        .catch(error => {
            console.error('Error fetching or parsing the JSON:', error);
        });
});

function generateArticleHTML(article) {
    return `
        <li class="sm:py-4 max-w-3xl">
            <article>
                <div class="space-y-2 md:grid md:grid-cols-5 md:space-y-0 md:space-x-6">
                    <dl class="whitespace-nowrap md:col-span-2 text-sm font-medium leading-5 flex-col ">
                        <img src="${article.image}" class="max-h-full max-w-full">
                    </dl>
                    <div class="space-y-5 md:col-span-3">
                        <div class="md:space-y-5 space-y-2">
                            <div>
                                <h2 class="text-2xl font-bold leading-8 tracking-tight">
                                    <a href="${article.link}" class="text-gray-900 dark:text-gray-100">
                                        ${article.title}
                                    </a>
                                </h2>
                                <div class="flex flex-wrap">
                                    <dd class="text-sm font-medium leading-6">
                                        <span class="text-gray-500">${article.date}</span>
                                        <span class="text-gray-500">-</span>
                                        <a href="${article.linksource}">${article.source}</a>
                                    </dd>
                                </div>
                            </div>
                            <div class="prose max-w-none text-black">${article.description}</div>
                        </div>
                    </div>
                </div>
            </article>
        </li>
    `;
}
