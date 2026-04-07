'use client';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/compat/router';
import { text, curve, translate } from './anim';
import styles from './anim.module.css'

const routes : Record<string, string> = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact"
} 

const anim = (variants: any) => {
    return {
        variants,
        initial: "initial",
        animate: "enter",
        exit: "exit"
    }
}

export default function Curve({children , backgroundColor}: {children: React.ReactNode, backgroundColor: string}) {
    const router = useRouter();
    const [dimensions, setDimensions] = useState({
        width: 1,
        height: 1
    } as {width: number , height: number })

    useEffect( () => {
        function resize(){
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        resize();
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])
    console.log(dimensions);
    return (
    <div className={`${styles.page} ${styles.curve}`} style={{backgroundColor}}>
       <div style={{opacity: dimensions.width == null ? 1 : 0}} className={styles.background}/>
       <motion.p className={styles.route} {...anim(text)}>
            {routes[router?.route != null ? router.route : "/"] || "Home"}
        </motion.p>
       {dimensions.width != null && <SVG {...dimensions}/>}
        {
            children
        }
    </div>
    )
}

const SVG = ({height = 0, width=0}: {height?: number , width?: number}) => {

    const initialPath = `
        M0 300 
        Q${width/2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width/2} ${height + 600} 0 ${height + 300}
        L0 0
    `

    const targetPath = `
        M0 300
        Q${width/2} 0 ${width} 300
        L${width} ${height}
        Q${width/2} ${height} 0 ${height}
        L0 0
    `

    return (
        <motion.svg {...anim(translate)} className={styles.svg}>
            <motion.path {...anim(curve(initialPath, targetPath))} />
        </motion.svg>
    )
}