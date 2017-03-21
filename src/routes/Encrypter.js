import React from 'react';
import { connect } from 'dva';
import EncrypterComponent from '../components/EncrypterComponent'
import styles from './Encrypter.css';

function Encrypter({dispatch, sourceText, encryptedText, encryptedType, encryptedKey}) {
  function encrypt() {
    dispatch({
      type: 'EncryptText/encrypt'
    });
  }
  
  function decrypt() {
    dispatch({
      type: 'EncryptText/decrypt'
    });
  }

  function updateSourceText(value) {
    dispatch({
      type: 'EncryptText/updateSourceText',
      payload: value
    });
  }

  function updateEncryptedText(value) {
    dispatch({
      type: 'EncryptText/updateEncryptedText',
      payload: value
    });
  }

  function updateEncryptedKey(e) {
    dispatch({
      type: 'EncryptText/updateEncryptedKey',
      payload: e.target.value
    });
  }

  function updateEncryptedType(e) {
    dispatch({
      type: 'EncryptText/updateEncryptedType',
      payload: e.key
    });
  }

  return (
    <EncrypterComponent
      sourceText={sourceText}
      encryptedText={encryptedText}
      updateSourceTextFunc={updateSourceText}
      updateEncryptedTextFunc={updateEncryptedText}
      updateEncryptedKeyFunc={updateEncryptedKey}
      updateEncryptedTypeFunc={updateEncryptedType}
      encryptFunc={encrypt}
      decryptFunc={decrypt}
      encryptedType={encryptedType}
      encryptedKey={encryptedKey}
    />
  );
}

function mapStateToProps({EncryptText}) {
  return {
    sourceText: EncryptText.sourceText,
    encryptedText: EncryptText.encryptedText,
    encryptedType: EncryptText.encryptedType,
    encryptedKey: EncryptText.encryptedKey
  };
}

export default connect(mapStateToProps)(Encrypter);
