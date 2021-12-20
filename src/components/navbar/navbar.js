import React from 'react'
import { Col, Row } from 'reactstrap';
import styles from './navbar.module.scss';

const MainNavbar = () => {
    return (
        <div className={styles.main_navbar}>
            <Row>
                <Col sm={12} md={12}>
                    <div className={styles.navbar}>
                        <div className={styles.div1}>
                            <img src="/Assets/Logo.png" />
                        </div>
                        <div className={styles.div2}>
                            <ul>
                                <li>Home</li>
                                <li>About Rich Apez</li>
                                <li>Members Only</li>
                                <li>Mint Token</li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MainNavbar;
