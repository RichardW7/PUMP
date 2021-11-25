
import React, { useState } from 'react'
import settingsStyles from '../styles/settings.module.css'
import { Input } from 'antd';

const { Search } = Input;

function Settings(props) {

    function adjustTime(amount) {
        let newTime = props.time;
        newTime += amount*100;
        props.setTime(newTime);
    }

    function updateTeamOneName(value) {
        props.setTeamOneName(value)
    }

    function updateTeamTwoName(value) {
        props.setTeamTwoName(value);
    }

    function updateImage() {
        var file = URL.createObjectURL(document.getElementById('fileItem').files[0]);
        this.setTeamOneImage(file);
    }

    return (
        <div className={settingsStyles.fullBox}>
            <div className={settingsStyles.smallBox}>
                <h1>
                    Timer Manual Override
                </h1>
                <div>
                    <button onClick={()=>adjustTime(-1)}>←</button>
                    {("0" + Math.floor((props.time/6000)%60)).slice(-2) + ":" + ("0" + Math.floor((props.time/100)%60)).slice(-2)}
                    <button onClick={()=>adjustTime(1)}>→</button>
                </div>
            </div>
            <div className={settingsStyles.smallBox}>
                <h1>
                    Set Team 1
                </h1>
                <div>
                    Current Name: {props.teamOneName}
                    <Search 
                        enterButton="Enter" 
                        onSearch={updateTeamOneName}
                        style={{width: "100%"}} 
                        placeholder="enter a new team name..."
                    />
                    <input type="file" id="fileItem" onChange={()=>updateImage}/>
                </div>
            </div>
            <div className={settingsStyles.smallBox}>
                <h1>
                    Set Team 2
                </h1>
                <div>
                    Current Name: {props.teamTwoName}
                    <Search 
                        enterButton="Enter" 
                        onSearch={updateTeamTwoName}
                        style={{width: "100%"}} 
                        placeholder="enter a new team name..."
                    />
                    <input type="file" id="fileItem" onChange={()=>updateImage}/>
                </div>
            </div>
        </div>
    )
}

export default Settings;