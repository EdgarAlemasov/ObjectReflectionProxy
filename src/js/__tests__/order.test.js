import orderByProps from "../order";

test ("sorted function ver001", () => {
    const swordsman = {
        name: "QuickRage",
        health: 10,
        level: 2,
        attack: 80,
        defence: 40
    };
    const result = orderByProps(swordsman, ["name", "level"])
    expect(result).toEqual([
        { key: "name", value: "QuickRage" },
        { key: "level", value: 2 },
        { key: "attack", value: 80 },
        { key: "defence", value: 40 },
        { key: "health", value: 10 }
    ]);
});

test ("sorted function ver002", () => {
    const human = {
        name: "Alexander",
        health: 100,
        age: 30,
        sex: "male",
        education: "university degree",
        job: "software engineer"
    };
    const result = orderByProps(human, ["job", "name", "sex"]);
    expect(result).toEqual([
        { key: "job", value: "software engineer" },
        { key: "name", value: "Alexander" },
        { key: "sex", value: "male" },
        { key: "age", value: 30 },
        { key: "education", value: "university degree" },
        { key: "health", value: 100 }
    ]);
});
