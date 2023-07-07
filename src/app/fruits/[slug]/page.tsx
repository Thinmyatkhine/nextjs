// eslint-disable-file

const fruits = [
  {
    id: 0,
    name: "banana",
  },
  {
    id: 1,
    name: "Strawberry",
  },
  {
    id: 2,
    name: "apple",
  },
  {
    id: 3,
    name: "Mango",
  },
];

interface FruitProps {}

function Fruit({ params }: any) {
  const slug = params.slug;
  function get_fruit_from_slug() {
    if (slug) {
      const fruit = fruits.find((item) => item.id == slug);
      if (fruit) {
        return fruit.name;
      }
    }
    return "fruit not found";
  }
  return (
    <main>
      {/* {slug && fruits[slug]?.name}  */}
      {get_fruit_from_slug()}
    </main>
  );
}

export default Fruit;
