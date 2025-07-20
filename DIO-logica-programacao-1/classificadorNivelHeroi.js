let nomeHeroi = "Ada Lovelace";
let xp = 73498963460;

const calcularNivel = (xp) => {
  switch (true) {
    case xp <= 1000:
      return "Ferro";
    case xp <= 2000:
      return "Bronze";
    case xp <= 5000:
      return "Prata";
    case xp <= 7000:
      return "Ouro";
    case xp <= 8000:
      return "Platina";
    case xp <= 9000:
      return "Ascendente";
    case xp <= 10000:
      return "Imortal";
    case xp >= 10001:
      return "Radiante";
  }
};

console.log("A heroína " + nomeHeroi + " está no nível " + calcularNivel(xp));
