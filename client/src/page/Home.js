// @flow
import * as React from 'react';
import {useRef} from 'react';
import {useRive, useStateMachineInput} from "@rive-app/react-canvas";

export const Home = () => {
    // to display the logo once
    const logoShow = useRef(false);
    // to display the medals once
    const medalShow = useRef(false);

    const { rive, RiveComponent } = useRive({
        src: "/animation.riv",
        stateMachines: "State Machine 1",
        autoplay: false,
    });

    const medalReveal = useStateMachineInput(
        rive,
        "State Machine 1",
        'show medals',
        false,
        );


    React.useEffect(() => {
        if(!rive || logoShow.current) return;
        logoShow.current = true;
        setTimeout(() => {
            rive?.play();
        }, 1000);
    }, [rive]);

    React.useEffect(() => {
        /**
         * TODO maybe never
         * 1. load the medals in text inside animation
         * 2. change stroke with depending of total medals per continent
         * 3. show medals
        */
        if(!medalReveal || medalShow.current) return;
        medalShow.current = true;
        setTimeout(() => {
            medalReveal.value = true;
        }, 3500);
    }, [medalReveal]);

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
        }}>
            <RiveComponent />
        </div>
    );
};