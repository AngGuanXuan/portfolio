"use client";

import Header from "./components/layouts/header/Header";
import Scrolldown from "./components/scrolldown/Scrolldown";
import Projects from "./components/projects/Projects";
import Expertise from "./components/Expertise";
import Typewritter from "./components/typewritter/Typewritter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Banner */}
      <section className="min-h-screen mx-auto px-4 py-24 relative flex justify-center">
        <div className="container">
          <h1 className="heading_1">
            Websites & <br />
            Design
          </h1>
          <div className="flex flex-row justify-between my-20">
            <div className="w-5/12">
              <h3 className="font-semibold text-lg">Let&apos;s Talk</h3>
              <a
                href="mailto:stephanoxuan@gmailcom?subject=Come%20Work%20for%20Us!&body=Please%20come%20and%20work'%20for%20us%20!%0D%0A%0D%0ACheers%2C%0D%0AHappy%20Company"
                className="mt-3"
              >
                stephanoxuan@gmail.com
              </a>
            </div>
            <div className="w-5/12">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                convallis tristique enim sed condimentum. Fusce vitae vehicula
                metus. Sed eu malesuada mi. Cras vitae viverra elit. Etiam sit
                amet quam a diam accumsan auctor et sit amet orci. Cras mollis
                dignissim augue ut mollis. Ut mattis a orci non scelerisque.
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
      <section className="mx-auto px-4 py-24 flex justify-center">
        <div className="container">
          <div className="flex flex-row justify-between">
            <div>
              <h2 className="heading_2">Projects</h2>
              <p className="text-justify w-4/12 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                feugiat volutpat dui sit amet posuere. In lobortis lobortis
                magna, eget.
              </p>
            </div>
            {/* <div>
              <a>More</a>
            </div> */}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-10">
            <Projects />
            <Projects />
            <Projects />
          </div>
        </div>
      </section>
      {/* Project End */}
      {/* Expertise */}
      <section className="mx-auto px-4 py-24 flex justify-center">
        <div className="container">
          <div className="flex flex-row justify-between">
            <div>
              <h2 className="heading_2">Expertise</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-10">
            <Expertise></Expertise>
            <Expertise />
            <Expertise />
            <Expertise />
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
              <div className="flex flex-row justify-between">
                <div className="w-9/12">
                  <p className="mt-5 text-2xl text-justify">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed ultrices finibus tortor, vitae ornare neque
                    eleifend eu. Donec justo libero, tempus eu tincidunt sed,
                    faucibus finibus mauris. Quisque at mauris turpis.
                    Pellentesque vel felis eros. Donec vehicula bibendum augue,
                    eu dignissim odio. Sed commodo placerat nisi at
                    sollicitudin. Phasellus luctus.&quot;
                  </p>
                </div>
                <div className="w-3/12 text-end self-end">
                  <h4 className="text-lg font-semibold">Nigel</h4>
                  <span className="text-neutral-400">Liverpool Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials End */}
      {/* Contact Us */}
      <section className="mx-auto flex justify-center py-24">
        <div className="flex flex-col">
          <h1 className="heading_1">Call Me Maybe</h1>
          <div className="flex justify-center mt-10">
            <a
              href="mailto:stephanoxuan@gmailcom?subject=Come%20Work%20for%20Us!&body=Please%20come%20and%20work'%20for%20us%20!%0D%0A%0D%0ACheers%2C%0D%0AHappy%20Company"
              className="btn btn-neutral text-lg h-full py-5 px-7"
            >
              Contact Now
            </a>
          </div>
        </div>
      </section>
      {/* Contact Us End */}
    </main>
  );
}
