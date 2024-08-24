import "./style.css"

export default function Card(props) {
    return (

        <div className="card-container">
            <h1>{props.title}</h1>

            <h1>{props.description}</h1>

            <img src={props.image} />

        </div>

    )
}