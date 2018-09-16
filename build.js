const j = require('./macro-to-micro.json');
const iso6393 = require('./iso6393.json')

let newj = {};
let keys = Object.keys(j)
for(k of keys){
    let micros =j[k];
    for (m of micros){
        newj[Object.keys(m)[0]] = k;
    }
}


let finalj = {}
for (l of iso6393){
    
    let macro = newj[l.iso6393];
    if (macro){
        let val = iso6393.filter((v)=>{
            if (v.iso6393 === macro)
                return true
            else
                return false
        });
        if (val && val.length && val[0].iso6391){
            finalj[l.iso6393] = val[0].iso6391;
        }

    }
    else if (l.iso6391)
        finalj[l.iso6393] = l.iso6391;
}

const fs = require('fs')

fs.writeFile('6393-6391.json', JSON.stringify(finalj, 0, 2),(err,res)=>{
    console.log(`file save opertion returned error ${err} and result ${res} `)
})

