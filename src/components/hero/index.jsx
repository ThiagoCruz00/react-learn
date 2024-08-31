import './style.css'
import ImgNull from '../../assets/img/img-section.svg'

// export default function Hero(){
//     return(
//         <div className="hero-container">
//             <img src={ImgNull} alt="Imagem nula" />
//             <div className="hero-text">
//                 <h6>Feature one</h6>
//                 <h2>Describe benefit of feature one</h2>
//                 <p>Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers.</p>
//                 <button>Learn more</button>
//             </div>
//         </div>
//     )
// }


export default function Hero({ aligment }) {
    return (
        <div className={`hero-container hero-${aligment}`}>
            <img src={ImgNull} alt="" />
            <div className="hero-text">
                <h6>Feature one</h6>
                <h2>Describe benefit of feature one</h2>
                <p>Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers.</p>
                <button>Learn more</button>
            </div>
        </div>
    )
}