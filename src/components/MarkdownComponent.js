import React from 'react';
import {Input} from 'antd';
import {markdown} from 'markdown';
import Hightlight from 'react-highlight';
import ApplicationLayout from './ApplicationLayout';
import styles from './MarkdownComponent.less';
import 'github-markdown-css';
import '../../node_modules/highlight.js/styles/github.css';

const MarkdownComponent = React.createClass({
  handleChange: function(event){
    this.setState({html: markdown.toHTML(event.target.value)});
  },
  
  render: function() { return (
    <ApplicationLayout>
      <Input type="textarea"
        className={[styles['content--half'], styles['content--flex'], styles['textarea--without-radius'], styles['input--without-effect']].join(" ")}
        onChange={this.handleChange}
      />
      <div className={[styles.markdown__preview,'markdown-body'].join(' ')}>
        <Hightlight innerHTML={true}>
          {this.state && this.state.html}
        </Hightlight>
      </div>
    </ApplicationLayout>
  )}
});

export default MarkdownComponent;
