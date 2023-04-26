import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Hero from "../../src/components/Hero";

const HeroSlice = ({ slice }) => {
  return (
    <Hero slice={slice} backgroundImageUrl={slice.primary.image.url} />
  )
};

export default HeroSlice;
