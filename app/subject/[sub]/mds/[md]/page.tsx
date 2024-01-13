import axios from "axios";
import { FC } from "react";
import ReactHtmlParser from "react-html-parser";
import md from "markdown-it";
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
        `${siteConfig.url}notes/${params.sub}/${params.md}`,
        { headers }
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

  const mddata = await ReadMd();
  const data = md().set({ linkify: true, typographer: true }).render(mddata);

  return (
    <div className="   prose   *:first-letter:capitalize  prose-headings:text-accent-foreground/75 prose-strong:text-secondary-foreground  prose-strong:text-xl prose-strong:font-semibold  mx-auto mt-8 *:text-foreground prose-code:text-base prose-code:text-muted-foreground prose-code:bg-muted">
      {ReactHtmlParser(data)}
    </div>
  );
};

export default MdPage;
