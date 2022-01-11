import Image from 'next/image';
import classes from './Hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src={'/images/site/matheus.png'} alt="An image showing Matheus" width={300} height={300} />
            </div>
            <h1>Hi, I am Matheus</h1>
            <p>I blog about web development - especially frontend framework like Angular or React.</p>
        </section>
    );
};

export default Hero;
