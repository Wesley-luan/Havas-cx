
//Esta function foi usada para ir a pagina com os texto por Id.
(function() {
    var id = window.location.search.replaceAll("?id=", "");
    var url = ("https://jsonplaceholder.typicode.com/posts/" + id);

    fetch(url).then(response => {
        return response.json();
    }).then(response => {
        document.getElementById("title").innerText += response.title;
        document.getElementById("body").innerText += response.body;
    }).catch(error => {
        console.log('error!');
        console.log(error);
    });
}());