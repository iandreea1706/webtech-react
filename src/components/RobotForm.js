import React, {useState} from "react";
import store from "../stores/RobotStore";

function RobotForm() {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [mass, setMass] = useState("");

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeType = (event) => {
        setType(event.target.value)
    }

    const onChangeMass = (event) => {
        setMass(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        addRobot()
    }

    const addRobot = () => {

        let actualMass = mass;
        
        if(parseInt(mass) < 500){
            actualMass = ""
        }
        const robot = {
            type: type,
            name: name,
            mass: actualMass
        }

        store.addRobot(robot)
    }

      return(
        <>
            <form style={{display: "flex", flexDirection: "column", marginTop: "50px"}} onSubmit={onFormSubmit}>
                <input id="name" type="text" onChange={onChangeName} placeholder="name"/>
                <input id="type" type="text" onChange={onChangeType} placeholder="type"/>
                <input id="mass" type="text" onChange={onChangeMass} placeholder="mass"/>

                <button type="submit" style={{marginTop: "20px"}}>add</button>
            </form>
        </>
      )
}


export default RobotForm
