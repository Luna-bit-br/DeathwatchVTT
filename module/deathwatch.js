/**
 * Deathwatch VTT System Core
 * Compatível com Foundry VTT v13 Build 346
 */

import { DeathwatchActor } from "./actor/actor.js";
import { DeathwatchActorSheet } from "./actor/actor-sheet.js";
import { DeathwatchItem } from "./item/item.js";
import { DeathwatchItemSheet } from "./item/item-sheet.js";
import { registerHandlebarsHelpers } from "./helpers.js";
import { DEATHWATCH } from "./config.js";

Hooks.once("init", async function () {
  console.log("Deathwatch | Inicializando Sistema Deathwatch (v13)");

  // Registrar configuração global
  CONFIG.Deathwatch = DEATHWATCH;

  // Registrar classes customizadas
  CONFIG.Actor.documentClass = DeathwatchActor;
  CONFIG.Item.documentClass = DeathwatchItem;

  // Registrar sheets customizadas
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("deathwatch", DeathwatchActorSheet, { makeDefault: true });

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("deathwatch", DeathwatchItemSheet, { makeDefault: true });

  // Helpers de template
  registerHandlebarsHelpers();

  // Pré-carregar templates
  await loadTemplates([
    "systems/deathwatch/templates/actor-sheet.hbs",
    "systems/deathwatch/templates/item-sheet.hbs",
  ]);

  console.log("Deathwatch | Sistema inicializado com sucesso.");
});

Hooks.once("ready", function () {
  console.log("Deathwatch | Pronto para jogar!");
});
