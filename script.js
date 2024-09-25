
function AlertaAi(){
    alert('foi')
}
function MovimentarPersonagem(vez){
    let listaDePossição = {1:[30,50],2:[170,50],3:[665,888]}

    Personagem.style.left = listaDePossição[vez][0] + 'px';
    Personagem.style.top = listaDePossição[vez][1] + 'px';
}
async function Jogar(){
    const botaoAvancar = document.getElementById("Botaoavancar")
    botaoAvancar.addEventListener('click',() => MovimentarPersonagem(1));
}
Jogar()

