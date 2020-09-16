function mirrorWords(string) {
    let pattern = /([#@])(?<firstWord>[A-Za-z]{3,})\1{2}(?<secWord>[A-Za-z]{3,})\1/g;
    let matches = pattern.exec(string[0]);
    let mirrorWords = {};
    let validPairs = 0;
    let output = [];

    if (!matches) {
        console.log("No word pairs found!");
        console.log("No mirror words!");
    } else {
        while (matches) {
            let { firstWord, secWord } = matches.groups;
            let reversedSecWord = secWord.split("").reverse().join("");

            if (firstWord === reversedSecWord) {
                mirrorWords[firstWord] = secWord;
            }

            validPairs++;
            matches = pattern.exec(string[0]);
        }

        console.log(`${validPairs} word pairs found!`);

        if (Object.keys(mirrorWords).length === 0) {
            console.log("No mirror words!");
        } else {
            Object.entries(mirrorWords).forEach(el => {
                output.push(el.join(" <=> "))
            });
            console.log("The mirror words are:");
            console.log(output.join(", "));
        }
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
  ])

mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])

mirrorWords(['#l1l#l1l# @#G1d@@d1G@# #a1C@@C1a# @X1u@#u1X#'])