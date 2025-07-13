import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from '../components/NewsletterBox';
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[440px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ">
          <p>
            Clothsy is a contemporary online fashion brand committed to offering
            high-quality, stylish, and affordable clothing for modern
            individuals. We bring together design, comfort, and functionality to
            help our customers dress with confidence and ease.
          </p>
          <p>
            From timeless basics to trend-driven pieces, our collections are
            designed to meet the dynamic lifestyle of today’s generation. We
            cater to men, women, and children with a diverse range of apparel
            that reflects individuality and style.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Clothsy, our mission is to make fashion accessible, inclusive,
            and empowering for everyone. We believe that clothing is more than
            just a necessity — it's a form of self-expression and confidence.
            That’s why we are committed to offering high-quality, stylish, and
            affordable apparel that fits seamlessly into every lifestyle.
            Through thoughtful design, ethical sourcing, and a customer-first
            approach, we strive to create a shopping experience that is easy,
            enjoyable, and inspiring. Our goal is to help individuals look and
            feel their best, every day.
          </p>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className=" flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            At Clothsy, we uphold the highest standards of quality across all
            our products. Each garment undergoes meticulous inspection to ensure
            superior craftsmanship, comfort, and longevity.
          </p>
        </div>
         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Shop effortlessly with Clothsy — easy browsing, quick checkout, and fast delivery right to your doorstep. Your favorite styles, just a few clicks away!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
           At Clothsy, our dedicated support team is always ready to assist you with any questions or concerns, ensuring a smooth and satisfying shopping experience every time
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
