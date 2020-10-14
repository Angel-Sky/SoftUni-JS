let solution = (function () {
    const commands = {
        upvote: (obj) => obj.upvotes++,
        downvote: (obj) => obj.downvotes++,
        score: (obj) => {
            let upvotes = Number(obj.upvotes);
            let downvotes = Number(obj.downvotes);
            let totalVotes = upvotes + downvotes;
            let balance = upvotes - downvotes;

            let obfuscated = 0;
            if (totalVotes > 50) {
                obfuscated = Math.ceil(0,25 * Math.max(upvotes, downvotes));
                upvotes += obfuscated;
                downvotes += obfuscated;
            }

            let rating = getRating(totalVotes, upvotes, downvotes, balance);

            return [upvotes, downvotes, balance, rating];
            
        }
    }

    function getRating(totalVotes, upvotes, downvotes, balance) {
        if (totalVotes < 10) {
            return 'new';
        }
        if ((upvotes / totalVotes) > 0.66) {
            return 'hot';
        }
        if ((downvotes / totalVotes <= 0.66) && balance >= 0 && (upvotes > 100 || downvotes > 100)) {
            return 'controversial';
        }
        if (balance < 0 && totalVotes >= 10) {
            return 'unpopular';
        }
        return 'new';
    }
    return {call:(obj, command) => commands[command](obj)};
})();

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

result.call(post, 'upvote');
console.log(result.call(post, 'score'));
