import { Button, Col, Form, Input, Modal, notification, Row } from "antd"
import axios from "axios"
import React, { useEffect, useState } from "react"
import user from "../../images/user.png"


const InfoAccount =() =>{

    const [openModal,setOpenModal] =useState(false)
    const [infoUser,setInfoUser] = useState({})
    const handleOpenModal =()=>{
        setOpenModal(true)
    }
    const closeModal=()=>{
        setOpenModal(false)
    }

    
    useEffect(()=>{
        axios.get(`http://localhost:3003/apis/user/show/info/${localStorage.getItem("infoUser")}`)
        .then(response=>{
            console.log(response,"user")
            if(response.status===200){
               setInfoUser(response.data[0])
                
            }
        
                
        })
    },[])

    const onFinish = (values) => {
        console.log('Success:', values);

        axios.get(`http://localhost:3003/apis//show/info/${localStorage.getItem("infoUser")}`)
            .then(response=>{
                console.log(response)
                if(response.status===200){
                   setInfoUser(response.data)
                    // localStorage.setItem("accessToken",response.data)
                    notification.success({
                    message:"Tạo tài khoản thành công"
                })
                }
            
                    
            })
            
            .catch(error =>{
                notification.error({
                    message:"Tài khoản hoặc mật khẩu sai"
                })
            })
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <>
            <div >
                <h2>Cài đặt cá nhân</h2>
                <div className="Cc">
                    Thông tin cá nhân</div>
                <div className="card1">

                    <div className="user">
                        <Row>
                            <Col span={2}><img src={user}></img> </Col>
                            <Col span={18}><span className="bt1">
                                <div>{infoUser.idNguoiDung}</div>
                                <div>
                                <Row>
                                    <Col span={11}>
                                    <span className="thin">Giới tính: </span>
                                        <span>{infoUser.gioiTinh===null?
                                        "Chưa được thiết lập":
                                        infoUser.gioiTinh
                                        }</span>
                                    </Col>
                                    <Col span={2}>|</Col>
                                    <Col span={11}>
                                    <span className="thin">Ngày sinh: </span>
                                        <span>{infoUser.ngaySinh??"Chưa được thiết lập"}</span>
                                    </Col>
                                </Row>
                                </div>
                            </span>
                            </Col>
                            <Col span={2} className="bt3">
                                <Button className="btn" onClick={handleOpenModal}>Chỉnh sửa</Button>
                            </Col>
                        </Row>
                    
                    
                    </div>
                </div>
                
                <div className="Cc">
                    Vip</div>
                <div className="card2">

                    <Row>
                        <Col span={20}>
                        <div className="bt1">Trở thành vip</div>
                        <div className="bt2">Đăng kí VIP để xem nội dung độc quyền, xem phim HD đồng thời có thể bỏ qua quảng cáo</div>
                        </Col>
                        <Col span={2} className="bt3">
                                <Button className="btn">Đăng kí VIP</Button>
                            </Col>
                    </Row>

                   
                </div>

                <div className="Cc">
                    Tài khoản và bảo mật</div>
                <div className="card3">

                    <div >
                        <div className="start">
                            Email &ensp;<span className="bold">{infoUser.email}</span>
                            <div className="end" onClick={{}}>Chỉnh sửa</div>
                        </div>
                        
                        <hr></hr>
                    </div>

                    <div >
                        <div className="start">
                            Số điện thoại &ensp;<span className="bold">Chưa được thiết lập</span>
                            <div className="end" onClick={{}}>Chỉnh sửa</div>
                        </div>
                        
                        <hr></hr>
                    </div>

                    <div >
                        <div className="start">
                            Mật khẩu &ensp;<span className="bold">Chưa được thiết lập</span>
                            <div className="end" onClick={{}}>Chỉnh sửa</div>
                        </div>
                        
                        <hr></hr>
                    </div>

                    <div >
                        <div className="start">
                            Quản lí Vip &ensp;<span className="bold">Chưa được thiết lập</span>
                            <div className="end" onClick={{}}>Chỉnh sửa</div>
                        </div>
                        
                        <hr></hr>
                    </div>
                   
                </div>
            </div>

            <Modal
          open={openModal}
          title=""
          width={400}
          footer={false}
          onCancel={closeModal}
          className="modal"
        >
                <h2 style={{marginLeft:"90px"}}>Thông tin cá nhân</h2>

             <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
                <Form.Item
                    label="Tên đầy đủ"
                    name="tenDayDu"
                    rules={[
                    {
                        required: true,
                        message: 'Hãy nhập tên đăng nhập của bạn!',
                    },
                    ]}
                >
                    <Input
                placeholder='Tên đầy đủ'
                />
                </Form.Item>


                <Form.Item
                    label="Địa chỉ"
                    name="diaChi"
                    rules={[
                    {
                        required: true,
                        message: 'Hãy nhập email',
                    },
                    ]}
                >
                    <Input
                    placeholder='Email'
                    type='email'
                    /> 
                </Form.Item>

                <Form.Item
                    label="Giới tính"
                    name="gioiTinh"
                    // rules={[
                    // {
                    //     required: true,
                    //     message: 'Hãy nhập mật khẩu',
                    // },
                    // ]}
                >
                    <Input
                    placeholder='Giới tính'
                    
                    /> 
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                >
                    <Input
                    placeholder='Email'
                    value={infoUser.email}
                    /> 
                </Form.Item>

                <Form.Item
                    label="Ngày sinh"
                    name="ngaySinh"
                >
                    <Input
                    placeholder='Ngày sinh'
                    /> 
                </Form.Item>
                <Form.Item
                >
                    <Button style={{marginLeft:"160px", marginTop:"20px"}}htmlType="submit">Đăng kí</Button>
                </Form.Item>
        </Form>
        </Modal>
        </>
    )
}

export default InfoAccount