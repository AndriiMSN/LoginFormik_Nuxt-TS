// Core
import {FC, useEffect, useState} from "react";
// Styles
import styles from './passwordValidation.module.sass'
import clsx from "clsx";

// Interfaces
interface Props {
    password: string
}

export const PasswordValidation: FC<Props> = ({password}) => {
    const [lengthValid, setLengthValid] = useState<boolean>(false)
    const [numberValid, setNumberValid] = useState<boolean>(false)
    const [upperValid, setUpperValid] = useState<boolean>(false)
    const [strong, setStrong] = useState<number[]>([0, 0, 0])
    useEffect(() => {

        if (password) {
            const newStrong = [...strong]
            if (password.length >= 8) {
                setLengthValid(true)
                newStrong[0] = 1
            } else {
                setLengthValid(false)
                newStrong[0] = 0
            }
            if (/\d|(?=.*[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/])/.test(password) && password.length >= 8) {
                setNumberValid(true)
                newStrong[1] = 1
            } else {
                setNumberValid(false)
                newStrong[1] = 0
            }
            if (/(?=.*[a-z])(?=.*[A-Z])/.test(password) && password.length >= 8) {
                setUpperValid(true)
                newStrong[2] = 1
            } else {
                setUpperValid(false)
                newStrong[2] = 0
            }
            setStrong(newStrong.sort((a, b) => b - a))
        } else {
            setStrong([0, 0, 0])
        }
    }, [password])
    return (
        <div className={styles.container}>
            <div className={styles.strong}>
                <div className={clsx('pass-v-item',
                    styles.item, strong[0] === 1 ? styles.strongActive : '')}/>
                <div className={clsx('pass-v-item',
                    styles.item, strong[1] === 1 ? styles.strongActive : '')}/>
                <div className={clsx('pass-v-item',
                    styles.item, strong[2] === 1 ? styles.strongActive : '')}/>
            </div>
            <div className='mt-12'>
                <p className={clsx(styles.text, 'large', lengthValid ? 'txt-und' : '')}>
                    At least 8 characters</p>
                <p className={clsx(styles.text, 'large', numberValid ? 'txt-und' : '')}>
                    At least one number or symbol</p>
                <p className={clsx(styles.text, 'large', upperValid ? 'txt-und' : '')}>
                    Both uppercase and lowercase letters</p>
            </div>
        </div>
    )
}