"use client";
import Typewriter from "typewriter-effect";
import React from "react";

function Landing() {
  const images = [
    {
      src: "YM-photo1.png",
      class:
        "left-5 lg:left-[-2%] sm:left-[10%] top-1/3 sm:top-[35%] sm:top-60",
    },
    {
      src: "YM-photo2.png",
      class: "top-1/3 right-8 sm:top-72 sm:right-[10%] lg:right-28",
    },
    {
      src: "YM-photo3.png",
      class: "right-1/4 sm:right-[10%] lg:right-1/3 bottom-1/2 sm:bottom-64",
    },
  ];
  return (
    <article className="landing text-white flex flex-col sm:flex-row justify-between items-center">
      <section className="w-full h-1/2 sm:h-full sm:w-1/2 text-center flex justify-center items-center">
        <h1 className="font-mono text-2xl font-bold main-color-text overflow-hidden space">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("hi I’m Yousef Mostafa,")
                .typeString("<br/>")
                .typeString("I’m a Full-Stack Developer,")
                .typeString("<br/>")
                .typeString("skilled in creating modern,")
                .typeString("<br/>")
                .typeString("efficient and scalable web applications.")
                .callFunction(() => {
                  typewriter.stop(); // Stops further actions
                })
                .start();
            }}
            options={{
              delay: 60,
            }}
          />
        </h1>
      </section>
      <section className="right-side w-full sm:w-1/2 h-3/4 sm:h-full">
        <div className="img-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={`./image/${image.src}`}
              alt={`Yousef-img-${index}`}
              className={`absolute w-56 h-56 lg:w-72 lg:h-72 rounded-full ${image.class}`}
            />
          ))}
        </div>
      </section>
    </article>
  );
}

export default Landing;
