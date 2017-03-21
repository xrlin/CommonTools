import React from 'react';
import { connect } from 'dva';
import styles from './Markdown.css';
import MarkdownComponent from '../components/MarkdownComponent'

function Markdown() {
  return (
    <MarkdownComponent />
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Markdown);
