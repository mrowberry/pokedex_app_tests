import styled from "styled-components";
import {animated, useSpring} from "react-spring";
import React from "react";

const Spring = styled(animated.div)`
`;

const Bounce: React.FC = ({children}) => {
    const [styles, api] = useSpring(() => ({
        config: {
            clamp: true,
            friction: 20,
        },
        from: { translateY: 0 },
        to: { translateY: -10 },
        loop: {
            reverse: true
        },
        pause: true
    }))

    return (
        <Spring style={styles}
            onMouseEnter={() => {
                api.start({pause: false})
            }}
            onMouseLeave={() => {
                api.pause()
            }}
        >
            {children}
        </Spring>
    )
}

export default Bounce