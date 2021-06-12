// Core
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import {selectUser} from "../store/slices/user";
import Head from "next/head";

// Components
import {Welcome} from "../components/pages/index";


export default function Index() {
    const router = useRouter()
    const {user} = useSelector(selectUser)
    useEffect(() => {
        if (user) {
            router.replace('/profile')
        }
    }, [user])

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Welcome/>
        </>
    )
}