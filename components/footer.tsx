import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui/button";
import { siteConfig } from "@/lib/config/site-config";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface footerProps {}

const Footer: FC<footerProps> = ({}) => {
  return (
    <>
      <footer className="footer  items-center p-10   shadow-md  ">
        <div className="flex justify-start items-center">
          <Link href={"/"}>
          <Button
            variant={"ghost"}
            className=" flex justify-start items-center  hover:bg-background"
            >
            <Image
              src={"/logo-bg.png"}
              width={35}
              height={35}
              alt="logo"
              className=" hidden dark:flex  mr-1 "
            />
            <Image
              src={"/logo-light-bg.png"}
              width={35}
              height={35}
              alt="logo"
              className=" dark:hidden mr-1 "
            />
            {siteConfig.name}
          </Button>
            </Link>
        </div>
        <div className="flex   space-x-4   ml-auto">
          <span className="   ">
            Built by - <Button variant={"underline"} className=" ml-0  pl-0">Mahendra S H</Button>
          </span>
          <Button size={"icon"} variant={"ghost"}>
            <GitHubLogoIcon className="w-5 h-5 " />
          </Button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
