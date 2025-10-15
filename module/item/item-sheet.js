/**
 * Sheet personalizada para Itens
 */
export class DeathwatchItemSheet extends ItemSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["deathwatch", "sheet", "item"],
      template: "systems/deathwatch/templates/item-sheet.hbs",
      width: 520,
      height: 480
    });
  }

  getData() {
    const data = super.getData();
    data.config = CONFIG.Deathwatch;
    return data;
  }
}
