"use client";

import Link from "next/link";
import Header from "./components/layouts/header/Header";
import Scrolldown from "./components/scrolldown/Scrolldown";
import Projects from "./components/projects/Projects";
import Expertise from "./components/Expertise";
import Typewritter from "./components/typewritter/Typewritter";
import Marquee from "./components/marquee_logo/Marquee_Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="min-h-screen" id="main">
      <Header />
      {/* Banner */}
      <section className="min-h-screen mx-auto px-4 py-24 relative flex justify-center">
        <div className="container mx-auto">
          <h4 className="md:text-3xl text-xl md:text-start text-center tracking-wide">
            Hello, my name is
          </h4>
          <h1 className="heading_1">
            Ang <br />
            Guan Xuan
          </h1>
          <h4 className="md:text-4xl text-2xl md:text-start text-center font-semibold tracking-wide">
            Website & Design
          </h4>
          <div className="flex md:flex-row flex-col justify-between my-20">
            <div className="md:w-6/12 md:mb-0 mb-10 md:text-start text-center">
              <h3 className="font-semibold text-lg">Let&apos;s Talk</h3>
              <Link
                href="mailto:stephanoxuan@gmailcom?subject=Come%20Work%20for%20Us!&body=Please%20come%20and%20work%20for%20us%20!%0D%0A%0D%0ACheers%2C%0D%0AHappy%20Company"
                target="_blank"
                className="mt-3 hover:text-neutral-400"
              >
                stephanoxuan@gmail.com
              </Link>
            </div>
            <div className="md:w-6/12">
              <p className="text-justify">
                Unlock the full potential of your online presence with our
                expert website development services &#8722; let&apos;s create a
                website that truly represents your brand and engages your
                audience effectively.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10">
          <Scrolldown />
        </div>
      </section>
      {/* Banner End */}
      {/* Project */}
      <section className="mx-auto px-4 py-24 flex justify-center" id="project">
        <div className="container">
          <div className="flex flex-row justify-between">
            <div>
              <h2 className="heading_2">Projects</h2>
              <p className="text-justify md:w-8/12 sm:w-10/12 w-full mt-3">
                I excel in collaborative project environments, leveraging my
                strong communication skills and adaptability to seamlessly work
                with others, ensuring project success and team cohesion.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mx-auto mt-10 justify-center">
            <Projects />
          </div>
        </div>
      </section>
      {/* Project End */}
      {/* Expertise */}
      <section
        className="mx-auto px-4 py-24 flex justify-center"
        id="expertise"
      >
        <div className="container">
          <div className="flex flex-row justify-between">
            <div>
              <h2 className="heading_2">Expertise</h2>
            </div>
          </div>
          <div className="flex flex-wrap mx-auto mt-10 justify-center">
            <Expertise />
          </div>
          <div>
            <h3 className="text-center text-2xl font-semibold text-neutral-300 mt-10">
              Languages & Tools
            </h3>
            <div className="mt-10">
              <Marquee />
            </div>
          </div>
        </div>
      </section>
      {/* Expertise End */}
      {/* Moving Words  */}
      <section className="mx-auto flex justify-center bg-neutral-950">
        <Typewritter />
      </section>
      {/* Moving Words End */}
      {/* Testimonials */}
      <section className="mx-auto px-4 py-24 flex justify-center">
        <div className="container">
          <div className="flex flex-row justify-between">
            <div>
              <h2 className="heading_2">Testimonials</h2>
              <div className="flex flex-wrap justify-between">
                <div className="md:w-9/12 w-full">
                  <p className="md:mb-0 mb-5 mt-5 md:text-2xl text-lg text-justify">
                    &quot;My colleague is exceptional—dedicated,
                    detail-oriented, and a great communicator. Their commitment,
                    collaborative spirit, and innovative problem-solving
                    significantly contribute to our team&apos;s success.
                    Reliable, positive, and insightful, they bring valuable
                    perspectives. It&apos;s a pleasure to work with someone so
                    capable and team-oriented. &#40; Generated by ChatGPT &#41;
                    &quot;
                  </p>
                </div>
                <div className="md:w-3/12 w-full text-end self-end">
                  <h4 className="text-lg font-semibold">Nigel</h4>
                  <span className="text-neutral-400">
                    Liverpool Manager <br />
                    &#40; When watching from home &#41;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials End */}
      {/* Contact Us */}
      <section className="mx-auto flex justify-center py-24" id="contact">
        <div className="flex flex-col">
          <h1 className="heading_1">Contact Me Now</h1>
          <div className="flex justify-center mt-10">
            <Link
              href="mailto:stephanoxuan@gmailcom?subject=Come%20Work%20for%20Us!&body=Please%20come%20and%20work%20for%20us%20!%0D%0A%0D%0ACheers%2C%0D%0AHappy%20Company"
              target="_blank"
              className="btn btn-neutral text-lg h-full py-5 px-7 "
            >
              Contact By E-mail Now
            </Link>
          </div>
          <div className="divider my-10">OR</div>
          <div className="flex md:flex-row flex-col justify-center gap-10">
            <Link
              href="https://www.linkedin.com/in/ang-guan-xuan/"
              target="_blank"
              className="btn btn-outline btn-info w-60 md:mx-0 mx-auto"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </Link>
            <Link
              href="tel:+60122807988"
              target="_blank"
              className="btn btn-outline btn-info w-60 md:mx-0 mx-auto"
            >
              <FontAwesomeIcon icon={faPhone} />
              Call Me: +6012-2807988
            </Link>
          </div>
        </div>
      </section>
      {/* Contact Us End */}
    </main>
  );
}
