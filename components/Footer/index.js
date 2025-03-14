import React from "react";
import { useRef } from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({contactRef}) => {
  
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0" ref={contactRef}>
        <div>
          <h1 className="text-2xl font-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl font-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl font-bold">
              TOGETHER
            </h1>
            <a
              href="https://calendly.com/kishor47gaming/30min" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="primary">Schedule a Call</Button>
            </a>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm font-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="https://kishordev.vercel.app/">
          <a className="underline underline-offset-1">Kishore Kumar</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
