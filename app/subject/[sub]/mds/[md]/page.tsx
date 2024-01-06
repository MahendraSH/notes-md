import axios from "axios";
import { FC } from "react";
import ReactHtmlParser from "react-html-parser";
import md from "markdown-it";
import { Separator } from "@/components/ui/separator";
import { MoveLeft } from "lucide-react";
import { siteConfig } from "@/lib/config/site-config";
interface MdPageProps {
  params: {
    sub: string;
    md: string;
  };
}

const MdPage: FC<MdPageProps> = async ({ params }) => {
  async function ReadMd() {
    try {
      const headers = { Accept: "text/plain" };
      const data = await axios.get(
        `${siteConfig.url}/notes/${params.sub}/${params.md}`,
        { headers }
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

  const mddata = await ReadMd();

  return (
    <div className=" flex-row justify-between  gap-10">
      <Separator />
      <div className="   prose   prose-headings:text-accent-foreground/65 prose-strong:text-secondary-foreground/65 mx-auto mt-8 text-foreground">
        {ReactHtmlParser(md().render(mddata))}
      </div>
    </div>
  );
};

export default MdPage;
