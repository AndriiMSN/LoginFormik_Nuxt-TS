// Core
import {FC} from "react";
// Styles
import styles from './inputError.module.sass'

// Interfaces
interface Props {
    onclick: (() => void)
}

export const InputError: FC<Props> = ({onclick}) => {
    return (
        <>
            <svg
                className={styles.error}
                onClick={onclick} width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12ZM13.3917 9.75L11.9999 11.1417L10.6083 9.75L9.75 10.6083L11.1417 11.9999L9.75 13.3917L10.6083 14.25L11.9999 12.8582L13.3917 14.25L14.25 13.3917L12.8582 11.9999L14.25 10.6083L13.3917 9.75Z"
                      fill="#DE4761"/>
            </svg>
        </>
    )
}