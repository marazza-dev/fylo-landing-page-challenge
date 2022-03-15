import "./features.scss";

import anywhereIcon from "../../images/icon-access-anywhere.svg";
import securityIcon from "../../images/icon-security.svg";
import collaborationIcon from "../../images/icon-collaboration.svg";
import anyIcon from "../../images/icon-any-file.svg";

const featuresData = [
  {
    title: "Access your files, anywhere",
    text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    image: anywhereIcon,
  },
  {
    title: "Security you can trust",
    text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    image: securityIcon,
  },
  {
    title: "Real-time collaboration",
    text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    image: collaborationIcon,
  },
  {
    title: "Store any type of file",
    text: "Whether you're sharing holidays photos or work documents Fylo has you covered allowing for all file types to be securely stored and shared.",
    image: anyIcon,
  },
];

const Features = () => {
  return (
    <section className='feature__container' id='features'>
      {featuresData.map((item, index) => {
        return (
          <div key={index} className='feature__card'>
            <img src={item.image} alt={item.title} className='feature__image' />
            <h2 className='heading__sub'>{item.title}</h2>
            <p className='paragraph'>{item.text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
