function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`),
  };
}

function attackerAndWalker({ name }) {
  return {
    attack: () => console.log(`${name} attacked`),
    walk: () => console.log(`${name} walked`),
  };
}

function flyer({ name }) {
  return {
    fly: () => console.log(`${name} flew`),
  };
}

//Easy to add more with no classes, no inheritance. Not worry about OOPs
function SwimmingMonsterCreator(name) {
  const monster = { name };

  return {
    ...monster,
    ...swimmer(monster),
    ...attackerAndWalker(monster),
  };
}

const obj = SwimmingMonsterCreator("Monster");

obj.attack();
obj.walk();
obj.swim();
