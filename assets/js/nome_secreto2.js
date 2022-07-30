//Cada vez que ele carregar a pagina, gera um acerto ou um erro
let acertos = 0
let digitados = 0 //caracteres digitados
let nomeCorreto = "";
let nomeDigitado = []

console.log(acertos)
//Recarrega a pagina quando o usuario acerta ou erra
const recarregaPagina = (tempo/* Em milisegundos*/) => {
    setTimeout(() => {
        document.location.reload(true)
    }, tempo);
}


addEventListener("keydown", (e) => {
    //pega tecla
    const getKey = function (key = e.key) {
        return key.toLowerCase()
    }


    let letra = getKey()
    //verifica se a letra existe no nome que ta sendo digitado
    if (nomeDigitado.includes(letra))
        return
    //Ve se o nome que ta sendo digitado é paulo
    if (!(letra === "p" || letra === "a" || letra === "u" || letra === "l" || letra === "o"))
        return/*não digita a letra errada na tela e sai da função*/

    nomeDigitado.push(letra) //Guarda a letra certa no array nome
    digitados++ //conta as letras digitadas pelo usuario

    //guarda o nome correto
    nomeCorreto += nomeDigitado.reduce(function (obj, acum) {
        return acum
    })

    //Bota na tela a letra que ele ta digitando
    window.document.body.innerHTML = nomeDigitado.join("")

    // O que acontece caso ele acerte


    if (nomeCorreto === "oluap" || nomeCorreto === "paulo" || nomeCorreto === "apulo") {

        window.document.body.innerHTML =
            `
                            <div class="telaAestetic">
                                <h1 class="avisoSimple">NOME: ${nomeCorreto.toUpperCase()}</h2>
                                </br>
                                <h3>PARABÉNS !! VOCÊ DESCOBRIU O NOME CORRETO !!<h3>
                            </div>
             `
        const espera = () =>{
            setInterval(() => {
                window.location.href = "ìndex.html" //pagina de acerto
            },3000)
        }
        espera()


    }

    //O que acontece caso ele erre
    if ((nomeCorreto !== "paulo") && digitados === 5) {
        window.document.body.innerHTML = `<h1 class="avisoSimple">NOME ERRADO !!</h1>`
        const espera = () =>{
            setInterval(() => {
                window.location.href = "Index.html" //segunda pagina
            },3000)
        }
        espera()
    }


})