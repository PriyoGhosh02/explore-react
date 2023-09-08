import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);

    const [toggle, setToggle] = useState('True');

    const handelToggle = () => {
        toggle === 'True' ? setToggle('False') : setToggle('True')
        //if (toggle === 'True')              else {

        // if (toggle === 'True') {
        //     setToggle('False');
        // } else {
        //     setToggle('True');
        // }
    }

    const handelAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handelRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }

    const teamStyle = {
        border: '2px solid yellow',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team} </h3>
            <button onClick={handelAdd}>Add Player</button>
            <button onClick={handelRemove}>Remove Player</button>
            <h3>Toggle:{toggle} </h3>
            <button onClick={handelToggle}>Now Toggle</button>
        </div>
    )
}