import React, {PropTypes} from 'react';
import {Button, Icon} from 'antd';
import ConverterTemplate from './ConverterTemplate';
import styles from './UrlConverterComponent.css';
import globalStyle from './ApplicationLayout.css';

const UrlConverterComponent = ({encodedText, decodedText, encodeFunc, updateDecodedTextFunc, updateEncodedTextFunc, decodeFunc}) => (
  <ConverterTemplate
    sourceText={decodedText}
    resultText={encodedText}
    updateResultTextFunc={updateEncodedTextFunc}
    updateSourceTextFunc={updateDecodedTextFunc}
  >
    <div>
      <Button type="primary" onClick={encodeFunc} className={globalStyle['button--block']}>
        编码<Icon type="right" />
      </Button>
      <Button type="primary" onClick={decodeFunc} className={globalStyle['button--block']}>
        <Icon type="left" />解码
      </Button>
    </div>
  </ConverterTemplate>
)

UrlConverterComponent.protoTypes =  {
  updateDecodedTextFunc: PropTypes.func.isRequired,
  updateEncodedTextFunc: PropTypes.func.isRequired,
  encodeFunc: PropTypes.func.isRequired,
  decodeFunc: PropTypes.func.isRequired
}

export default UrlConverterComponent;
