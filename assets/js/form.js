const form = document.getElementById('blogForm');
const userNameInput = document.querySelector('#user-name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

function handleSubmit(event) {
    event.preventDefault();

    const blogData = {
        userName: userNameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim(),
    }; 

    localStorage.setItem('Data', JSON.stringify(blogData));  

    window.location.href = 'blog.html';
}

form.addEventListener('submit', handleSubmit)