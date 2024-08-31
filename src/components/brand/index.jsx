import React from 'react';
import '../brand/style.css'
import Discover   from   '../../../src/assets/img/Discover.svg'
import Mastercard from '../../../src/assets/img/Mastercard.svg'
import Visa from       '../../../src/assets/img/Visa.png'
import Maestro from    '../../../src/assets/img/Maestro.svg'


const brandImages = {
    Mastercard,
    Discover,
    Visa, 
    Maestro
}

export default function Brand({ brand }) {
    const ImageSrc = brandImages[brand]

    return(
        ImageSrc ? (
            <img src={ImageSrc} alt={`imagem da badeira ${brand}`} />
        ) : (
            <h1>Selecione uma prop de badeira disponivel</h1>
        )
    ) 
    
        
}


// export default function Brand({brand}){
//     switch(brand) {
//         case 'american': return <img src={Discover} alt=' logo Discover' />;
//         case 'mastercard': return <img src={Mastercard} alt=' logo Mastercard' />;
//         case 'visa': return <img src={Visa} alt=' logo Visa' />;
//         case 'maestro': return <img src={Maestro} alt=' logo Maestro' />
//         default: return <h1>Selecione uma brand disponível</h1>
//     }
// }