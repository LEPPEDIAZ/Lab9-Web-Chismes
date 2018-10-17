
let currentId = 1;

export const saveUser = (
  Titulo,
  lastName,
  chisme,
  email,
) => new Promise(
  resolve => setTimeout(
    () => resolve({
      id: currentId++,
      Titulo,
      lastName,
      chisme,
      email,
    }),
    Math.floor(Math.random() * 10000),
  ),
);
