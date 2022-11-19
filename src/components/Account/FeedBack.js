import React, { useState } from "react"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space,Radio, Input } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const FeedBack =()=>{

    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

    const items = [
      
        getItem(<div>Vấn đề hội viên <hr></hr></div>, 'sub2',null, [
        
          getItem(
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>Option A</Radio>
              <Radio value={2}>Option B</Radio>
              <Radio value={3}>Option C</Radio>
              
            </Space>
          </Radio.Group>
          , null, null, [], 'group'),
        ]),
        getItem(<div>Vấn đề tài khoản <hr></hr></div>, 'sub2',null, [
          ]),
          getItem(<div>Vấn đề hiển thị  <hr></hr></div>, 'sub2',null, [
        ]),
        getItem(<div>Vấn đề về phụ đề & ngôn ngữ  <hr></hr></div>, 'sub2',null, [
        ]),
        getItem(<div>Vấn đề về nội dung <hr></hr></div>, 'sub2',null, [
        ]),
        getItem(<div>Vấn đề về quảng cáo  <hr></hr></div>, 'sub2',null, [
        ]),
        getItem(<div>Khác  <hr></hr></div>, 'sub2',null, [
        ]),
    ]

    const onClick = (e) => {
        console.log('click ', e);
      };

    return (
        <>
            <h2>Phản ánh ý kiến</h2>
        <div className="flex">
            <div>
                <div className="title">Phân loại vấn đề</div>
                <div className="content">
                <Menu               
                    // style={{
                    //     width: 900,
                    // }}
                    mode="inline"
                    items={items}
                  
                    />
                </div>
            </div>
            <div>
                <div className="title">Chi tiết vấn đề</div>
                <div className="content">
                  <input placeholder="Hãy miêu tả chi tiết vấn đề của bạn"></input>
                </div>
            </div>
            <div>
                <div className="title">Phương thức liên lạc</div>
                <div className="content">
                
                </div>
            </div>
            <div className="btn">
                Gửi đi
            </div>
        </div>
        
        </>
    )

}

export default FeedBack