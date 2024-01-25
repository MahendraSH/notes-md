import axios from "axios";
import { FC } from "react";
import ReactHtmlParser from "react-html-parser";
import md from "markdown-it";
import namedHeadings from "markdown-it-named-headings";
import { siteConfig } from "@/lib/config/site-config";
import markdownItGithubHeadings from "markdown-it-github-headings";
import highlightjs from "markdown-it-highlightjs";
import "highlight.js/styles/github.css";
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
  const data = md()
    .set({ typographer: true, breaks: false })
    .use(namedHeadings)
    .use(highlightjs, {
      auto: true,
      code: true,
    })
    .use(markdownItGithubHeadings, {
      prefixHeadingIds: false,
      enableHeadingLinkIcons: false,
      prefix: false,
    })
    .render(mddata);

  return (
    <div className="  sm:w-[cal(100%-20px)] lg: w-full  p-2     prose   prose-headings:first-letter:capitalize  prose-headings:text-accent-foreground/75 prose-strong:text-secondary-foreground  prose-strong:text-xl prose-strong:font-semibold  mx-auto mt-8 *:text-foreground prose-code:text-base prose-code:text-muted-foreground prose-code:!bg-muted/70  prose-pre:bg-muted dark:prose-code:!bg-secondary dark:prose-code:!text-secondary-foreground  prose-pre:p-3  dark:prose-pre:bg-secondary  prose-code:data-theme='default' ">
      {ReactHtmlParser(data)}
    </div>
  );
};

export default MdPage;
