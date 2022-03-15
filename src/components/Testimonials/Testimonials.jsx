import "./testimonials.scss";

import firstProfile from "../../images/profile-1.jpg";
import secondProfile from "../../images/profile-2.jpg";
import thirdProfile from "../../images/profile-3.jpg";

const testimonialsData = [
  {
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Satish Patel",
    role: "Founder & CEO, Huddle",
    image: firstProfile,
  },
  {
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Bruce McKenzie",
    role: "Founder & CEO, Huddle",
    image: secondProfile,
  },
  {
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Iva Boyd",
    role: "Founder & CEO, Huddle",
    image: thirdProfile,
  },
];

const Testimonials = () => {
  return (
    <section className='testimonial__container'>
      {testimonialsData.map((item, index) => {
        return (
          <div key={index} className='testimonial__card'>
            <p className='paragraph'>{item.text}</p>
            <div className='testimonial__card--heading'>
              <img src={item.image} alt={item.name} />
              <div className='testimonial__card--profile'>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Testimonials;
