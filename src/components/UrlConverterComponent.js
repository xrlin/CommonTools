import React, {PropTypes} from 'react';
import {Button, Icon} from 'antd';
import ConverterTemplate from './ConverterTemplate';
import styles from './UrlConverterComponent.css';

const UrlConverterComponent = ({encodedText, decodedText, encodeFunc, updateDecodedTextFunc, updateEncodedTextFunc, decodeFunc}) => (
  <ConverterTemplate
    sourceText={decodedText}
    resultText={encodedText}
    updateResultTextFunc={updateEncodedTextFunc}
    updateSourceTextFunc={updateDecodedTextFunc}
  >
    <Button type="primary" onClick={encodeFunc}>
      编码<Icon type="right" />
    </Button>
    <Button type="primary" onClick={decodeFunc}>
      <Icon type="left" />解码
    </Button>
  </ConverterTemplate>
)

UrlConverterComponent.protoTypes =  {
  updateDecodedTextFunc: PropTypes.func.isRequired,
  updateEncodedTextFunc: PropTypes.func.isRequired,
  encodeFunc: PropTypes.func.isRequired,
  decodeFunc: PropTypes.func.isRequired
}

export default UrlConverterComponent;
