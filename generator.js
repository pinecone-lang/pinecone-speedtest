const fs = require("fs");

function generateJSON(count) {
    let str = "{\n";

    for (let i = 0; i <= count; i++)
    {
        str += `    "str${i}": "Some String",\n`;
        str += `    "int${i}": 0,\n`;
        str += `    "fl${i}": 0.15,\n`;
        str += (`    "arr${i}": ["x", "y", "z"]` + (i < count ? "," : "") + "\n");
    }

    str += "}"

    fs.writeFileSync("dummy.json", str);

    return str;
}

function generatePINECONE(count) {
    let str = "";

    for (let i = 0; i <= count; i++)
    {
        str += `str${i}: string = "Some String"\n`;
        str += `int${i}: int = 0\n`;
        str += `fl${i}: float = 0.15\n`;
        str += `arr${i}: string[] = ["x", "y", "z"]\n`;
    }

    fs.writeFileSync("dummy.pc", str);

    return str;
}

generateJSON(60000);
generatePINECONE(60000);