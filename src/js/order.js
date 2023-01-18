export default function orderByProps (obj, props) {
    const targetArray = [];
    const sortedArray = [];

    for (let item of props) {
        const information = {
          key: item,
          value: obj[item]
        };
        targetArray.push(information);
      };
    for (let item in obj) {
        if (!props.includes(item)) {
            const information = {
            key: item,
            value: obj[item]
        };
        sortedArray.push(information);
        };
    };

    sortedArray.sort((a, b) => (a.key > b.key ? 1 : -1));

    return [...targetArray, ...sortedArray]
};
