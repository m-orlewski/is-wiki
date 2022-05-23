import logo from "../images/1.svg";

const Profil = () => {
    return (
        <section>
            <div className="profile">
                <img src={logo} alt="Logo" width="150px" height="150px"/>
                <button>Edit profile</button>
            </div>
            <div className="profile-content">
                <h2>First Name</h2>
                <h5>Tomasz</h5>
                <br/><br/>
                <h2>Last Name</h2>
                <h5>Szkaradek</h5>
                <br/><br/>
                <h2>Index Number</h2>
                <h5>41984</h5>
                <br/><br/>
                <h2>Email</h2>
                <h5>tszkaradek@student.agh.edu.pl</h5>
                <br/><br/>
                <h2>Joined</h2>
                <h5>01.02.2022</h5>
                <br/><br/>
                <h2>About</h2>
                <h5>Student of AGH</h5>
            </div>
            <div className="profile-content" style={{width: '48%'}}>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h1>COMMENTS</h1>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            <div className="profile-content">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h1>FRIENDS</h1>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            <div style={{clear: 'both'}}/>
            
        </section>
    )
}

export default Profil