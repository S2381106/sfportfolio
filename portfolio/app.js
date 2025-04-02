document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    console.log('名前: ' + name + ', メール: ' + email);
    document.getElementById('contact-form').reset();
    alert('お問い合わせありがとうございます！');
});