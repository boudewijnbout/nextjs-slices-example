import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import styles from "../styles/components/Cta.module.css";

const Cta = ({slice, backgroundImageUrl}) => {    
    return (
        <section className={styles.section} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <PrismicNextImage image={slice.primary.image.url} />
            <PrismicRichText field={slice.primary.title} />
        </section>
    )
}

export default Cta;