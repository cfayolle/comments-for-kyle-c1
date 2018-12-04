function Pokemon(name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function() {
  return this.attackBonus + 2;
};
Pokemon.prototype.isDefeated = function() {
  if (this.health >= 1) {
    return false;
  }
  return true;
};

function simulateBattle(p1, p2, goesFirst) {
  if (goesFirst.name === p1.name) {
    while (p1.health > 0 || p2.health > 0) {
      p2.health -= p1.biteAttack();
      if (p2.isDefeated() === true) {
        return `${p1.name} Wins!`;
      }
      p1.health -= p2.biteAttack();
      if (p1.isDefeated() === true) {
        return `${p2.name} Wins!`;
      }
    }
  } else {
    while (p1.health > 0 || p2.health > 0) {
      p1.health -= p2.biteAttack();
      if (p1.isDefeated() === true) {
        return `${p2.name} Wins!`;
      }
      p2.health -= p1.biteAttack();
      if (p2.isDefeated() === true) {
        return `${p1.name} Wins!`;
      }
    }
  }
}
