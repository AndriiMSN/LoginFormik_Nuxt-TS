// Core
import {FC} from "react";
// Styles
import styles from "./register.module.sass"
// Components
import {LoginWith} from "../loginWith";
import {RegisterForm} from "./registerForm";

// Interfaces
interface Props {
    changeMode(p: () => number): void
}

export const Register: FC<Props> = ({changeMode}) => {
    return (
        <>
            <h3 className='mb-24'>
                Registration
            </h3>
            <RegisterForm />
        </>
    )
}