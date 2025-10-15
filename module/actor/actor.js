/**
 * Classe base de Actor (personagem, NPC, etc.)
 */
export class DeathwatchActor extends Actor {
  /** Dados derivados e automáticos */
  prepareDerivedData() {
    const data = this.system;

    // Exemplo de cálculo de ferimentos com base em Toughness
    if (data.stats?.t?.value) {
      data.wounds.max = 10 + data.stats.t.value;
    }

    // Prevenir erros de campos inexistentes
    data.wounds.value = data.wounds.value ?? data.wounds.max;
  }
}
