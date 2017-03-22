function fixedEncodeURIComponent (str) {
  return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
}

export default {
  namespace: 'URLText',
  state: {encodedText: '', decodedText: ''},
  reducers: {
    'encode'(state) {
      if(!(state && state.decodedText)) return state;
      return Object.assign({}, state, {encodedText: fixedEncodeURIComponent(state.decodedText)});
    },
    'decode'(state) {
      if(!(state && state.encodedText)) return state;
      return Object.assign({}, state, {decodedText: decodeURIComponent(state.encodedText)});
    },
    'updateEncodedText'(state, {payload: text}) {
      return Object.assign({}, state, {encodedText: text});
    },
    'updateDecodedText'(state, {payload: text}) {
      return Object.assign({}, state, {decodedText: text});
    }
  },
};
