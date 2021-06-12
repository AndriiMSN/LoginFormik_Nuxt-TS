// Core
import {createContext, FC, useState} from 'react';
// Styles
import styles from './welcome.module.sass'
// Components
import {Slider} from "./slider";
import {Login} from "./login";
import {Register} from "./register";
import {LoginWith} from "./loginWith";
import {ConfirmEmail} from "./register/confirmEmail/confirmEmail";
import {ArrowLeeft} from "../../UI/icons";

const mode = {
    0: Login,
    1: Register,
    2: ConfirmEmail
}

type MainContext = {
    changeMode: (number: number) => void,
    currMode: number,
    email?: string,
    setEmail: (email: string) => void
}
export const MainContext = createContext<MainContext>({} as MainContext)

export const Welcome: FC = (props) => {
        const [currMode, setCurrMode] = useState<number>(0)
        const Mode = mode[currMode]

        const changeMode = (number) => {
            setCurrMode(number)
        }

        const [email, setCurrEmail] = useState<string>('')
        const setEmail = (email) => {
            setCurrEmail(email)
        }
        return (

            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h4 className={styles.title}>
                        ARTLIFT <span className='large secondary pink'>.ai</span>
                    </h4>
                    {currMode === 2 &&
                    <button
                        className={'btn-left'}
                        onClick={() => setCurrMode(1)}>
                        <ArrowLeeft/>
                        <span className={'ml-12 op-6 '}>Back</span>
                    </button>}
                    <div className={styles.mode}>
                        <MainContext.Provider value={{currMode, changeMode, email, setEmail}}>
                            <Mode/>
                        </MainContext.Provider>
                    </div>

                    {currMode !== 2 && <LoginWith/>}

                    <div className='d-flex a-center j-center'>
                        <span className='op-6'>
                            {currMode === 0 && 'Don’t have an account? '}
                            {currMode === 1 && 'Already a member? '}
                            &nbsp;
                        </span>
                        <span
                            onClick={() => setCurrMode((currMode === 0 && 1) || (currMode === 1 && 0))}
                            className="medium pink c-pointer">
                            {currMode === 0 && 'Register Now'}
                            {currMode === 1 && 'Log in'}
                        </span>
                    </div>
                </div>
                <Slider/>
            </div>

        );
    }
;

