export default function getSpecial(obj) {
  const { special } = obj;
  const arr = [];

  if (!special) return [];

  for (let i = 0; i < special.length; i++) {
    arr.push({
      id: special[i].id,
      name: special[i].name,
      icon: special[i].icon,
      description: special[i].description ? special[i].description : 'Описание недоступно',
    });
  }
  return arr;
}
