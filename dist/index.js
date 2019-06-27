var requestPost = new XMLHttpRequest();
requestPost.open("get", "posts");
requestPost.addEventListener("load", fillPage);
requestPost.send();

function fillPage(){
    if(requestPost.status == 200){
        var posts = JSON.parse(requestPost.response);
        posts.forEach(function(post){
            criarPost(post);
        });
    }
    else
    {
        alert("Shit happened");
    }
}


function criarPost(post){
    var postElement = document.createElement('div');
    postElement.className = "post post-" + post.id;
    var domString = '<div class="profilepic">' + '<p><img style="padding: 0 50px; float: left; border-radius:50%;  width: 50px; height: 50px;"src = "' + post.usuario.foto + '" ></p>' +
    '<p class="profilepic">' + post.usuario.nome + '</p>' +  '<p class="vote">' + post.votes + '</p>' + '<h1>' + post.texto + '</h1>';
    postElement.innerHTML = domString;
    var divPost = document.querySelector('body');
    divPost.appendChild(postElement);
   //'<p style="margin-top: 10px; font-size: 20px; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">r/CrusadersSux</p>
}
