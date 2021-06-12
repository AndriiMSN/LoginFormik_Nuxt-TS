// Core
import {FC} from 'react';
import clsx from 'clsx';
// Styles
import styles from './loginWith.module.sass'
//Components
import {FacebookIcon, GoogleIcon} from "../../../UI/icons";

export const LoginWith: FC = (props) => {

    return (
        <div className={styles['login-with']}>
            <hr className={clsx('divider divider-content mb-24', styles['hr-content'])}/>

            <div className="d-flex a-center j-sp-b mb-24">
                <button className="btn-social">
                    <GoogleIcon/>
                    Google
                </button>
                <button className='btn-social'>
                    <FacebookIcon/>
                    Facebook
                </button>
            </div>
        </div>
    );
}