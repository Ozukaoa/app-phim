import { Checkbox, Col, Input, Modal, Row } from "antd"
import React from "react"
import './UpdateVip.scss';
import user from "../../images/user.png";
import mastercard from "../../images/logo/mastercard.png";
import l1 from "../../images/logo/la1.png";
import l2 from "../../images/logo/la2.png";
import l3 from "../../images/logo/la3.png";
const UpdateVip =(props) =>{


    return (
        <>
            <Modal
                title=""
                width="1000px"
                open={props.modalVip}
                onCancel={props.handleCloseVip}
                footer={false}
                className="modalVip"
            >
                <div className="title">
                        <Row>
                            <Col span={1}></Col>
                            <Col span={2}><img src={user}></img> </Col>
                            
                            <Col span={18}>
                                <div className="d1">User 1004</div>
                                <div className="d2">Đăng ký VIP để tận hưởng đặc quyền</div>

                            </Col>
                        </Row>
                </div>
                <div className="content">

                    <div className="Packs">
                        <div className="pack">
                            <div className="d1">Tiêu chuẩn</div>
                            <div className="d2">Gia hạn gói</div>
                            <div className="d3">39000đ</div>
                        </div>
                    

                    
                        <div className="pack">
                            <div className="d1">Tiêu chuẩn</div>
                            <div className="d2">Gia hạn gói</div>
                            <div className="d3">39000đ</div>
                        </div>

                        <div className="pack">
                            <div className="d1">Tiêu chuẩn</div>
                            <div className="d2">Gia hạn gói</div>
                            <div className="d3">39000đ</div>
                        </div>
                    

                    
                        <div className="pack">
                            <div className="d1">Tiêu chuẩn</div>
                            <div className="d2">Gia hạn gói</div>
                            <div className="d3">39000đ</div>
                        </div>
                    </div>
                        <div className="tt">Sau khi khuyến mãi kết thúc hệ thống sẽ tự động gia hạn 1 tháng khi hết hạn. Hủy bỏ bất cứ lúc nào</div>
                        <div className="tt2">
                            Chọn phương thức thanh toán
                            <div className="mastercard">
                                <img src={mastercard}></img>
                                <div className="t1">
                                    <div className="d1">Thẻ ngân hàng</div>
                                    <div className="d2">Masercard. Visa, JCB</div>
                                </div>
                            </div>
                        </div>
                        <div className="tt3">
                            <div style={{marginBottom:"10px"}}>Vui lòng thiết lập thẻ tín dụng hoặc thẻ ghi nợ của bạn</div>
                             <div>
                              
                                <Input
                             placeholder="Nhập số thẻ tín dụng của bạn"
                             
                             prefix={
                                <span>
                                <img src={l1}></img>
                                <img src={l2}></img>
                                <img src={l3}></img>
                                </span>
                             }
                             ></Input>
                                </div>
                             <div style={{marginTop:"10px"}}>
                             <Input placeholder="Hạn sử dụng thẻ tín dụng (Tháng/Năm)"/>

                             </div>
                             <div style={{marginTop:"10px"}}>
                             <Input placeholder="Mã bảo mật (CVV)"/>
                             </div>
                             
                             
                            
                        </div>
                        <div className="tt4">
                            <Checkbox>Tôi đồng ý Thỏa thuận dịch vụ VIP</Checkbox>
                            <div className="gr1">
                                <div className="bt1">75.000đ</div>
                                <div className="bt2">Gia nhập VIP</div>
                            </div>
                        </div>

                </div>

                
            </Modal>

        </>
    )
}

export default UpdateVip