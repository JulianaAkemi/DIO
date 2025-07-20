const rankPlayer = (xp) => {
  switch (true) {
    case xp <= 10:
      return "Ferro";
    case xp <= 20:
      return "Bronze";
    case xp <= 50:
      return "Prata";
    case xp <= 80:
      return "Ouro";
    case xp <= 90:
      return "Diamante";
    case xp <= 100:
      return "Lendário";
    case xp >= 101:
      return "Imortal";
  }
};
