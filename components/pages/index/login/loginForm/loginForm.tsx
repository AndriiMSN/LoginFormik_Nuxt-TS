// Core
import {FC, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {login} from "../../../../../store/slices/user";
import clsx from "clsx";
// Components
import {InputError} from "../../../../UI/input/inputError";
import {TogglePassword} from "../../../../UI/input/togglePassword/togglePassword";

// Interfaces
interface IFormInput {
    loginEmail: string;
    loginPassword: string;
    remember: string
}


export const LoginForm: FC = (props) => {
    const {register, handleSubmit, watch, setValue, setFocus, formState: {errors}} = useForm<IFormInput>();
    const dispatch = useDispatch()

    const [readonlyEmail, setReadonlyEmail] = useState<boolean>(true)
    const [readonlyPass, setReadonlyPass] = useState<boolean>(true)
    const [showPass, setShowPass] = useState<boolean>(false)

    const onSubmit = (data) => {
        console.log(data);
        dispatch(login())
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-rel mb-16">
                <div className="p-rel">
                    {errors.loginEmail &&
                    <InputError onclick={() => {
                        setValue('loginEmail', '')
                        setFocus('loginEmail')
                    }}/>}
                    <input
                        className={clsx('input-default', {error: errors.loginEmail})}
                        type='email'
                        name='loginEmail'
                        id='loginEmail'
                        readOnly={readonlyEmail}
                        onFocus={() => setReadonlyEmail(false)}
                        {...register('loginEmail', {
                            required: 'Required',
                            pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Wrong Format'
                            },
                        })
                        } />
                    <label
                        htmlFor="loginEmail"
                        className={watch('loginEmail')?.length > 0 ? 'input-focused' : ''}
                    >Email address</label>
                </div>
                {errors.loginEmail &&
                <div className='input-error mt-8 mb-16'>{errors.loginEmail.message}</div>}
            </div>
            <div className="p-rel mb-16">
                <div className="p-rel">
                    <TogglePassword error={!!errors.loginPassword} show={showPass} toggle={() => setShowPass(!showPass)}/>
                    <input
                        className={clsx('input-default', {error: errors.loginPassword})}
                        type={showPass ? 'text' : 'password'}
                        name='loginPassword'
                        id='loginPassword'
                        readOnly={readonlyPass}
                        onFocus={() => setReadonlyPass(false)}
                        {...register("loginPassword", {
                            required: 'Required',
                            minLength: {
                                value: 8,
                                message: 'Minimum 8 symbols'
                            }
                        })
                        } />
                    <label
                        htmlFor="loginPassword"
                        className={watch('loginPassword')?.length > 0 ? 'input-focused' : ''}
                    >Password</label>
                </div>
                {errors.loginPassword &&
                <div className='input-error mt-8 mb-16'>{errors.loginPassword.message}</div>}
            </div>
            <div className="d-flex j-sp-b a-center mb-24">
                <div className="p-rel">
                    <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        {...register("remember")}
                    />
                    <label htmlFor="remember" className='large'>Remember me</label>
                </div>
                <div className="p-rel">
                    <p className="medium pink c-pointer">Forgot password ?</p>
                </div>
            </div>
            <hr className='divider mb-24'/>
            <button type='submit' className='btn btn-large'>Log in</button>
        </form>
    );
};