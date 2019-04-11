const fs = require('fs')
const lineReader = require('readline')
    .createInterface({
        input: require('fs').createReadStream('nmd.clr')
    })

nmd = {}

lineReader.on('line', line => {
    split = line.split(' ')
    if (split.length > 6) {
        namn = split.splice(6).join(' ')
        if (namn.length > 0) {
            nmd[split[0]] = namn
        }
    }
})

lineReader.on('close', () => {
    console.log(JSON.stringify(nmd, null, 4))
    fs.writeFileSync('nmdklasser.json', JSON.stringify(nmd, null, 4))
})
