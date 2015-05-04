export default class CommentParser {
  /**
   * @param commentNode
   * @returns {Tag[]}
   */
  static parse(commentNode) {
    if (!this.isESDoc(commentNode)) return [];

    let comment = commentNode.value;

    // TODO: refactor
    comment = comment.replace(/^\*\s?/, ''); // remove first '*'
    comment = comment.replace(/ $/, ''); // remove last ' '
    comment = comment.replace(/^ *\* ?/gm, ''); // remove line head '*'
    if (comment.charAt(0) !== '@')  comment = '@desc ' + comment; // auto insert @desc
    comment = comment.replace(/\s*$/, ''); // remove tail space.
    comment = comment.replace(/^(@\w+)$/gm, '$1 \\TRUE'); // auto insert tag text to non-text tag (e.g. @interface)
    comment = comment.replace(/^(@\w+)\s(.*)/gm, '\\Z$1\\Z$2'); // insert separator (\\Z@tag\\Ztext)
    let lines = comment.split('\\Z');

    let tagName = '';
    let tagValue = '';
    let tags = [];
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      if (line.charAt(0) === '@') {
        tagName = line;
        let nextLine = lines[i + 1];
        if (nextLine.charAt(0) === '@') {
          tagValue = '';
        } else {
          tagValue = nextLine;
          i++;
        }
        tagValue = tagValue.replace('\\TRUE', '').replace(/^\n/, '').replace(/\n*$/, '');
        tags.push({tagName, tagValue});
      }
    }
    return tags;
  }

  static isESDoc(commentNode) {
    if (commentNode.type !== 'Block') return false;
    return commentNode.value.charAt(0) === '*';
  }
}
