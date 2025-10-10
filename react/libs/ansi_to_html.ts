import AnsiToHtml from 'ansi-to-html';

const converter = new AnsiToHtml();

function ansiToHTML(ansi: string) {
  const html = converter.toHtml(ansi);
  return html;
}

export default ansiToHTML;
