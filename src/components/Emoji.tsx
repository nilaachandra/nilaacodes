"use client"
import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

export default function Emoji() {
    const [currentEmoji, setCurrentEmoji] = useState({ value: "🚀", key: 0 })
    const emojis = [
        "🚀", "🦀", "🐞", "🦗", "🦟", "🪲", "⚽", "👽", "🛸", "🪐", "🌌", "🌠", "🌕",
        "🌑", "🌤️", "🌧️", "🌈", "🌙", "🌟", "🐱", "🐶", "🦄", "🦁", "🦉", "🦋", "🌺",
        "🌻", "🍉", "🍎", "🍕", "🍔", "🍣", "🚗", "🚲", "✈️", "🚀", "🛳️", "⛴️", "🌍",
        "🌎", "🌏", "🏔️", "🏜️", "🏝️", "🏞️", "🏛️", "🏠", "🏢", "🏬", "🏨", "🏩", "🏪",
        "🏫", "🏭", "🏯", "🏰", "🏗️", "🌋", "🔥", "💧", "🌊", "🌪️", "⛈️", "🌈", "🌠",
        "⭐", "💫", "✨", "🎉", "🎊", "🎈", "🎁", "🎂", "🍰", "🍩", "🍪", "🍫", "🍬",
        "🍭", "🎤", "🎧", "🎷", "🎸", "🎻", "🎺", "🎹", "🎬", "🎮", "🎲", "🎯", "🧩",
        "🎳", "🧸", "🪅", "🧩", "🧸", "🧩",
    ]
    const controls = useAnimation()

    useEffect(() => {
        const interval = setInterval(() => {
            controls.start({ opacity: 0, transition: { duration: 0.2 } })
                .then(() => {
                    setCurrentEmoji(prev => {
                        const nextIndex = (prev.key + 1) % emojis.length
                        return { value: emojis[nextIndex], key: nextIndex }
                    })
                    controls.start({ opacity: 1, transition: { duration: 0.2 } })
                })
        }, 2000) // Interval for emoji change

        return () => clearInterval(interval)
    }, [controls, emojis])

    return (

        <motion.div
            className="flex items-center"
            animate={controls}
        >
            {currentEmoji.value}
        </motion.div>
    )
}
