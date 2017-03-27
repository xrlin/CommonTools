import React, {PropTypes} from 'react';
import {Input, Menu, Dropdown, Button, Icon} from 'antd';
import ConverterTemplate from './ConverterTemplate';
import styles from './EncrypterComponent.css';
import globalStyle from './ApplicationLayout.css';


const EncrypterComponent = ({sourceText, encryptedText, encryptFunc, decryptFunc, updateSourceTextFunc, updateEncryptedTextFunc, updateEncryptedTypeFunc, updateEncryptedKeyFunc, encryptedType, encryptedKey}) => {
  let encryptMenu = (
    <Menu onClick={updateEncryptedTypeFunc}>
      <Menu.Item key="Base64">Base64编码</Menu.Item>
      <Menu.Item key="AES">AES加密</Menu.Item>
      <Menu.Item key="DES">DES加密</Menu.Item>
      <Menu.Item key="RC4">RC4加密</Menu.Item>
    </Menu>
  );

  /* Display or hide the input filed according by the encryptedType */
  function toggleInputDisplay() {
    if(encryptedType && encryptedType !== 'Base64') {
      return {};
    }else {
      return {display: 'none'};
    }
  }

  return (
    <ConverterTemplate
      sourceText={sourceText}
      resultText={encryptedText}
      updateSourceTextFunc={updateSourceTextFunc}
      updateResultTextFunc={updateEncryptedTextFunc}
    >
      <div className={styles['buttons-wrapper']}>
        <Dropdown.Button overlay={encryptMenu} className={styles['dropdown--block']}>
          {encryptedType || '选择加密/转码方式'}
        </Dropdown.Button>
        <Input placeholder='请输入加密Key' value={encryptedKey} style={toggleInputDisplay()} onChange={updateEncryptedKeyFunc}/>
        <Button type="primary" onClick={encryptFunc} className={globalStyle['button--block']}>
          加密/转码<Icon type="right" />
        </Button>
        <Button type="primary" onClick={decryptFunc} className={globalStyle['button--block']}>
          <Icon type="left" />解密/解码
        </Button>
      </div>
    </ConverterTemplate>
    );
}

EncrypterComponent.propTypes = {
  updateEncryptedTextFunc: PropTypes.func.isRequired,
  updateSourceTextFunc: PropTypes.func.isRequired,
  encryptFunc: PropTypes.func.isRequired,
  decryptFunc: PropTypes.func.isRequired,
}

export default EncrypterComponent;
