(function btnToggle() {

    const navegacao = document.querySelector('.navegacao');
    const lista = document.querySelector('.itens-lista');
    const btn = document.querySelector('.toggle');

    var clicked = true;

    btn.addEventListener('click', function(e) {

        e.preventDefault();

        if(clicked) {
            navegacao.style.height='100vh';
            lista.classList.add('itens-lista__btn-clicked');
            lista.style.transition='all 2s';
            clicked = false;
            console.log(clicked);
        } else {
            navegacao.style.height='100%';
            lista.classList.remove('itens-lista__btn-clicked');
            clicked = true;
            console.log(clicked);
        }

    });

})();