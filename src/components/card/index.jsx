import './style.css'
import Caixote from '../../assets/img/Caixote.svg'

export default function Card({title, description, scr, alt }) {
    return (
        <>
        <section className='carta-content'>
            <div className='card-container'>
               <img src={scr} alt={alt} />
               <h2>{title}</h2>
               <p>{description}</p>

            </div> 
            
            <div className='card-container'>
                <img src={Caixote} alt="Imagem de uma caixa" />
                <h2>Highlight benefit two</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div> 
            
            <div className='card-container'>
                <img src={Caixote} alt="Imagem de uma caixa" />
                <h2>Highlight benefit two</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div> 
        </section>

        </>



    )
}