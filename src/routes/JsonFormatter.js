import React from 'react';
import { connect } from 'dva';
import JsonFormatterComponent from '../components/JsonFormatterComponent';
import styles from './JsonFormatter.css';

function JsonFormatter({dispatch, jsonText}) {
  function updateJsonText(e) {
    dispatch({
      type: 'JsonText/updateJsonText',
      payload: e.target.value
    });
  }

  return (
    <JsonFormatterComponent
      jsonText={jsonText}
      updateJsonTextFunc={updateJsonText}
    />
  );
}

function mapStateToProps({JsonText}) {
  return {jsonText: JsonText.jsonText};
}

export default connect(mapStateToProps)(JsonFormatter);
