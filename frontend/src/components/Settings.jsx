
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

    function updateTeamOneImage() {
        var file = URL.createObjectURL(document.getElementById('teamOneImage').files[0]);
        props.setTeamOneImage(file);
    }

    function updateTeamTwoImage() {
        var file = URL.createObjectURL(document.getElementById('teamTwoImage').files[0]);
        props.setTeamTwoImage(file);
    }

    return (
        <div className={settingsStyles.fullBox}>
            <div className={settingsStyles.smallBox}>
                <div className={settingsStyles.boxTitle}>
                    Timer Manual Override
                </div>
                <div className={settingsStyles.timerBox}>
                    <button style={{"margin": "1%", "color": "black"}} onClick={()=>adjustTime(-60)}>←←</button>
                    <button style={{"margin": "1%", "color": "black"}} onClick={()=>adjustTime(-1)}>←</button>
                    {("0" + Math.floor((props.time/6000)%60)).slice(-2) + ":" + ("0" + Math.floor((props.time/100)%60)).slice(-2)}
                    <button style={{"margin": "1%", "color": "black"}} onClick={()=>adjustTime(1)}>→</button>
                    <button style={{"margin": "1%", "color": "black"}} onClick={()=>adjustTime(60)}>→→</button>
                </div>
            </div>
            <div className={settingsStyles.smallBox}>
                <div className={settingsStyles.boxTitle}>
                    Set Team 1
                </div>
                <div className={settingsStyles.subBox}>
                    <div>
                        Current Name: {props.teamOneName}
                        <Search 
                            enterButton="Enter" 
                            onSearch={updateTeamOneName}
                            style={{width: "100%"}} 
                            placeholder="enter a new team name..."
                        />
                    </div>
                    <div className={settingsStyles.subBox}>
                        Change Team Image
                        <input type="file" id="teamOneImage" onChange={()=>updateTeamOneImage()}/>
                    </div>
                </div>
            </div>
            <div className={settingsStyles.smallBox}>
                <div className={settingsStyles.boxTitle}>
                    Set Team 2
                </div>
                <div className={settingsStyles.subBox}>
                    <div>
                        Current Name: {props.teamTwoName}
                        <Search 
                            enterButton="Enter" 
                            onSearch={updateTeamTwoName}
                            style={{width: "100%"}} 
                            placeholder="enter a new team name..."
                        />
                    </div>
                    <div className={settingsStyles.subBox}>
                        Change Team Image
                        <input type="file" id="teamTwoImage" onChange={()=>updateTeamTwoImage()}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;