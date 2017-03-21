let CryptoJS = require('crypto-js');

const Base64 = {
  encrypt: function(rawStr) {
    let wordArray = CryptoJS.enc.Utf8.parse(rawStr);
    let base64 = CryptoJS.enc.Base64.stringify(wordArray);
    return base64;
  },

  decrypt: function(base64) {
    let parsedWordArray = CryptoJS.enc.Base64.parse(base64);
    return parsedWordArray;
  }
}

/* Extend CryptoJS */
CryptoJS.Base64 = Base64;

function getEncryptFunc(encryptType) {
  let func = CryptoJS[encryptType];
  if(func) {
    return func.encrypt;
  } else {
    console.log('No such encrypt algorithm!');
  }
}

function encrypt(encryptTypye, sourceText, key) {
  let encryptFunc = getEncryptFunc(encryptTypye);
  if(!encryptFunc) return ;
  let encrypted = encryptFunc(sourceText, key);
  return encrypted.toString();
}

function getDecryptFunc(encryptType) {
  let func = CryptoJS[encryptType];
  if(func) {
    return func.decrypt;
  } else {
    console.log('No such decrypt algorithm!');
  }
}

function decrypt(encryptTypye, encryptedText, key) {
  let decryptFunc = getDecryptFunc(encryptTypye);
  if(!decryptFunc) return ;
  let decrypted = decryptFunc(encryptedText, key);
  return CryptoJS.enc.Utf8.stringify(decrypted);
}

export default {
  namespace: 'EncryptText',
  state: {sourceText: '', encryptedText: '', encryptedKey: '', encryptedType: ''},
  reducers: {
    'updateSourceText'(state, {payload: text}) {
      return Object.assign({}, state, {sourceText: text});
    },
    'updateEncryptedText'(state, {payload: text}) {
      return Object.assign({}, state, {encryptedText: text});
    },
    'encrypt'(state) {
      let {encryptedType, sourceText, encryptedKey} = state;
      if(!sourceText) return state;
      return Object.assign({}, state, {encryptedText: encrypt(encryptedType, sourceText, encryptedKey)});
    },
    'decrypt'(state) {
      let {encryptedType, encryptedText, encryptedKey} = state;
      if(!encryptedText) return state;
      return Object.assign({}, state, {sourceText: decrypt(encryptedType, encryptedText, encryptedKey)});
    },
    'updateEncryptedKey'(state, {payload: key}) {
      return Object.assign({}, state, {encryptedKey: key});
    },
    'updateEncryptedType'(state, {payload: type}) {
      return Object.assign({}, state, {encryptedType: type});
    }
  },
};
