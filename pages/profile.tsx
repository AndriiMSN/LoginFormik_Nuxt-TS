// Core
import Head from 'next/head'
import {useEffect} from "react";
import {useRouter} from "next/router";
import {useSelector, useDispatch} from "react-redux";
import {selectUser, logout} from "../store/slices/user";

export default function Home() {
    const router = useRouter()
    const {user} = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!user) {
            dispatch(logout())
            router.replace('/')
        }
    }, [user])

    return (
        <>
            {user &&
            <>
                <Head>
                    <title>Profile</title>
                </Head>
                <h2>Profile</h2>
                <button onClick={() => dispatch(logout())}>Log out</button>
            </>
            }
        </>
    )
}
