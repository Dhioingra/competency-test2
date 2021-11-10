let total_uang = 1000000000;
tahun = 2;

function investation (total_uang, tahun){
    let bank = total_uang * 0.35;
    let bonds = total_uang * 0.65;
    let obligasi_negara = obligasi * 0.3;
    let sahamA = obligasi * 0.35;
    let sahamB = obligasi * 0.35;

    for(let i = 0; i < years; i++){
        bank += (bank * (3.5/100));
        obligasi_negara += (obligasi_negara * (13/100));
        sahamA+= (sahamA* (14.5/100));
        sahamB += (sahamB * (12.5/100));
    }
    console.log(`total uang dalam ${tahun} tahun: Rp. ${bank + obligasi_negara + sahamA + sahamB}`)
}

investation(total_uang, tahun);
