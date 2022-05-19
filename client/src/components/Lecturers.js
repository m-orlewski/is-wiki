import { Link } from "react-router-dom"

const Lecturers = () => {
    return (
        <section>
            <h1>Lecturers Page</h1>
            <br />
            <p>Lecturers</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Lecturers