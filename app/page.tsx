"use client";

import { FC } from "react";
import data from "@/public/notes/subjects.json";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link1Icon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  const router = useRouter();
  return (
    <div className=" flex-row justify-between  gap-10">
      <h2 className="font-semibold text-3xl text-secondary-foreground  py-5 ">
        {" "}
        Subjects{" "}
      </h2>

      <Separator />
      <div className="  max-h-96 overflow-y-scroll    ">
        <Table className=" w-full">
          <TableCaption>A list of Subjects.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="  lg:min-w-[150px]"> Index</TableHead>
              <TableHead className="lg:min-w-[150px]"> Subjects</TableHead>
              <TableHead className=" lg:min-w-[150px]">Links</TableHead>
            </TableRow>
          </TableHeader>
          {data.subjects.map((sub: string, index) => (
            <TableBody key={index}>
              <TableRow>
                <TableCell> {index}</TableCell>
                <TableCell> {sub}</TableCell>
                <TableCell>
                  {" "}
                  <Button
                    variant={"outline"}
                    size={"icon"}
                    onClick={() => {
                      router.push(`/subject/${sub}`);
                    }}
                  >
                    {" "}
                    <Link1Icon className=" w-5 h-5" />
                  </Button>{" "}
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default MainPage;
