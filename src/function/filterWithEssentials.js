 

export const filterWithEssentials = (filter, list) => {
  let hlByEssentials = [...list];
  var totalTrue = 0;
  for (let i = 0; i < filter.amenities.essentials.length; i++) {
    let fakeX = [0, 1, 2, 0, 0, 1, 1, 2, 3, 0];
    if (filter.amenities.essentials[i]) {
      totalTrue += fakeX[i];
    }
  }
  if (hlByEssentials.length >= totalTrue) {
    hlByEssentials = hlByEssentials.slice(0, hlByEssentials.length - totalTrue);
  } else {
    hlByEssentials = [];
  }
  return hlByEssentials
}
  