const users = document.getElementById('users');

if (users) {
  users.addEventListener('click', e => {
    if (e.target.className === 'btn btn-danger delete-user') {
      if (confirm('Are you sure ?')) {
        const id = e.target.getAttribute('data-id');

        fetch(`/supprimerUser/${id}`, {
          method: 'DELETE'
        }).then(res => window.location.reload());
      }
    }
  });
} 