import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/About.module.css";

const About: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1>
                This is a project <span>REACT-TO-PDF</span>
            </h1>
            <p style={{ marginBottom: "25px" }}>
                Its goal is to learn how to convert Next.js application into PDF
                file
            </p>
            <Link href="/">
                <a
                    className="btn"
                    style={{
                        position: "relative",
                        display: "inline-block",
                        marginBottom: "25px",
                    }}
                >
                    Go back
                </a>
            </Link>
            <div>
                <iframe
                    src="https://giphy.com/embed/Fze3b822l5tcY"
                    width="480"
                    height="480"
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default About;
