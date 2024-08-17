import ImgNull from '../../assets/img/img-section.svg'
export default function SectionHome() {
    return (
        <div className="section-home">
            <section>
                <div>
                    <h1>Resonate with the visitor's problem</h1>
                    <p>Describe exactly what your product or service does to solve this problem. Avoid using verbose words or phrases.</p>
                    <div className='button-content'>
                        <input type="text" placeholder='Enter your email' />
                        <button>Try it for free</button>
                        <p>By clicking Sign Up you're confirming that you agree with our <a href="#">Terms and Conditions.</a></p>
                    </div>
                </div>
                <img src={ImgNull} alt="Imagem vazia" />
            </section>
        </div>
    )
}