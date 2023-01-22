// Animasi dan Highligt Nav Link Pada Saat Scrool
const navLinks = document.querySelectorAll('.menu a');
const scrlblByElm = document.querySelector('.scrll');
const articles = document.querySelectorAll('article');

function handleActiveLink(event) {
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}

function handleActivearticle() {
    articles.forEach(article => {
        const articleTop = article.offsetTop - 50;
        const articleBottom = articleTop + article.offsetHeight;
        const currentPosition = scrlblByElm.scrollTop;

        if (currentPosition >= articleTop && currentPosition <= articleBottom) {
            const id = article.getAttribute('id');
            const link = document.querySelector(`.menu a[href="#${id}"]`);
            handleActiveLink({target:link});
            article.classList.add('anmsectn');
        }
    });
}

scrlblByElm.addEventListener('scroll', handleActivearticle);


// Form-Kontak
document.querySelector('.frm').addEventListener('submit', function(evn) {
  evn.preventDefault();

  var nama = document.querySelector('.fnama').value;
  var email = document.querySelector('.femail').value;
  var subjek = document.querySelector('.fsubjek').value;
  var pesan = document.querySelector('.fpesan').value;

  if (!nama) {
    alert('Nama tidak boleh kosong');
    return;
  }
  if (!email) {
    alert('Email tidak boleh kosong');
    return;
  }
  if (!subjek) {
    alert('Subjek tidak boleh kosong');
    return;
  }

  if (!pesan) {
    alert('Pesan tidak boleh kosong');
    return;
  }
  else {
    alert('Pesan Terkirim');
  }
});