"use client";

import { FC } from "react";
import { Button } from "./ui/button";
import { useParams, useRouter } from "next/navigation";
import { siteConfig } from "@/lib/config/site-config";
import Image from "next/image";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const params = useParams();
  const router = useRouter();
  return (
    <>
      <div className="navbar  p-0 m-0  shadow shadow-muted-foreground    ">
        <div className="flex">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                {" "}
                <Button
                  variant={"link"}
                  size={"sm"}
                  className=" m-0 px-0  flex justify-start items-center"
                  onClick={() => {
                    router.push("/");
                  }}
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
              </li>

              {params?.sub && (
                <li>
                  <Button
                    variant={"link"}
                    size={"sm"}
                    className=" m-0 px-0 "
                    onClick={() => {
                      router.push(`/subject/${params.sub}`);
                    }}
                  >
                    {params.sub}
                  </Button>
                </li>
              )}
              {params?.md && (
                <li>
                  <Button
                    variant={"link"}
                    size={"sm"}
                    className=" m-0  px-0 "
                    onClick={() => {
                      router.push(`/subject/${params.sub}/mds/${params.md}`);
                    }}
                  >
                    {params.md}
                  </Button>
                </li>
              )}
            </ul>
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
