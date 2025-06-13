"use client";

import Link from "next/link";
import Logo from "../../ui/Logo";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";
import ShinyText from "@/components/lib/ShinyText/ShinyText";
import { HeaderData } from "@/data/Header";
import { usePathname } from "next/navigation";
import GradientText from "@/components/lib/GradientText/GradientText";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

const HeaderClient = () => {
  const pathName = usePathname();
  const [isNavOpen, setisNavOpen] = useState(false);

  return (
    <>
      <header className="section absolute w-full z-[999]  top-5 px-5">
        <div className="max-w-primary flex items-center justify-between w-full backdrop-blur rounded-2xl text-white   p-2">
          <div className="md:w-3/12">
            <Logo />
          </div>
          <nav
            className={`fixed w-full left-0 lg:static z-[999] top-16 lg:w-fit p-2  lg:block ${
              isNavOpen ? "block" : "hidden"
            }`}
          >
            <motion.ul className="gap-5 flex-col  p-5 gap-y-4 lg:bg-transparent lg:text-white lg:p-0 rounded-md bg-white text-text relative  lg:flex-row flex lg:items-center">
              {HeaderData.navs.map((li, index) => (
                <Link
                  className="w-fit"
                  key={`header-navs-${index}`}
                  href={li.href}
                >
                  {pathName === li?.href ? (
                    <GradientText>{li?.name}</GradientText>
                  ) : (
                    li.name
                  )}
                </Link>
              ))}
              <div className="w-full min-[375px]:hidden flex flex-col gap-5">
                <HeaderAuthAndProfile isDark={false} className={`!w-full`} />
              </div>
            </motion.ul>
          </nav>
          <div className="flex items-center gap-5 lg:w-3/12 justify-end overflow-hidden">
            <div className="flex items-center gap-5 max-[375px]:hidden">
              <HeaderAuthAndProfile />
            </div>
            <span className="lg:hidden">
              <Hamburger
                rounded
                onToggle={(toggled) => {
                  if (toggled) {
                    setisNavOpen(true);
                  } else {
                    setisNavOpen(false);
                  }
                }}
              />
            </span>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              type: "tween",
              delay: 0.3,
              duration: 0.3,
              ease: "easeOut",
            }}
            exit={{ opacity: 0 }}
            className="z-[888] top-0 fixed h-screen w-full backdrop-blur-md lg:hidden"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderClient;

export const HeaderAuthAndProfile = ({
  isDark = true,
  className = "",
}: {
  className?: string;
  isDark?: boolean;
}) => {
  return (
    <>
      <Link href="/login">
        {isDark ? (
          <ShinyText text="Login" />
        ) : (
          <span className="text-text">Login</span>
        )}
      </Link>
      <Link href="/register" className={className}>
        <Button className={`border-0 ${className}`}>
          Register
          <BorderBeam
            duration={5}
            className={`from-transparent via-purple-300 to-transparent `}
          />
        </Button>
      </Link>
    </>
  );
};
