"use client"
import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {
    text: string;
    subtext: string;
};

const TypeWriterTitle = (props: Props) => {
    return (
        <Typewriter
            options={{
                loop: true,
            }}
            onInit={(typewriter) => {
                typewriter
                .typeString(props.text)
                .pauseFor(1000).deleteAll()
                .typeString(props.subtext)
                .start()
            }}
        ></Typewriter>
    )
}

export default TypeWriterTitle