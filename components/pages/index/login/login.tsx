// Core
import {FC} from "react";
// Styles
import styles from './login.module.sass'
// Components
import {LoginForm} from "./loginForm";
import {LoginWith} from "../loginWith";


// Interfaces
interface Props {
    changeMode(p: () => number): void
}

export const Login: FC<Props> = ({changeMode}) => {
    return (
        <>
            <h3 className='mb-24'>
                Welcome to ARTLIFT <span className='t-m'>ai</span>
            </h3>
            <LoginForm/>
        </>
    )
}