
function inimigo(NivelInimigo){
    //let inimigo = [vida,dano,defesa]
    let inimigo = {
        1:[10,3,7],
        2:[15,4,7],
        3:[17,4,8],
        4:[20,5,8],
        5:[24,5,9],
        6:[27,6,10],
        7:[30,7,12],
        8:[34,8,14],
        9:[36,9,15],
        10:[48,12,18],
    }
    return inimigo[NivelInimigo]
}

function frases(Frase){
    let frases = {
        1:'Você encontrou um inimigo de level 1 um inimigo formidavel para o inicio da jornada',
        2:'Esse inimigo é mais poderoso que o anterio voce deve derrotalo para conseguir o calice de pizza',
        3:'Esse inimigo é da rassa mais poderosa para o seu nivel um inimigo que não deve subestimar',
        4:'esse vem de uma raça guerreira fique atento aos atauques dele ele',
        5:'Um inimigo de level 5 é muito mais esperiente que o outros que já enfrentou tome muito cuidado ele foi treinado pedo salazar',
        6:'Você passou pelo evel 5 é você foi muito bem esta me impresionando garoto',
        7:'Isso já que saindo do controle você derrotou varios capamgas do salazar,por isso ele mandou um assasino de elite para te caçar',
        8:'certo não sei como esta vivo você é sertamento um garoto muito sortudo ou muito esforçado mas do inimigo nivel 8 você não passa sinto muito',
        9:'Pelas barbar do profeta você esta vivo isso é incrivel,o salazar esta com medo e preucupado ele mandou um general nivel 9 para cima de você vamos la confio em você',
        10:'Voce chegou, o salazar te espera no salão boa sorte rapaz',
        A1:''
    }
    return frases[Frase]
}

function MovimentarPersonagem(vez){
    let listaDePossição = {
        1:[30,50],
        2:[170,50],
        3:[665,888],
    }
    Personagem.style.left = listaDePossição[vez][0] + 'px';
    Personagem.style.top = listaDePossição[vez][1] + 'px';
    
}
function sortearD20(){
    return Math.floor(Math.random()*20) + 1
}
function Briga(Personagem,NInimigo){
    const botaoAvancar = document.getElementById("Botaoavancar")
    botaoAvancar.disabled = true

    const Botatacar = document.getElementById('botaoAtacar')
    const Botadefende = document.getElementById('botaoDefende')
    let defesa,dano,vida
    /* NInimigo = [
    vida,   0
    dano,   1
    defesa  2
    ]
    */
    let grhf = NInimigo
    defesa = document.getElementById('Defesa')
    dano = document.getElementById('Ataque')
    vida = document.getElementById('PontosVida')

    defesa.innerText = `${Personagem[2]}`
    dano.innerText = Personagem[1]
    vida.innerText = Personagem[0]
    console.log('3')
    return 34


}
async function Jogar(){
    const botaoAvancar = document.getElementById("Botaoavancar")
    // botaoAvancar.addEventListener('click',() => MovimentarPersonagem(1));
    MovimentarPersonagem(1)
    let Personagem = [
        12,//vida
        4,//dano
        10] //defesa 

    let Frases = document.getElementById('info')
    Frases.innerText = frases(1)
    console.log('1')
    let Inimigo = inimigo(1)

    Personagem = await Briga(Personagem,Inimigo)
    console.log('2')
}


