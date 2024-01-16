function resizeContent() {
    var content = document.getElementById('content');
    content.style.width = window.innerWidth + 'px';
    content.style.height = window.innerHeight + 'px';
}

resizeContent();

window.addEventListener('resize', resizeContent);
