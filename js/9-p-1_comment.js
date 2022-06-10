function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data));
}
loadComments();

function displayComments(comments) {
    const commentsContainer = document.getElementById('comments');
    for (const comment of comments) {
        console.log(comment);
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <h3>${comment.name}</h3>
        <h3>${comment.email}</h3>
        <p>${comment.body}</p>
        `;
        commentsContainer.appendChild(div);
    }
}