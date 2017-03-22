import React from 'react';
import { connect } from 'dva';
import UrlConverterComponent from '../components/UrlConverterComponent';
import styles from './UrlConverter.css';

function UrlConverter({dispatch, encodedText, decodedText}) {
  function decode() {
    dispatch({
      type: 'URLText/decode',
    });
  }

  function encode() {
    dispatch({
      type: 'URLText/encode',
    });
  }

  function updateEncodedText(value) {
    dispatch({
      type: 'URLText/updateEncodedText',
      payload: value
    });
  }

  function updateDecodedText(value) {
    dispatch({
      type: 'URLText/updateDecodedText',
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

function mapStateToProps({URLText}) {
  return {
    encodedText: URLText.encodedText,
    decodedText: URLText.decodedText
  };
}

export default connect(mapStateToProps)(UrlConverter);
