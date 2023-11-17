import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Marquee_Logo = () => {
  return (
    <>
      <Marquee
        speed={50}
        autoFill={true}
        className="my-20
      "
      >
        {/* next js logo */}
        <Image
          className="relative dark:invert mx-20
          "
          src="/next.svg"
          alt="Next.js Logo"
          width={140}
          height={37}
        />
        {/* bootstrap logo */}
        <Image
          className="relative mx-20
          "
          src="images/logos/bootstrap5.svg"
          alt="Bootstrap 5 Logo"
          width={80}
          height={37}
        />
        {/* Tailwind logo */}
        <Image
          className="relative mx-20
          "
          src="images/logos/tailwind.svg"
          alt="Tailwind Logo"
          width={80}
          height={37}
        />
        {/* react.js logo */}
        <Image
          className="relative mx-20
          "
          src="images/logos/react2.svg"
          alt="React.js Logo"
          width={70}
          height={37}
        />
        {/* vue.js logo */}
        <Image
          className="relative mx-20
          "
          src="images/logos/vuejs.svg"
          alt="Vue.js Logo"
          width={70}
          height={37}
        />
      </Marquee>
      <Marquee
        speed={50}
        autoFill={true}
        direction={"right"}
        className="my-20
      "
      >
        {/* laravel logo */}
        <Image
          className="relative mx-20
          "
          src="images/logos/laravel.svg"
          alt="Laravel Logo"
          width={60}
          height={37}
        />
        {/* jquery logo */}
        <Image
          className="relative rounded mx-20
          "
          src="images/logos/jquery.svg"
          alt="JQuery Logo"
          width={140}
          height={37}
        />
        {/* figma logo */}
        <Image
          className="relative mx-20
          "
          src="images/logos/figma.svg"
          alt="Figma Logo"
          width={50}
          height={37}
        />
        {/* gitlab logo */}
        <Image
          className="relative mx-20
          "
          src="images/logos/gitlab.svg"
          alt="Gitlab Logo"
          width={200}
          height={37}
        />
        {/* clickup logo */}
        <Image
          className="relative mx-20
          "
          src="images/logos/clickup.svg"
          alt="Click Up Logo"
          width={180}
          height={37}
        />
        {/* sourcetree logo */}
        <Image
          className="relative mx-20
          "
          src="images/logos/sourcetree.svg"
          alt="SourceTree Logo"
          width={70}
          height={37}
        />
      </Marquee>
      <Marquee
        speed={50}
        autoFill={true}
        className="my-20
      "
      >
        {/* html logo */}
        <Image
          className="relative mx-20
          "
          src="images/logos/html5.svg"
          alt="HTML 5 Logo"
          width={85}
          height={37}
        />
        {/* css logo */}
        <Image
          className="relative mx-20
          "
          src="images/logos/css3.svg"
          alt="CSS 3 Logo"
          width={60}
          height={37}
        />
        {/* php logo */}
        <Image
          className="relative mx-20"
          src="images/logos/php.svg"
          alt="PHP Logo"
          width={120}
          height={37}
        />
        {/* js logo */}
        <Image
          className="relative mx-20"
          src="images/logos/javascript.svg"
          alt="JavaScript Logo"
          width={60}
          height={37}
        />
        {/* ts logo */}
        <Image
          className="relative mx-20"
          src="images/logos/typescript.svg"
          alt="TypeScript Logo"
          width={60}
          height={37}
        />
      </Marquee>
    </>
  );
};

export default Marquee_Logo;
