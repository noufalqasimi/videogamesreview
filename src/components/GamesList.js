import { useEffect, useState } from "react";
import axios from "axios";

function GamesList(){
    const [allGames, setAllGames] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:3008/getGames")
        .then((res)=>{setAllGames(res.data)})
    },[]);

    return(
        <>
        {
            allGames && allGames.map((Game)=>(
                <div>{Game.GameName}</div>
            ))
        }
        </>
    );
}

export default GamesList;