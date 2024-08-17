import './styles.css'

export default function Header() {
    return(
        <div className="header-container">
            <header>
                <h1>Logo</h1>
                <nav>
                    <a href="#">Link one</a>
                    <a href="#">Link two</a>
                    <a href="#">Link three</a>
                    <a href="#">Link four</a>
                </nav>

                <button>Try it for free</button>
            </header>
        </div>
    )
}