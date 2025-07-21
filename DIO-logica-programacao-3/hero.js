class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    const usedAttack = {
      mago: "usou magia",
      guerreiro: "usou espada",
      monge: "usou artes marciais",
      ninja: "usou shuriken",
    };

    return console.log(`o ${this.type} atacou usando ${usedAttack[this.type]}`);
  }
}
