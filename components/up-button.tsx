"use client";

import { FC } from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { MoveUpIcon } from "lucide-react";
import { useScrollTop } from "@/hooks/use-scroll-top";

interface UpButtonProps {}

const UpButton: FC<UpButtonProps> = ({}) => {
  const router = useRouter();
  const pathname = usePathname();
  const useScroll = useScrollTop();
  return (
    <>
      {useScroll && (
        <Button
          variant={"shadow"}
          size={"icon"}
          className=" rounded-full  bg-muted text-muted-foreground bg-opacity-35 w-10 h-10   "
          onClick={() => {
            const path = pathname.split(`#`);
            router.replace(path[0]);
          }}
        >
          <MoveUpIcon className=" w-4 h-4  " />
        </Button>
      )}
    </>
  );
};

export default UpButton;
