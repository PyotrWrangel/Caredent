import { useEffect, useState } from "react";

function Dashboard() {

    const [username, setUsername] = useState("");

    useEffect(() => {
        fetch("http://localhost/CaredentBackEnd/BackEnd/session.php", {
            method: "GET",
            credentials: "include"
        })
        .then(res => res.json())
        .then(data => {
            if(data.logged) {
                setUsername(data.username);
                console.log("username: " , data.username)
            }
        })
    }, []);


    return (
        <>
        <h1 className="text-white">Ciao, {username} , Benvenuto nella tua area personale</h1>
        </>
    )
}

export default Dashboard;