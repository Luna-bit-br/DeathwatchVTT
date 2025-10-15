/**
 * Classe base de Itens (armas, talentos, etc.)
 */
export class DeathwatchItem extends Item {
  prepareDerivedData() {
    const itemData = this.system;

    // Exemplo: se for arma, calcula dano total
    if (itemData.type === "weapon") {
      itemData.damageTotal = `${itemData.damageDice || 1}d10 + ${itemData.bonus || 0}`;
    }
  }
}
