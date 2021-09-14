let nomeDaNave = prompt("Qual é o nome da nave?")

let nomeInvertido = ""

for(let i = nomeDaNave.length - 1; i >= 0; i--) {
  if(nomeDaNave[i] == "e") {
    break
  }
  nomeInvertido += nomeDaNave[i]
}

alert("Nome original da nave: " + nomeDaNave + "\nNome após ocultação: " + nomeInvertido)

// S u p e r n o v a  9
// 0 1 2 3 4 5 6 7 8