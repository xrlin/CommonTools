import React, {PropTypes} from 'react';
import {Input, Row, Col} from 'antd';
import ApplicationLayout from './ApplicationLayout';
import styles from './ConverterTemplate.css';

function ConverterTemplate({sourceText, resultText, updateResultTextFunc, updateSourceTextFunc, children}) {
  return (
    <ApplicationLayout>
      <Row style={{height: '100%'}}>
        <Col span={10} className={[styles['col--full-height'], styles['col--flex-center']].join(' ')}>
          <Input type="textarea"
            placeholder={'源文本'} 
            value={sourceText}
            onChange={event => updateSourceTextFunc(event.target.value)}
            className={styles.textarea} 
          />
        </Col>
        <Col span={4} className={[styles['col--full-height'], styles['col--flex-center']].join(' ')}>
          {children}
        </Col>
        <Col span={10} className={[styles['col--full-height'], styles['col--flex-center']].join(' ')}>
          <Input type="textarea"
            placeholder={'转换后的文本'}
            value={resultText}
            onChange={event => updateResultTextFunc(event.target.value)}
            className={styles.textarea}
          />
        </Col>
      </Row>
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
