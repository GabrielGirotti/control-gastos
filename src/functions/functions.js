// Generando ID

export const generarId = () => {
  const random = Math.random().toString(36).substring(2);
  const fechaRandom = Date.now().toString(36);

  return random + fechaRandom;
};
