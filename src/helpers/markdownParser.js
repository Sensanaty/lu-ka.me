/**
 * Helper that takes in a Markdown string and converts it into valid HTML.
 * The helper uses markdown-it to parse the Markdown
 * @type {module:"highlight.js"}
 */

import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt({
  html: true,
  xHtmlOut: true,
  langPrefix: "lang-",
  breaks: true,
  linkify: true,
});

export const parseMarkdown = (html) => {
  console.log("html:", html);
  const md = markdown.render(html);
  console.log("md:", md);

  return md;
};
