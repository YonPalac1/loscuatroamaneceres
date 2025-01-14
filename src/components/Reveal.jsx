import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children, width = "fit-content", delay }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }
    }, [isInView])

    return (
        <div ref={ref} 
        className="reveal">
            <motion.div
                variants={{
                    hidden: { opacity: 0, width: "fit-content" },
                    visible: { opacity: 1, width: "fit-content" },
                }}
                className="content-reveal"
                initial="hidden"
                animate={mainControls}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: delay }}
            >{children}</motion.div> 
        </div >)
}