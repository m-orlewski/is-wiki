import useAuth from "../hooks/useAuth";

const Home = () => {
    const { auth } = useAuth();
    return (
        auth?.roles?.find(role => role===5150)
        ? 
        <section>
            <h1 >Home</h1>
            <br />
            <p>You are logged in!</p>
        </section>
        :
        <section>
            <h1>Home</h1>
        </section>
    )
}

export default Home