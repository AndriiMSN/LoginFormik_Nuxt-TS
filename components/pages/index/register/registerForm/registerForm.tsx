// Core
import {FC, useContext, useState} from 'react';
import {set, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {login} from "../../../../../store/slices/user";
import clsx from "clsx";
import {InputError} from "../../../../UI/input/inputError";
import {TogglePassword} from "../../../../UI/input/togglePassword";
import {PasswordValidation} from "../../passwordValidation";
import {MainContext} from "../../welcome";
import axios from "../../../../../util/api/axios";

// Interfaces
interface IFormInput {
    registerName: string,
    registerEmail: string;
    registerPassword: string;
    terms: string
}

interface RegisterData {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    type: "password"
}


export const RegisterForm: FC = (props) => {
    const {changeMode, setEmail} = useContext(MainContext)

    const {register, handleSubmit, watch, setFocus, setValue, formState: {errors}} = useForm<IFormInput>();
    const dispatch = useDispatch()
    const [readonlyEmail, setReadonlyEmail] = useState<boolean>(true)
    const [readonlyPass, setReadonlyPass] = useState<boolean>(true)
    const [showPass, setShowPass] = useState<boolean>(false)

    const onSubmit = (data) => {
        let fullname = data.registerName.replace(/\s{2,}/g, ' ').split(' ')
        let firstName = fullname[0]
        let lastNamesArray = fullname.slice(1)
        let lastName = ''
        if (lastNamesArray.length > 0) {
            lastNamesArray.forEach((el) => {
                lastName += el;
            })
        }
        let formatedData: RegisterData = {
            email: data.registerEmail,
            password: data.registerPassword,
            firstName: firstName,
            lastName: lastName,
            type: "password"
        }
        console.log(formatedData)
        setEmail(data.registerEmail)

        axios.post('/register', formatedData)
            .then((response) => {
                console.log(response);
                if (response.statusText === 'OK') {
                    setEmail(formatedData.email)
                    changeMode(2)
                }
            }, (error) => {
                console.log(error);
            });
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-rel mb-16">
                <div className="p-rel">
                    {errors.registerName &&
                    <InputError onclick={() => {
                        setValue('registerName', '')
                        setFocus('registerName')
                    }}/>}
                    <input
                        className={clsx('input-default mb-8', {error: errors.registerName})}
                        type='text'
                        name='registerName'
                        id='registerName'
                        readOnly={readonlyEmail}
                        onFocus={() => setReadonlyEmail(false)}
                        {...register('registerName', {
                            required: 'Required',
                            pattern: {
                                value: /[a-zA-Z ]+/,
                                message: 'only latin letters'
                            },
                        })
                        } />
                    <label
                        htmlFor="registerName"
                        className={watch('registerName')?.length > 0 ? 'input-focused' : ''}
                    >Full name</label>
                </div>
                {errors.registerName &&
                <div className='input-error mb-16'>{errors.registerName.message}</div>}
            </div>
            <div className="p-rel mb-16">
                <div className="p-rel">
                    {errors.registerEmail &&
                    <InputError onclick={() => {
                        setValue('registerEmail', '')
                        setFocus('registerEmail')
                    }}/>}
                    <input
                        className={clsx('input-default mb-8', {error: errors.registerEmail})}
                        type='email'
                        name='registerEmail'
                        id='registerEmail'
                        readOnly={readonlyEmail}
                        onFocus={() => setReadonlyEmail(false)}
                        {...register('registerEmail', {
                            required: 'Required',
                            pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Wrong Format'
                            },
                        })
                        } />
                    <label
                        htmlFor="reg-email"
                        className={watch('registerEmail')?.length > 0 ? 'input-focused' : ''}
                    >Email address</label>
                </div>
                {errors.registerEmail &&
                <div className='input-error mb-16'>{errors.registerEmail.message}</div>}
            </div>
            <div className="p-rel mb-16">
                <div className="p-rel">
                    <TogglePassword error={!!errors.registerPassword} show={showPass}
                                    toggle={() => setShowPass(!showPass)}/>
                    <input
                        className={clsx('input-default mb-8', {error: errors.registerPassword})}
                        type={showPass ? 'text' : 'password'}
                        name='registerPassword'
                        id='registerPassword'
                        readOnly={readonlyPass}
                        onFocus={() => setReadonlyPass(false)}
                        {...register("registerPassword", {
                            required: 'Required',
                            minLength: {
                                value: 8,
                                message: 'Minimum 8 symbols'
                            }
                        })
                        } />
                    <label
                        htmlFor="registerPassword"
                        className={watch('registerPassword')?.length > 0 ? 'input-focused' : ''}
                    >Password</label>
                </div>
                {errors.registerPassword &&
                <div className='input-error mb-16'>{errors.registerPassword.message}</div>}
                <PasswordValidation password={watch('registerPassword')}/>
            </div>
            <div className="d-flex j-sp-b a-center mb-24">
                <div className="p-rel">
                    <input
                        id="terms"
                        type="checkbox"
                        name="terms"
                        className={clsx({error: errors.terms})}
                        {...register("terms", {
                            required: 'Required',
                        })}
                    />
                    <label htmlFor="terms" className='large'>
                        By clicking Register, you agree to our
                        <span className='pink c-pointer'> Terms of Services </span>
                        and that you have read our
                        <span className='pink c-pointer'> Data Use Policy </span>
                        , including our Cookie Use
                    </label>
                </div>
            </div>
            <hr className='divider mb-24'/>
            <button type='submit' className='btn btn-large'>Register</button>
        </form>
    );
};