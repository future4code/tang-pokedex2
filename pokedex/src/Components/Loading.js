import React from 'react'
import styled from "styled-components"

const Div = styled.div`
        height: 80%;
        width: 100%;
        -webkit-animation: scale-up-center-loading 2.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both infinite;
                animation: scale-up-center-loading 2.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both infinite;

        .ball {
            position: relative;
            margin: auto;
            width: 10em;
            height: 10em;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(red 50%,white 50%);
            border-radius: 50%;

            box-shadow: 5px 5px 4px rgba(255,255,255,0.2);
            
            -webkit-animation: rotate-center-loading 2.5s ease-in-out both infinite;
	        animation: rotate-center-loading 2.5s ease-in-out both infinite;
            }
            .whiteCenter {
                position: absolute;
                background-color: white;
                border: 2px solid rgba(0,0,0,0.2);
                border-radius: 50%;
                width: 2em;
                height: 2em;
            }
            
          .blackCenter {
            position: absolute;
            background-color: black;
            border-radius: 50%;
            width: 3em;
            height: 3em;
          }

          .line{
              background-color:black;
              width:10em;
              height:1em;
          }
    `

export default function Loading() {
    return (
        <div>
            <Div>
                <div className={"ball"}>
                    <div className={"line"}></div>
                <div className={"blackCenter"}></div>
                <div className={"whiteCenter"}></div>
                </div>
                </Div>
            <p>Loading ...</p>
        </div>
    )
}
