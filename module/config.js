/**
 * Configurações e constantes do sistema Deathwatch
 */

export const DEATHWATCH = {};

// Exemplo de atributos base de um Space Marine
DEATHWATCH.stats = {
  ws: "Weapon Skill",
  bs: "Ballistic Skill",
  s: "Strength",
  t: "Toughness",
  ag: "Agility",
  int: "Intelligence",
  per: "Perception",
  wp: "Willpower",
  fel: "Fellowship"
};

// Escalas de ferimento e fadiga
DEATHWATCH.derived = {
  wounds: "Wounds",
  fatigue: "Fatigue"
};
