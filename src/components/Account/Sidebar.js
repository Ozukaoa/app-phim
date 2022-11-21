import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Button, Layout, Menu } from 'antd';
import axios from 'axios';
  import React, { useEffect, useState } from 'react';
  import user from "../../images/user.png"
import FavouriteFilm from './FavouriteFilm';
import FeedBack from './FeedBack';
import HistoryFilm from './HistoryFilm';
import InfoAccount from './InfoAccount';
import RequestFilm from './RequestFilm';
import UpdateVip from './UpdateVip';

  
  const { Header, Sider, Content } = Layout;

 const Sider1=(props) =>{
    const { handleClick } = props;
    const [openingModal,setOpenModal]= useState(false)
    const [infoUser,setInfoUser] = useState({})

    const handleVip =()=>{
      console.log(localStorage.getItem("infoUser").idNguoiDung)
      setOpenModal(true)
    }
    const handleCancel=()=>{
      setOpenModal(false)
    }

    useEffect(()=>{
      axios.get(`http://localhost:3003/apis/user/show/info/${localStorage.getItem("infoUser")}`)
      .then(response=>{
          console.log(response)
          if(response.status===200){
             setInfoUser(response.data[0])
    
          }
   
      })
  },[])



    return (
      <>
      <Layout.Sider>
        <div className="user" >
          <img src={user}></img> 
          <span>{infoUser.idNguoiDung}</span>
          </div>
          <div className='GNV'>
            <Button onClick={handleVip}>Gia nhập VIP</Button>
          </div>
        <Menu theme="dark" mode="inline" openKeys={"sub1"}>
          
            <Menu.Item key="1" onClick={handleClick}>
              <div className='center'>
              <span>Cài đặt cá nhân</span>
              <hr></hr>
              </div>
              
            </Menu.Item>
            <Menu.Item key="2" onClick={handleClick}>
              Lịch sử xem
            </Menu.Item>
            <Menu.Item key="3" onClick={handleClick}>
              Phim yêu thích
            </Menu.Item>
            <Menu.Item key="4" onClick={handleClick}>
              Yêu cầu phim
            </Menu.Item>
            <Menu.Item key="5" onClick={handleClick}>
              Lích sử giao dịch
            </Menu.Item>
            <Menu.Item key="6" onClick={handleClick}>
              Phản ánh ý kiến
            </Menu.Item>
            <Menu.Item key="7" onClick={handleClick}>
            <hr></hr>
            <div className='center'>
            Đăng xuất

            </div>
              
              
            </Menu.Item>
   
        </Menu>
      </Layout.Sider>
        <UpdateVip
          modalVip={openingModal}
          handleCloseVip={handleCancel}
          
        />
      </>
    );
  }

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const style = {
      fontSize: "30px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
  
    const components = {
      1: <div className='infoAccount'><InfoAccount/></div>,
      2: <div className='chung'><HistoryFilm/></div>,
      3: <div className='chung'><FavouriteFilm/></div>,
      4: <div className='chung'><RequestFilm/></div>,
      5: <div style={style}>Option 3</div>,
      6: <div className='feedBack'><FeedBack/></div>
    };
  
    const [render, updateRender] = useState(1);
  
    const handleMenuClick = menu => {
      updateRender(menu.key);
    };
    return (
        <div className='account'>

              <Layout  className='layout' style={{ minHeight: "100vh"}}>
                <Sider1 handleClick={handleMenuClick} />
                <Layout>
                  <div >
                  <Content>{components[render]}</Content>
                  </div>
                  
                </Layout>
              </Layout>
      
        </div>
    )
}

export default Sidebar