import "./About.css";
import customImage from "../../assets/renita.jpg";

function About() {
  return (
    <div className="about">
      <img src={customImage} className="about__image" />
      {/*  */}
      <h1 className="about__header">About Me:</h1>
      <p className="about__text">
        About Me I'm Renita Williams, a dedicated and experienced real estate
        agent serving the Richmond, Virginia area. With over 20 years in the
        industry, I specialize in helping first-time homebuyers, investors, and
        families find their perfect property. My mission is to make your real
        estate journey as seamless and stress-free as possible. I take pride in
        offering personalized services, from understanding your unique needs to
        negotiating the best deal for you. Whether you're buying or selling, my
        in-depth knowledge of the local market and commitment to excellence will
        ensure a successful transaction. When I'm not helping clients achieve
        their real estate goals, you can find me [insert personal hobbies or
        interests]. Contact me today for a free consultation and let’s get
        started on your next real estate adventure!
      </p>
    </div>
  );
}

export default About;
