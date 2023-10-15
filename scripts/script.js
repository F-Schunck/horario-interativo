function carregar(){
    let mensagem = document.querySelector('#mensagem');
    let imagem = document.querySelector('#imagem__item');
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    mensagem.innerHTML = `Agora são: <strong>${hora}:${minuto}</strong>`;

    if(hora >= 6 && hora < 12){
        //Bom dia!
        mensagem.innerHTML += `<p><strong>Bom dia!</strong></p>`;
        imagem.src = 'imagens/morning-edit.png';
        document.body.style.background = '#e5dc00';
    } else if(hora >= 12 && hora <= 18){
        //Boa Tarde!
        mensagem.innerHTML += `<p><strong>Boa tarde!</strong></p>`;
        imagem.src  = 'imagens/afternoon-edit.png';
        document.body.style.background = '#835943';
    } else if(hora >= 18 && hora < 24){
        //Boa noite!
        mensagem.innerHTML += `<p><strong>Boa noite!</strong></p>`;
        imagem.src = 'imagens/night-edit.png';
        document.body.style.background = '#13353a';
    }else if( hora >= 0 && hora < 6){
        //Boa Madrugada!
        mensagem.innerHTML += `<p><strong>Boa madrugada!</strong></p>`;
        imagem.src = 'imagens/dawn-edit.png';
        document.body.style.background = '#03080b';
    }
}
