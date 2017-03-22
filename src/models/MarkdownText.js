
export default {
  namespace: 'MarkdownText',
  state: {markdownText: ''},
  reducers: {
    'updateMarkdownText'(state, {payload: text}) {
      return Object.assign({}, state, {markdownText: text});
    }
  },
};
