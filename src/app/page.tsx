// sections
import Hero from "./hero";
import Skills from "./skills";
import Resume from "./resume";
import Testimonial from "./testimonial";
import ContactForm from "./contact-form";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Resume />
      <Testimonial />
      <ContactForm />
    </>
  );
}
