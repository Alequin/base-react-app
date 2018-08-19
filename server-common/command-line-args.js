
function commandLineArgs (index){
    return process.argv.splice(2)[index]
}

module.exports = commandLineArgs