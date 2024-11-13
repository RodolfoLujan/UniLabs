document.getElementById('toggle-theme').addEventListener('click', function() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
});

document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('¿Seguro que quieres eliminar este elemento?');
    });
});

document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Editando elemento...');
    });
});

document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Viendo detalles del elemento...');
    });
});
