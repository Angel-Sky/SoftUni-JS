function password(input) {
    let pattern = /(.+)>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]+)<\1/;
    let n = input.shift();

    for (let line of input) {
        let match = pattern.exec(line)
        if (match) {
            console.log("Password: " + match[2] + match[3] + match[4] + match[5]);
        } else {
            console.log("Try another password!");
        }
    }
}

password([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
  ]
  
  )