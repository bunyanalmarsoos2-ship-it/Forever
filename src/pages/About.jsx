import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from './../components/NewsLetterBox';
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
            adipisicing elit. adipisicing elit.lorem15 Nesciunt voluptas placeat
            perferendis consequuntur Enim, natus. amet consectetur adipisicing
            elit. Atque sit minima, cumque expedita, assumenda asperiores hic
            praesentium officia numquam, adipisci ratione consequatur sequi
            libero iure.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.lorem15
            Nesciunt voluptas placeat perferendis consequuntur adipisicing
            elit.lorem15 Nesciunt voluptas placeat perferendis consequuntur
            soluta modi et iusto? Aut veniam corrupti maxime quos temporibus
            illo? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptas soluta omnis modi alias aperiam facere!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.adipisicing
            elit.lorem15 Nesciunt voluptas placeat perferendis consequuntur Quis
            cum ex eius deserunt accusamus, aspernatur debitis reiciendis
            obcaecati.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:gap-y-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis delectus sequi itaque quam nisi. Molestiae officiis labore harum quo blanditiis vitae fuga.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:gap-y-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis delectus sequi itaque quam nisi. Molestiae officiis labore harum quo blanditiis vitae fuga.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:gap-y-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis delectus sequi itaque quam nisi. Molestiae officiis labore harum quo blanditiis vitae fuga.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
