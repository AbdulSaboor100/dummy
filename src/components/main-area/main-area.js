import React from 'react'
import { Col, Row } from 'reactstrap';
import styles from './main-area.module.scss';

const MainArea = () => {
    return (
        <div className={styles.main_area}>
            <Row>
                <Col sm={12} md={12} >
                    <div className={styles.div1}>
                        <Col sm={12} md={12}>
                            <div className={styles.heading}>
                                <img src="/Assets/logo1.png" />
                            </div>
                        </Col>
                        <Row>
                            <Col sm={12} md={3}>
                                <div className={styles.first_section}>
                                    <img style={{width:'100%',height:'auto'}} src="/Assets/post1.png" />
                                    <img style={{width:'100%',height:'auto'}} src="/Assets/post2.png" />
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div className={styles.second_section}>
                                    <img style={{width:'100%',height:'auto'}} src="/Assets/post3.png" />
                                </div>
                            </Col>
                            <Col sm={12} md={3}>
                                <div className={styles.third_section}>
                                    <img style={{width:'100%',height:'auto'}} src="/Assets/post4.png" />
                                    <img style={{width:'100%',height:'auto'}} src="/Assets/post5.png" />
                                </div>
                            </Col>
                        </Row>
                        <div className={styles.second_bar}>
                        <Row>
                            
                            <Col sm={12} md={6}>
                                <div className={styles.main_side_pic}>
                                    <img src="/Assets/post6.png" />
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div className={styles.main_content}>
                                    <div>
                                        <h2>Welcome To The</h2>
                                    </div>
                                    <div>
                                        <img src="/Assets/logo2.png" />
                                    </div>
                                    <div>
                                        <p>The Rich Apez Collection is 3D NFT Collection that leads into the metaverse of the Apez with a 2D Animated Series!</p>
                                        <p>The Rich Apez is the begining of an all new type of NFT collection and not your average PFP Project.</p>
                                        <p>Rich Apez will have their own Animated Series, Merch, and also feature major guest celebrities to voice the role in the series which is only accessible to NFT Holders of the collection!</p>
                                    </div>
                                </div>
                            </Col>
                            
                        </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MainArea;


