import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { FC } from "react";
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
import Link from "next/link";
import { siteConfig } from "@/lib/config/site-config";
interface SubPageProps {
  params: {
    sub: string;
  };
}

const SubPage: FC<SubPageProps> = async ({ params }) => {
  async function getSubdata() {
    const data = await axios.get(
      `${siteConfig.url}notes/${params.sub}.json`
    );
      
    return data;
  }

  const list = await getSubdata();

  return (
    <>
      <div className=" flex-row justify-between  gap-10">
        <h2 className="font-semibold text-xl text-secondary-foreground  py-5 ">
          {params.sub}
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
            {list.data.mds.map((md: string) => (
              <TableBody key={md}>
                <TableRow>
                  <TableCell> {md}</TableCell>
                  <TableCell> {md}</TableCell>
                  <TableCell>
                    {" "}
                    <Link href={`/subject/${params.sub}/mds/${md}`}>
                      <Button variant={"outline"} size={"icon"}>
                        <Link1Icon className=" w-5 h-5" />
                      </Button>{" "}
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </div>
      </div>
    </>
  );
};

export default SubPage;
