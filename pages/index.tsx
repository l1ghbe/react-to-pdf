import type { NextPage } from "next";
import Page from "../components/Page";
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <>
            <a
                href="/api/pdf"
                download="generated_pdf.pdf"
                className="downloadBtn"
            >
                Download PDF
            </a>
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
            </Page>
        </>
    );
};

export default Home;
