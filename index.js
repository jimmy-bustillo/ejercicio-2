const lista = [
  "Jimmy Bustillo",
  29,
  true,
  new Date(1993, 5, 16),
  (libro = {
    titulo: "Prisión Verde",
    autor: "Ramon Amaya Amador",
    fecha: 1950,
    url: "https://www.amazon.es/Prisi%C3%B3n-verde-Ram%C3%B3n-Amaya-Amador/dp/B01E9BLLCG",
  }),
];

console.log(lista[4].autor);
