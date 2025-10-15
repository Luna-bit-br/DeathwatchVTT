/**
 * Helpers Handlebars para templates do sistema
 */
export function registerHandlebarsHelpers() {
  if (typeof Handlebars === "undefined") return;

  Handlebars.registerHelper("upper", str => (str || "").toUpperCase());
  Handlebars.registerHelper("lower", str => (str || "").toLowerCase());
  Handlebars.registerHelper("eq", (a, b) => a === b);
  Handlebars.registerHelper("neq", (a, b) => a !== b);
}
