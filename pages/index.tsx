import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Page from "../components/Page";
import Link from "next/link";
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    const [text, setText] = useState();

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("api/hello");
            const data = await res.json();
            setText(data);
        };
        getData();
    }, []);

    return (
        <>
            <a
                href="/api/pdf"
                download="generated_pdf.pdf"
                className="btn btn-download"
            >
                Download PDF
            </a>
            <Link href="/about">
                <a className="btn btn-about">About</a>
            </Link>

            <Page>
                <h1>Generated PDF</h1>
                <p>This is test file</p>
                <img
                    src="https://images.unsplash.com/photo-1648469219394-b8ff07834d6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=446&q=80"
                    alt="avatar"
                />
                <div>
                    <a
                        href="https://google.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Here is a link to google
                    </a>
                </div>
                {/* <p>{JSON.stringify(text)}</p> */}
            </Page>
        </>
    );
};

export default Home;
