const params = new URLSearchParams(window.location.search);
const page = params.get('page');
if (page === 'blog') {
    window.location.href = 'Different Pages/blogpostPage.html';
}