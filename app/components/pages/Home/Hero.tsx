"use client";

import { HeroData } from "@/data/Home";
import Text from "../../ui/Text";
import HeroImageURI from "../../../../public/HeroImg.png";
import { Safari } from "@/components/magicui/safari";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section className="section bg-bg rounded-b-2xl relative overflow-hidden">
        <svg
          version="1.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1583 724"
          className=" absolute bottom-0 w-[1200px] h-[549px] md:w-[2000px] md:h-[915px]"
        >
          <defs>
            <filter x="-50%" y="-50%" width="200%" height="200%" id="f1">
              {" "}
              <feGaussianBlur stdDeviation={130} />{" "}
            </filter>
            <linearGradient id="P" gradientUnits="userSpaceOnUse" />
            <linearGradient
              id="g1"
              x2={1}
              href="#P"
              gradientTransform="matrix(84.8,343.465,-790.035,195.056,635.638,438.784)"
            >
              <stop stopColor="#ed86ff" />
              <stop offset=".5" stopColor="#a520fe" />
              <stop offset={1} stopColor="#400ff5" />
            </linearGradient>
            <linearGradient
              id="g2"
              x2={1}
              href="#P"
              gradientTransform="matrix(553.334,-233.083,42.45,100.775,356.128,725.874)"
            >
              <stop offset=".89" stopColor="#fff" stopOpacity={1} />
              <stop offset={1} stopColor="#999" stopOpacity={0} />
            </linearGradient>
          </defs>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".a{filter:url(#f1);fill:#190b8c}.b{fill:url(#g1)}.c{fill:none;stroke:url(#g2)}",
            }}
          />
          <path
            fillRule="evenodd"
            className="a"
            d="m791.5 1323c-293.9 0-531.5-237.6-531.5-531.5 0-293.9 237.6-531.5 531.5-531.5 293.9 0 531.5 237.6 531.5 531.5 0 293.9-237.6 531.5-531.5 531.5z"
          />
          <path
            className="b"
            d="m744.6 475.7c-220.6 20.9-353.4 177.3-392.3 253l877.9 2.8c-129.6-231.9-377.7-267.2-485.6-255.8z"
          />
          <path
            fillRule="evenodd"
            className="c"
            d="m351.4 728.7c65.1-114.5 272.4-321.4 581.3-233.1"
          />
        </svg>

        <div className="max-w-primary flex flex-col items-center gap-5 px-5 py-40 pt-56 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: "easeOut",
            }}
            className="flex flex-col items-center gap-5 max-[765px]:pb-10"
          >
            <Text variant="h1" className="text-white max-w-[630px] text-center">
              {HeroData.title}
            </Text>
            <Text
              variant="p"
              className="text-white/70 max-w-[730px] text-center"
            >
              {HeroData.des}
            </Text>
            <div className="flex flex-wrap justify-center items-center gap-3 pb-5">
              <Link href={"/dashboard"} className="max-[300px]:w-full">
                <Button className="border-0 max-[300px]:w-full">
                  Get Started{" "}
                  <BorderBeam
                    duration={5}
                    className="from-transparent via-purple-300 to-transparent"
                  />
                  <span className="bg-white/10 h-5 flex group-hover:rotate-45 group-hover:translate-x-1 transition-all justify-center items-center w-5 rounded-full">
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </span>
                </Button>
              </Link>
              <Link
                href={"/repots/example"}
                className="flex hover:underline underline-offset-2 items-center text-white text-sm font-light"
              >
                Demo Report
                <ArrowUpRight size={18} strokeWidth={1.4} />
              </Link>
            </div>
          </motion.div>
          <div className="md:h-[150px]"></div>
        </div>
      </section>
      <section className="section -mt-[40%] min-[445px]:-mt-[180px] md:-mt-[300px] ">
        <div className="max-w-primary flex flex-col items-center gap-5 px-5 relative z-10 max-[445px]:hidden">
          <HeroBrowser />
        </div>
      </section>
    </>
  );
};

export default Hero;

const HeroBrowser = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "tween",
          delay: 0.3,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="relative max-w-[800px] overflow-hidden rounded-xl border-b-4 border-primary -mb-[350px] mt-10"
      >
        <Safari
          imageSrc={HeroImageURI.src}
          url="noderank.noderdevs.com"
          mode="default"
          className="size-full"
        />
      </motion.div>
    </>
  );
};
