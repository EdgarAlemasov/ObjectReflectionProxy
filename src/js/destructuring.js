export default function destructuring (character) {
    const targetArray = [];
    for (let object of character["special"]) {
      if (object["description"] === undefined) {
        const information = {
          id: object["id"],
          name: object["name"],
          icon: object["icon"],
          description: "Описание недоступно"
        };
        targetArray.push(information);
      } else {
        targetArray.push(object);
      }
    }
    return targetArray
}
