import React, {PropTypes} from 'react';
import {Input} from 'antd';
import ApplicationLayout from './ApplicationLayout';
import styles from './ConverterTemplate.css';

function ConverterTemplate({sourceText, resultText, updateResultTextFunc, updateSourceTextFunc, children}) {
  return (
    <ApplicationLayout>
      <Input type="textarea" 
        value={sourceText}
        onChange={event => updateSourceTextFunc(event.target.value)}  
      />
      {children}
      <Input type="textarea"
        value={resultText}
        onChange={event => updateResultTextFunc(event.target.value)}
      />
    </ApplicationLayout>
  );
}

ConverterTemplate.protoTypes = {
  sourceText: PropTypes.string.isRequired,
  resultText: PropTypes.string.isRequired,
  updateSourceTextFunc: PropTypes.func.isRequired,
  updateResultTextFunc: PropTypes.func.isRequired
}

export default ConverterTemplate;
