/**
 * Deathwatch VTT System — Core module
 * Compatível com Foundry VTT v13 (Build 346)
 * 
 * Estrutura básica e segura de inicialização.
 * Substitua ou expanda conforme necessário (ex: registro de sheets, templates, rolls etc).
 */

class DeathwatchSystem {
  static ID = "deathwatch";

  static async initialize() {
    console.log("Deathwatch | Inicializando sistema Deathwatch (compatível v13)");

    // Registrar configurações básicas
    game.settings.register(this.ID, "enableDebug", {
      name: "Modo Debug",
      hint: "Exibe logs detalhados no console para depuração.",
      scope: "client",
      config: true,
      type: Boolean,
      default: false,
      onChange: value => console.log(`Deathwatch | Debug: ${value}`)
    });

    // Registrar Handlebars helpers (se precisar no futuro)
    this.registerHandlebarsHelpers();

    // Pré-carregar templates
    await this.preloadTemplates();
  }

  static registerHandlebarsHelpers() {
    if (typeof Handlebars !== "undefined") {
      Handlebars.registerHelper("upper", str => str?.toUpperCase() ?? "");
      Handlebars.registerHelper("lower", str => str?.toLowerCase() ?? "");
      Handlebars.registerHelper("eq", (a, b) => a === b);
      Handlebars.registerHelper("neq", (a, b) => a !== b);
    }
  }

  static async preloadTemplates() {
    const templatePaths = [
      // Exemplo: "systems/deathwatch/templates/actor-sheet.hbs",
      // Exemplo: "systems/deathwatch/templates/item-sheet.hbs"
    ];
    return loadTemplates(templatePaths);
  }

  static ready() {
    console.log("Deathwatch | Sistema carregado e pronto!");
  }
}

// -----------------------------------------------------------
// Hooks
// -----------------------------------------------------------

Hooks.once("init", async function() {
  await DeathwatchSystem.initialize();
});

Hooks.once("ready", function() {
  DeathwatchSystem.ready();
});

// -----------------------------------------------------------
// Exemplo: Registro de Classes (descomente se possuir arquivos)
// -----------------------------------------------------------

// CONFIG.Actor.documentClass = DeathwatchActor;
// CONFIG.Item.documentClass = DeathwatchItem;

// Actors.registerSheet("deathwatch", DeathwatchActorSheet, { makeDefault: true });
// Items.registerSheet("deathwatch", DeathwatchItemSheet, { makeDefault: true });

// -----------------------------------------------------------
// Exemplo: Hook de debug simples
// -----------------------------------------------------------

Hooks.on("createActor", (actor, options, userId) => {
  if (game.settings.get("deathwatch", "enableDebug")) {
    console.log(`Deathwatch | Novo actor criado: ${actor.name}`);
  }
});
