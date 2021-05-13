
//Function que adquire o Request da API e mostra no site suas informações.
(function() {
    var url = ("https://jsonplaceholder.typicode.com/posts");

    fetch(url).then(response => {
        return response.json();
    }).then(response => {
        var html = "";

        for (var i = 0; i < response.length; i++) {
            var item = response[i];

            html += "<tr>";
            html += "   <td>" + item.title + "</td>";
            html += "   <td><a type='button' class='btn btn-primary' href='detalhes.php?id=" + item.id + "'>View</a></td>";
            html += "</tr>";
        }

        document.getElementById("table").innerHTML = html;
    }).catch(error => {
        console.log('error!');
        console.log(error);
    });
}());