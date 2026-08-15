"use client";


import { Icon } from "@iconify/react";
import { useEffect } from "react";



export default function Start(){
    useEffect(()=>{
        let svgs = document.getElementsByTagName('svg')
        for(let i = 0 ; i< svgs.length; i++){
            let item = svgs[i]
            item.addEventListener("mouseenter",()=>{
                item.style.fill="red"
            })
            item.addEventListener("mouseleave",()=>{
                item.style.fill="black"
            })
        }
    },[])
    return(
        <div className="game-container">
            {/* these are the three*/}
            <div className="nav">
                <h1 className="game-title jersey">THE LAST DECISION</h1>

                <div className="icon-row">
                    <Icon icon="mdi:shield-check" className="icon" title="Security"></Icon>
                    <Icon icon="mdi:robot" className="icon" title="AI System"></Icon>
                    <Icon icon="mdi:cash" className="icon" title="Economy"></Icon>
                    <Icon icon="mdi:heart-pulse" className="icon" title="Health"></Icon>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <span className="jersey text-6xl text-black">
                    The Last Country
                </span>
            </div>
            {/*changing the map */}
            <div className="flex justify-evenly items-center">

            <div className="flex justify-center items-end mt-60">
                <svg width="66" height="171" viewBox="0 0 66 171" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 122.5L8.5 139C8.5 139 0.5 145.5 0.5 158C0.5 170.5 18.5 170.5 18.5 170.5H30.5L48.5 129.5L60 122.5V108V93V83V54.5V43L65.5 29.5V24.5V0.5H43L18.5 12L12 36V43L18.5 54.5L12 64.5L8.5 68V83V108L18.5 122.5Z" stroke="black"/>
                </svg>
            </div>
            <div className="flex justify-center items-center mb-60">
                <svg width="180" height="400" viewBox="0 0 480 542" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M105.5 0.5L33 119L57 170V223.5L30 242.5L0.5 333.5V449L156.5 511L315 540.5L379 449L478.5 255.5H315V73L347 0.5H105.5Z" stroke="black" strokeWidth={3}/>
                </svg>
            </div>
            <div className="flex justify-center items-center">
                <svg width="700" height="600" viewBox="0 0 4074 2211" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M1480.93 470.532L1432.43 866.532L1207.93 1036.03L1012.93 1174.53H612.426L302.926 1036.03L164.426 1265.03L2.42627 1522.03L188.426 1770.03L540.926 1936.53L883.926 2208.53H1093.93L2022.93 1936.53L2427.93 2070.03H2747.43H2980.93L3476.43 1713.03L3709.93 1355.53L4033.93 1036.03L4071.93 588.032L3947.93 94.0322L3442.93 35.5322L3056.93 2.03223L2603.43 176.532L2226.93 94.0322L1777.43 198.532L1480.93 470.532Z" stroke="black" strokeWidth={4}/>
                </svg>
            </div>
            <div className="flex justify-center items-start self-start">
                <svg width="200" height="400" viewBox="0 0 797 890" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M371.704 836.068L225.204 784.068C225.204 784.068 36.2036 711.568 43.7036 687.068C51.2036 662.568 81.2036 632.568 81.2036 632.568C81.2036 632.568 142.704 559.068 142.704 499.568C142.704 440.067 25.2036 401.568 25.2036 401.568L2.20361 377.568L43.7036 208.068L81.2036 175.068L142.704 120.568L292.704 67.5679H357.204L387.204 95.0679L357.204 234.568C357.204 234.568 490.704 307.068 554.704 307.068C618.704 307.068 625.704 249.068 638.204 208.068C650.704 167.068 679.204 175.068 679.204 175.068C679.204 175.068 531.704 175.068 530.204 126.568C528.704 78.0679 604.204 16.5679 604.204 16.5679C604.204 16.5679 638.204 -8.43208 690.204 7.06792C742.204 22.5679 747.204 126.568 747.204 126.568L794.204 307.068L690.204 347.068L596.704 431.568L604.204 521.568L747.204 640.068L658.704 687.068L495.204 640.068L439.204 711.568L565.204 809.568L474.704 843.568V887.068C474.704 887.068 423.704 887.068 371.704 878.568C319.704 870.068 371.704 836.068 371.704 836.068Z" stroke="black" strokeWidth={4}/>
                </svg>
            </div>
            <div className="flex justify-center items-center">
                <svg width="160" height="380" viewBox="0 0 864 1305" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M299.583 1059.5L366.083 1168.5L406.083 1224L586.083 1302L795.083 1255L861.583 999.5L586.083 673H446.083L235.083 557.5L193.083 397.5L235.083 217.5L175.083 100L139.583 2H26.5835L2.0835 77.5L77.5835 364.5L108.583 620L193.083 808.5L235.083 999.5L299.583 1059.5Z" stroke="black" strokeWidth={4}/>
                </svg>
            </div>
            </div>
            <div className="absolute bottom-3 right-3">
                <a href="/docs" className="jersey text-4xl docs">DOCS</a>
            </div>
            <div className="buttons flex justify-center items-center">
                <button className="flex justify-center items-center p-5 pr-15 pl-15 text-white jersey text-4xl rounded-4xl bg-black button">
                    <a href="/question">
                    Start
                    </a>
                </button>
            </div>
        </div>
    );
}