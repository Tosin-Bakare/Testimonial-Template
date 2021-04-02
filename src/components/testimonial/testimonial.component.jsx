import React from "react";
import Avater from "../../assets/User_Avatar-removebg-preview (1).png";

const Testimonial = () => (
  <div>
    <h1 className="p-8 font-bold text-3xl" style={{ color: "#2F1893" }}>
      Testimonials
    </h1>
    <div className="flex ">
      <div className="" style={{ marginLeft: "150px" }}>
        <div className="px-10 flex items-center justify-center">
          <div className="flex justify-center py-2">
            <img className="h-20 w-20 rounded-full" src={Avater} />
          </div>
          <div className="py-4">
            <div className="flex jusify-center py-4 text-blue-900 text-left pl-4">
              I am amazed at how easy and user friendly the website is, DigiAjo
              has really helped me to <br /> save better and given me financial
              boyauncy.I love the app, I'll definitely recomment to my loved
              ones.
            </div>
            <div className="text-sm flex justify-left text-blue-900 pl-4">
              Tamilore Zaid
            </div>
          </div>
        </div>
        <div className="px-10 flex items-center justify-center">
          <div className="flex justify-center py-4">
            <img className="h-20 w-20 rounded-full" src={Avater} />
          </div>
          <div className="py-4">
            <div className="flex jusify-center py-4 text-blue-900 text-left pl-4">
              I am amazed at how easy and user friendly the website is, DigiAjo
              has really helped me to save better and given me financial
              boyauncy. <br /> I love the app, I'll definitely recomment to my
              loved ones.
            </div>
            <div className="text-sm flex justify-left text-blue-900 pl-4 ">
              Tamilore Zaid
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginRight: "150px" }}>
        <div className="px-10  flex items-center justify-center">
          <div className="flex justify-center py-4">
            <img className="h-20 w-20 rounded-full" src={Avater} />
          </div>
          <div className="py-4">
            <div className="flex jusify-center py-4 text-blue-900 text-left pl-4">
              I am amazed at how easy and user friendly the website is, DigiAjo
              has really helped me to save better and given me financial
              boyauncy. <br /> I love the app, I'll definitely recomment to my
              loved ones.
            </div>
            <div className="text-sm flex justify-left text-blue-900 pl-4">
              Tamilore Zaid
            </div>
          </div>
        </div>
        <div className="px-10  flex items-center justify-center">
          <div className="flex justify-center py-4">
            <img className="h-20 w-20 rounded-full" src={Avater} />
          </div>
          <div className="py-4">
            <div className="flex jusify-center py-4 text-blue-900 text-left pl-4">
              I am amazed at how easy and user friendly the website is, DigiAjo
              has really helped me to save better and given me financial
              boyauncy. <br /> I love the app, I'll definitely recomment to my
              loved ones.
            </div>
            <div className="text-sm flex justify-left text-blue-900 pl-4">
              Tamilore Zaid
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial;
