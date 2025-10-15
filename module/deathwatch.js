/**
 * module/deathwatch.js
 * Esqueleto de inicialização compatível com Foundry v13 build 346
 */

Hooks.once("init", () => {
  console.log("Deathwatch | Inicializando Deathwatch System (v13 compat)");

  // Registrar settings como exemplo (adapte conforme necessário)
  game.settings.register("deathwatch", "exampleSetting", {
    name: "Deathwatch Example Setting",
    hint: "Um exemplo de setting para o sistema Deathwatch.",
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });

  // Registre sheets customizados aqui (exemplo comentado)
  // Actors.registerSheet("deathwatch", DeathwatchActorSheet, { makeDefault: true });

  // Preload templates se houver templates handlebars
  if (typeof loadTemplates === "function") {
    // Exemplo: loadTemplates(["templates/some-template.hbs"]);
  }
});

Hooks.once("ready", async () => {
  console.log("Deathwatch | Sistema pronto.");
  // Checagens pós-init (ex: migrar world data)
  try {
    // migrationCheck();
  } catch (err) {
    console.error("Deathwatch | Erro em ready hook:", err);
  }
});

// Exemplo de hook para quando um actor é criado (apenas para evitar erros de API)
Hooks.on("createActor", (actor, options, userId) => {
  // lógica se necessário
  // console.log("Deathwatch | actor criado:", actor.id);
});
