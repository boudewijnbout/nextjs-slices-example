import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import styles from "../styles/components/Hero.module.css";

const Hero = ({slice, backgroundImageUrl}) => {    
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <PrismicNextImage image={slice.primary.image.url} />
            <PrismicRichText field={slice.primary.title} />
        </section>
    )
}

export default Hero;