function emojiDetector(input) {
    let coolTreshold = input[0].match(/\d/g).map(Number).reduce((a, b) => a * b);
    let validEmojies = input[0].match(/([*]{2}|[:]{2})[A-Z][a-z]{2,}\1/g);
    console.log(`Cool threshold: ${coolTreshold}`)
    console.log(`${validEmojies.length} emojis found in the text. The cool ones are:`);

    for (let emoji of validEmojies) {
        let emojiName = emoji.substring(2, emoji.length-2);
        let points = 0;
        for (let char of emojiName) {
            points += char.charCodeAt(0);
        }

        if (points >= coolTreshold) {
            console.log(emoji)
        }       
    }
}

emojiDetector([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
  ]
  
  )