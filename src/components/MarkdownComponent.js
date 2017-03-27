import React, {PropTypes} from 'react';
import {Input, Row, Col} from 'antd';
import {markdown} from 'markdown';
import Hightlight from 'react-highlight';
import ApplicationLayout from './ApplicationLayout';
import styles from './MarkdownComponent.less';
import 'github-markdown-css';
import '../../node_modules/highlight.js/styles/github.css';


const MarkdownComponent = ({markdownText, updateMarkdownTextFunc}) => {
  function convertToHtml() {
     return markdown.toHTML(markdownText);
  }

  return (
    <ApplicationLayout>
      <Row className={styles['content--full-height']}>
        <Col span={12} className={styles['content--full-height']}>
          <Input type="textarea"
            placeholder={'从现在开始写作吧...'}
            value={markdownText}
            className={[styles['content--full-height'], styles['textarea--without-radius'], styles['input--without-effect']].join(" ")}
            onChange={updateMarkdownTextFunc}
          />
        </Col>
        <Col span={12} className={styles['content--full-height']}>
          <div className={[styles['content--full-height'], styles.markdown__preview,'markdown-body'].join(' ')}>
            <Hightlight innerHTML={true}>
              {markdownText && convertToHtml(markdownText)}
            </Hightlight>
          </div>
        </Col>
      </Row>
    </ApplicationLayout>
  ) 
}

/*const MarkdownComponent = React.createClass({
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
});*/

MarkdownComponent.protoTypes = {
  updateMarkdownTextFunc: PropTypes.func.isRequired,
  markdownText: PropTypes.string.isRequired
}

export default MarkdownComponent;
