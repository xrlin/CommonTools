import React from 'react';
import { connect } from 'dva';
import styles from './Markdown.css';
import MarkdownComponent from '../components/MarkdownComponent'

function Markdown({dispatch, markdownText}) {
  function updateMarkdownText(e) {
    dispatch({
      type: 'MarkdownText/updateMarkdownText',
      payload: e.target.value
    });
  }
  return (
    <MarkdownComponent updateMarkdownTextFunc={updateMarkdownText} markdownText={markdownText} />
  );
}

function mapStateToProps({MarkdownText}) {
  return {markdownText: MarkdownText.markdownText};
}

export default connect(mapStateToProps)(Markdown);
