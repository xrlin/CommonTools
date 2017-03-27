import React from 'react';
import {Input, Row, Col} from 'antd';
import JSONTree from 'react-json-tree';
import ApplicationLayout from './ApplicationLayout';
import styles from './JsonFormatterComponent.less';

function JsonFormatterComponent({jsonText, updateJsonTextFunc}) {
  function parse(str) {
    try {
      return eval('(' + str + ')');
    } catch (e) {
      return e.message;
    }
  }

  return (
    <ApplicationLayout>
      <Row className={styles['content--full-height']}>
        <Col span={12} className={styles['content--full-height']}>
          <Input type='textarea'
            placeholder={'请输入要格式化的JSON文本'}
            value={jsonText} 
            onChange={updateJsonTextFunc}
            className={[styles['content--full-height'], styles['textarea--without-radius'], styles['input--without-effect']].join(" ")}
          />
        </Col>
        <Col span={12} className={styles['content--full-height']}> 
          <JSONTree data={(jsonText && parse(jsonText)) || {'tips': '我格式化啦！(*^_^*)'}}/>
        </Col>
      </Row>
    </ApplicationLayout>
  );
}

export default JsonFormatterComponent;
