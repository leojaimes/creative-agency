import Head from "next/head"
import { FC } from "react"

interface Props {
    children: React.ReactNode
}
export const HeaderLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Head>

            </Head>
            <>
                {children}
            </>
        </>
    )
}