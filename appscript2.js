<script>
  const scriptURL = 'https://script.google.com/macros/s/AKfycbywJ0jEhP6t1dZylJy09Dga5S-KzwCltbZSsJvDvm9cycJaIToPIl6Iy23wYza5hE7o/exec' //paste your url of web app created in App Script
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
</script>