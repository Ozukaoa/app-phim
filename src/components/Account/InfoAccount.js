import { Button, Col, Row } from "antd"
import React from "react"
import user from "../../images/user.png"


const InfoAccount =() =>{


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
                                <div>User 1004</div>
                                <div>
                                <Row>
                                    <Col span={11}>
                                    <span className="thin">Giới tính: </span>
                                        <span>Chưa được thiết lập</span>
                                    </Col>
                                    <Col span={2}>|</Col>
                                    <Col span={11}>
                                    <span className="thin">Ngày sinh: </span>
                                        <span>Chưa được thiết lập</span>
                                    </Col>
                                </Row>
                                </div>
                            </span>
                            </Col>
                            <Col span={2} className="bt3">
                                <Button className="btn">Chỉnh sửa</Button>
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
                            Email &ensp;<span className="bold">thanhluan@gmail.com</span>
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
            
        </>
    )
}

export default InfoAccount