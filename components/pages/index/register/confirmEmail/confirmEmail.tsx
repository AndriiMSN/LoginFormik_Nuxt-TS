// Core
import {FC, useContext} from "react";
import {MainContext} from "../../welcome";
// Styles

// Components


export const ConfirmEmail: FC = () => {
    const {email} = useContext(MainContext)
    return (
        <>
            <h3 className='mb-24'>
                Confirm Email
            </h3>
            <p className={'large'}>
                <span className={'op-6'}> A message has been sent to </span>
                {email}
                <span className={'op-6'}> with instruction to reset your password</span>
            </p>
        </>
    )
}