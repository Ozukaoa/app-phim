import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import user from '../../images/user.png';
import logo from '../../images/logo/logo.png';
import {CaretDownOutlined,SearchOutlined,HistoryOutlined,BellFilled,UserOutlined} from '@ant-design/icons';
import './Header.scss';
import { Modal, Popover } from 'antd';
import Login from '../Login/Login';
import SetPage from '../Login/SetPage';


const Header = () => {

    const [modalLogin,setModalLogin]= useState(false)

    const openLogin =()=>{
        
        setModalLogin(true)
        hide()
    }

    const closeLogin=()=>{
        setModalLogin(false)
    }

    const [term, setTerm] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { value } = event.target;
        setTerm(value);
    }
    const submitHandler = (event) => {
        if (term === "")
            alert("Please enter text")
        else {
            dispatch(fetchAsyncMovies(term))
            dispatch(fetchAsyncShows(term))
        }
        event.preventDefault();

    }

    const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

    const content = (
        <>
        <div>
        <Link to={`/account`} onClick={hide}>
          <a className='click'>Thông tin tài khoản</a>
          </Link>
          </div>
     
          <div>
          <a className='click' onClick={openLogin}>Đăng nhập</a>
        </div>
        </>
        
      );


    return (
        <div className='header'>
              <div className='head'>
            <div className="logo">
                <Link to='/'>
                <img src={logo} alt='logo' sizes='20%'></img>
                </Link>
            </div>

            <div style={{}}>
                <span className='font' style={{color:"#E23E3E"}}>
                    Đề xuất
                </span>
                <span className='font' style={{color:"#CCCCCC"}}>
                    Khám phá
                    <CaretDownOutlined color='#CCCCCC'/>
                </span>
            </div>

            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder='Nhập tên phim thể loại' name="search" onChange={handleChange} />
                    <span className='search'>
                        | <SearchOutlined />
                    </span>
                    
                    {/* <button type='submit'> <i className="fa fa-search"></i> </button> */}
                </form>
            </div>

            <div className='button-function'>
            <HistoryOutlined />
            <BellFilled className='button'/>

            {/* <UserOutlined className='button' 
            onClick={openLogin}
            /> */}
            <Popover 
                placement="bottom"  
                content={content} 
                trigger="click"
                open={open}
                onOpenChange={handleOpenChange}
            >
            <UserOutlined className='button' 
            // onClick={openLogin}
            />
             </Popover>

            </div>

            

           <SetPage
           first={"login"}
            modalLogin={modalLogin}
            handleCancel={closeLogin}
            
            
           />
            </div>


        </div>
    )
}

export default Header