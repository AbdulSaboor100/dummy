import React from 'react'
import MainArea from '../components/main-area/main-area';
import MainNavbar from '../components/navbar/navbar';
import styles from './home.module.scss';

const Home = () => {
    return (
        <div className={styles.main_container}>
            <MainNavbar />
            <MainArea />
        </div>
    )
}

export default Home
