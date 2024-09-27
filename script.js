
function inimigo(NivelInimigo) {
    //let inimigo = [vida,dano,defesa]
    let inimigo = {
        1: [16, 4, 7],
        2: [15, 4, 7],
        3: [17, 4, 8],
        4: [20, 5, 8],
        5: [24, 5, 9],
        6: [27, 6, 10],
        7: [30, 7, 12],
        8: [34, 8, 14],
        9: [36, 9, 15],
        10: [48, 12, 18],
    }
    return inimigo[NivelInimigo]
}

function PoderPersonagem(NivelP){
    let fora = {
        // vida dano e defesa
        1:[12,4,10],
        2:[20,8,12],
        3:[27,9,13],
        4:[38,9,14],
        5:[40,9,15],
        6:[40,10,15],
        7:[40,10,17],
        8:[43,10,17],
        9:[45,12,17],
        10:[50,12,18]
    }
    return fora[NivelP]
}

function esperar(){
    const elemento = document.querySelector('.importante');
    elemento.classList.add('animate');
    new Promise(resolve => setTimeout(resolve, 2700));
    elemento.classList.remove('animate');
}
function frases(Frase) {
    let frases = {
        1: 'Você encontrou um inimigo de level 1 um inimigo formidavel para o inicio da jornada',
        2: 'Esse inimigo é mais poderoso que o anterio voce deve derrotalo para conseguir o calice de pizza',
        3: 'Esse inimigo é da rassa mais poderosa para o seu nivel um inimigo que não deve subestimar',
        4: 'esse vem de uma raça guerreira fique atento aos atauques dele ele',
        5: 'Um inimigo de level 5 é muito mais esperiente que o outros que já enfrentou tome muito cuidado ele foi treinado pedo salazar',
        6: 'Você passou pelo evel 5 é você foi muito bem esta me impresionando garoto',
        7: 'Isso já que saindo do controle você derrotou varios capamgas do salazar,por isso ele mandou um assasino de elite para te caçar',
        8: 'certo não sei como esta vivo você é sertamento um garoto muito sortudo ou muito esforçado mas do inimigo nivel 8 você não passa sinto muito',
        9: 'Pelas barbar do profeta você esta vivo isso é incrivel,o salazar esta com medo e preucupado ele mandou um general nivel 9 para cima de você vamos la confio em você',
        10: 'Voce chegou, o salazar te espera no salão boa sorte rapaz',
        11: 'Você entrou em combate!! clique em ataque ou defesa para escolher onde usar sua abilidade '
    }
    return frases[Frase]
}

function MovimentarPersonagem(vez) {
    Personagem = document.getElementById('Personagem')
    let listaDePossição = {
        1: [30, 50],
        2: [170, 50],
        3: [310, 50],
        4: [450, 50],
        5: [510, 190],
        6: [400, 280],
        7: [200, 280],
        8: [20, 340],
        9: [80, 520],
        10: [270, 525],
    }
    Personagem.style.left = listaDePossição[vez][0] + 'px';
    Personagem.style.top = listaDePossição[vez][1] + 'px';

}

function sortearD20() {
    let numero = Math.floor(Math.random() * 20) + 1
    return numero
}
function delay(ms) {
    const elemento = document.querySelector('.importante');
    elemento.classList.add('animate');
    
    return new Promise(resolve => {
      setTimeout(() => {
        elemento.classList.remove('animate');
        resolve();
      }, ms);
    });
  }
async function Briga(Personagem, NInimigo, resolve) {
    let combate = true
    let vivo = true
    let Frases = document.getElementById('info')
    const Botatacar = document.getElementById('botaoAtacar')
    const Botadefende = document.getElementById('botaoDefende')
    let defesa, dano, vida
    /* NInimigo = [
    vida,   0
    dano,   1
    defesa  2
    ]
    */
    defesa = document.getElementById('Defesa')
    dano = document.getElementById('Ataque')
    vida = document.getElementById('PontosVida')

    defesa.innerText = Personagem[2]
    dano.innerText = Personagem[1]
    vida.innerText = Personagem[0]

    Frases.innerText = frases(11)

    let VidaIni, DanoINi, DefesaIni
    VidaIni = NInimigo[0]
    DanoINi = NInimigo[1]
    DefesaIni = NInimigo[2]

    let Vida, Defesa, Dano
    Defesa = Personagem[2]
    Dano = Personagem[1]
    Vida = Personagem[0]
    do {
        let oqueFazer = await new Promise(resolve => {
            Botatacar.addEventListener('click', () => { resolve('Ataca'); })
            Botadefende.addEventListener('click', () => { resolve('defende'); })
        })
        let DefesaTes = (sortearD20() + Defesa) + Math.floor(sortearD20() / 3)
        let AtaqueTes = (sortearD20() + Dano) + Math.floor(sortearD20() / 3)
        console.log(DefesaTes)
        console.log(AtaqueTes)

        let AtaqueIni = (sortearD20() + DanoINi) + Math.floor(sortearD20() / 3)

        // atacar
        if (oqueFazer == 'Ataca') {
            if (AtaqueTes >= DefesaIni) {
                VidaIni = VidaIni - Dano
                if (VidaIni <= 0) {
                    Frases.innerText = 'inimigo Derrotado!!!!';
                    await delay(2700); // aguarda 2,7 segundos
                    combate = false;
                }
                else {
                    Frases.innerText = 'Você acertou o ataque porrem inimigo continua Vivo'
                    await delay(2700); // aguarda 2,7 segundos
                }
            }
            else {
                Frases.innerText = 'Você errou o ataque'
                await delay(2700); // aguarda 2,7 segundos
            }

            if (AtaqueIni >= DefesaTes) {
                Vida = Vida - DanoINi
                vida.innerText = Vida
                if (Vida <= 0) {
                    Frases.innerText = 'Voce Morreu!!!'
                    await delay(2700); // aguarda 2,7 segundos
                    combate = false
                    vivo = false
                }
                else {
                    Frases.innerText = ' o inimigo acertou um golpe em você !!  Você perdeu vida'
                    await delay(2700); // aguarda 2,7 segundos
                }
            }
            else {
                Frases.innerText = `Ele errou o ataque em você`
                await delay(2700); // aguarda 2,7 segundos
            }
        }
        // defender
        else {
            if (AtaqueIni >= DefesaTes) {
                Vida = Vida - DanoINi
                vida.innerText = Vida
                if (Vida <= 0) {
                    Frases.innerText = 'Voce Morreu!!!'
                    await delay(2700)
                    combate = false
                    vivo = false
                }
                else {
                    Frases.innerText = ' o inimigo acertou um golpe em você !!  Você perdeu vida'
                    await delay(2700)
                }
            }
            else {
                Vida = Vida + 7
                vida.innerText = Vida
                Frases.innerText = `Você conseguil esquivou do ataque dele e recebeu ${7} de Vida `
                await delay(2700)
            }
        }

    } while (combate == true)
        console.log('tereminou o combate')
    
    resolve(vivo); 

}


async function Jogar() {
    const botaoAvancar = document.getElementById("Botaoavancar")
    let Jogo = true
    let Movimentos = 0
    let DizerFrase = 0
    let Inimigoo = 0
    let NivelPersona = 0
    do {
        Movimentos++
        DizerFrase++
        Inimigoo++
        NivelPersona++

        let presina = await new Promise(resolve => {
            botaoAvancar.addEventListener('click', () => {
            MovimentarPersonagem(Movimentos);
            console.log(Movimentos)   
                resolve();
            });
        });
        let Personagem = PoderPersonagem(NivelPersona)

        let Frases = document.getElementById('info')
        Frases.innerText = frases(DizerFrase)

        await delay(2700)
        let Inimigo = inimigo(Inimigoo)

        let jogadorvivo = await new Promise(resolve => Briga(Personagem, Inimigo,resolve))
        if(jogadorvivo == false){
            Frases.innerText = 'Jogo perdido (0--0)'
            Jogo = false 
        }
        else{
            if(Inimigo == 10){
                Frases.innerText = 'Você derrotou o Salazar tome a sua Pizza !!!'
                venceuOjogo()
            }
        }
        
        console.log('ta esperando')
    } while (Jogo == true)

}
Jogar()

function venceuOjogo(){
    const imagem = document.getElementById('MapaId')
    imagem.innerHTML = '<img id="ImagemPizza" src="imagens/imagemPizza.png" alt="Imagem Pizaz">'
    const imagemPizza = document.getElementById('ImagemPizza')

    Promise(resolve => {
        setTimeout(() => {
          elemento.classList.remove('animate');
          resolve();
        }, ms);
      });

    imagemPizza.style.left = 270 + 'px';
    imagemPizza.style.top = 565 + 'px';
}



