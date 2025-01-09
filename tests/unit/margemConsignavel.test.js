const margemConsignavel = require("../../models/margemConsignavel.js");

test("1000 vezes 20% deveria retornar 200", () => {
  const valorDisponivel = margemConsignavel.calcularAntecipacao(1000, 0.2);
  expect(valorDisponivel).toBe(200);
});
