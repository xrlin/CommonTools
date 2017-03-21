import React from 'react';
import { connect } from 'dva';
import UrlConverterComponent from '../components/UrlConverterComponent';
import styles from './UrlConverter.css';

function UrlConverter({dispatch, encodedText, decodedText}) {
  function decode() {
    dispatch({
      type: 'urlText/decode',
    });
  }

  function encode() {
    dispatch({
      type: 'urlText/encode',
    });
  }

  function updateEncodedText(value) {
    dispatch({
      type: 'urlText/updateEncodedText',
      payload: value
    });
  }

  function updateDecodedText(value) {
    dispatch({
      type: 'urlText/updateDecodedText',
      payload: value
    });
  }

  return (
    <UrlConverterComponent
      encodedText={encodedText}
      decodedText={decodedText}
      encodeFunc={encode}
      decodeFunc={decode}
      updateDecodedTextFunc={updateDecodedText}
      updateEncodedTextFunc={updateEncodedText}
    />
  );
}

function mapStateToProps({urlText}) {
  return {
    encodedText: urlText.encodedText,
    decodedText: urlText.decodedText
  };
}

export default connect(mapStateToProps)(UrlConverter);
