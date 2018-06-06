'use strict'

module.exports = {
    /**
     * Prints information about process memory usage, in MB
     */
    memoryUsage() {
        let mem = process.memoryUsage()
        let header = '-- Process memory usage'
        console.log('\n\n' + header + '-'.repeat(12))
        for (let k of Object.keys(mem)) {
            console.log(k.padEnd(12), ": ", ((parseInt(mem[k], 10) / 1024 / 1024).toFixed(2) + " MB").padStart(12))
        }
        console.log('-'.repeat(header.length + 12))
    }
}