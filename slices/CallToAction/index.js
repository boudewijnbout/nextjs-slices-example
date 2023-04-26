import Cta from "@/components/CallToAction";


const CallToAction = ({ slice }) => {
  return (
    <Cta slice={slice} backgroundImageUrl={slice.primary.image.url} />
  );
};

export default CallToAction;
