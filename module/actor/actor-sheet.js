/**
 * Actor Sheet personalizada para Deathwatch
 */
export class DeathwatchActorSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["deathwatch", "sheet", "actor"],
      template: "systems/deathwatch/templates/actor-sheet.hbs",
      width: 600,
      height: 600,
      tabs: [{ navSelector: ".tabs", contentSelector: ".sheet-body", initial: "main" }]
    });
  }

  getData() {
    const context = super.getData();
    context.config = CONFIG.Deathwatch;
    return context;
  }
}
