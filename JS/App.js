let text = `"id": "aatrox",
"id": "ahri",
"id": "akali",
"id": "alistar",
"id": "amumu",
"id": "anivia",
"id": "annie",
"id": "aphelios",
"id": "ashe",
"id": "aurelionsol",
"id": "azir",
"id": "bard",
"id": "blitzcrank",
"id": "brand",
"id": "braum",
"id": "caitlyn",
"id": "camille",
"id": "cassiopeia",
"id": "chogath",
"id": "corki",
"id": "darius",
"id": "diana",
"id": "draven",
"id": "drmundo",
"id": "ekko",
"id": "elise",
"id": "evelynn",
"id": "ezreal",
"id": "fiddlesticks",
"id": "fiora",
"id": "fizz",
"id": "galio",
"id": "gangplank",
"id": "garen",
"id": "gnar",
"id": "gragas",
"id": "graves",
"id": "hecarim",
"id": "heimerdinger",
"id": "illaoi",
"id": "irelia",
"id": "ivern",
"id": "janna",
"id": "jarvaniv",
"id": "jax",
"id": "jayce",
"id": "jhin",
"id": "jinx",
"id": "kaisa",
"id": "kalista",
"id": "karma",
"id": "karthus",
"id": "kassadin",
"id": "katarina",
"id": "kayle",
"id": "kayn",
"id": "kennen",
"id": "khazix",
"id": "kindred",
"id": "kled",
"id": "kogmaw",
"id": "leblanc",
"id": "leesin",
"id": "leona",
"id": "lillia",
"id": "lissandra",
"id": "lucian",
"id": "lulu",
"id": "lux",
"id": "malphite",
"id": "malzahar",
"id": "maokai",
"id": "masteryi",
"id": "missfortune",
"id": "monkeyking",
"id": "mordekaiser",
"id": "morgana",
"id": "nami",
"id": "nasus",
"id": "nautilus",
"id": "neeko",
"id": "nidalee",
"id": "nocturne",
"id": "nunu",
"id": "olaf",
"id": "orianna",
"id": "ornn",
"id": "pantheon",
"id": "poppy",
"id": "pyke",
"id": "qiyana",
"id": "quinn",
"id": "rakan",
"id": "rammus",
"id": "reksai",
"id": "renekton",
"id": "rengar",
"id": "riven",
"id": "rumble",
"id": "ryze",
"id": "samira",
"id": "sejuani",
"id": "senna",
"id": "seraphine",
"id": "sett",
"id": "shaco",
"id": "shen",
"id": "shyvana",
"id": "singed",
"id": "sion",
"id": "sivir",
"id": "skarner",
"id": "sona",
"id": "soraka",
"id": "swain",
"id": "sylas",
"id": "syndra",
"id": "tahmkench",
"id": "taliyah",
"id": "talon",
"id": "taric",
"id": "teemo",
"id": "thresh",
"id": "tristana",
"id": "trundle",
"id": "tryndamere",
"id": "twistedfate",
"id": "twitch",
"id": "udyr",
"id": "urgot",
"id": "varus",
"id": "vayne",
"id": "veigar",
"id": "velkoz",
"id": "vi",
"id": "viktor",
"id": "vladimir",
"id": "volibear",
"id": "warwick",
"id": "xayah",
"id": "xerath",
"id": "xinzhao",
"id": "yasuo",
"id": "yone",
"id": "yorick",
"id": "yuumi",
"id": "zac",
"id": "zed",
"id": "ziggs",
"id": "zilean",
"id": "zoe",
"id": "zyra"`;

let test = text.split("\n");

let niz = [];
for (let i = 0; i < test.length; i++) {
  niz[i] = test[i].split(":");
}
for (let i = 0; i < test.length; i++) {
  console.log(niz[i][1].split('"')[1]);
}
