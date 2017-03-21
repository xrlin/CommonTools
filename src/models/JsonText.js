
export default {
  namespace: 'JsonText',
  state: {jsonText: ''},
  reducers: {
    'updateJsonText'(state, {payload: text}) {
      return Object.assign({}, state, {jsonText: text});
    }
  },
};
