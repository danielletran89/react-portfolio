import React from 'react'
import fam from '../components/public/image/fam.jpg'

function About() {
    return (
        <section id="container-about" className="container-about">
            <h1>About Me</h1>

            <img src={fam} width="180" height="180" alt="family"/>
                <p> I like to think of myself as a "Jack of all trades" since I have done many things in my short life. I started out working at a daycare at age 17 then joined the US Coast Guard when I was 20. In the military I sailed the seas, lived in Hawaii and worked on an amazing ship. You name it, I've done it. From being a flight attendant to a currently working as a dental assistant, I have a ton of work and life experience to bring to the table.
                Being a first time mom to a wild 18 month old girl, I want to show her life is full of opportunities as long as you put yourself out there and try. I can't wait to get started with my web developing career and see where this chapter in my life takes me and my beautiful family.
                </p>
        </section>
        )
    }

export default About