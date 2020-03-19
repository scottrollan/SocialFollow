import React from 'react'
import styles from './SocialFollow.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'

export default function SocialFollow() {
    return (
        <div className={styles.socialContainer}>
            <a href="" target="_blank"><FontAwesomeIcon className={styles.icon} icon={faFacebook} size="3x"></FontAwesomeIcon></a>
            <a href="" target="_blank"><FontAwesomeIcon className={styles.icon} icon={faInstagram} size="3x"></FontAwesomeIcon></a>
            <a href="" target="_blank"><FontAwesomeIcon className={styles.icon} icon={faTwitter} size="3x"></FontAwesomeIcon></a>
        </div>
    )
}