import React from 'react';
import {Input, message} from 'antd';
import JSONTree from 'react-json-tree';
import ApplicationLayout from './ApplicationLayout';
import styles from './JsonFormatterComponent.css';

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
      <Input type='textarea' value={jsonText} onChange={updateJsonTextFunc}/>
      <JSONTree data={(jsonText && parse(jsonText)) || {}} />
    </ApplicationLayout>
  );
}

export default JsonFormatterComponent;
