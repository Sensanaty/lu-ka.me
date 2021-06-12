/**
 * Helper that takes in a Markdown string and converts it into valid HTML.
 * The helper uses markdown-it to parse the Markdown
 * @type {module:"highlight.js"}
 */

import MarkdownIt from "markdown-it";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);

const markdown = new MarkdownIt({
  html: true,
  xHtmlOut: true,
  langPrefix: "lang-",
  breaks: true,
  linkify: true,
  highlight: (str) => {
    return hljs.highlightAuto(str).value;
  },
});

/**
 * Takes a markdown document in string format and parses it with markdown-it. Returns the contents of the markdown as
 * parsed HTML elements
 * @param  {string} markdownString
 * @returns {HTMLElement}
 */
export const parseMarkdown = (markdownString) => {
  return markdown.render(markdownString);
};
