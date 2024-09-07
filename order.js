<script>
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    fetch('https://formspree.io/YOUR_FORM_ID', {
      method: 'POST',
      body: formData
    }).then(response => {
      if (response.ok) {
        window.location.href = '/order';
      } else {
        alert('There was a problem with your order.');
      }
    });
  });
</script>
