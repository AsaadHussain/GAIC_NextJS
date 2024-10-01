
import "@/components/Footer.css";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="outDiv">
            <footer className="footerDiv">
                <img className="logo" src="/logo.png" alt="image" />
                <ul className="listDiv">
                    <li className="home"><Link href="/">Home</Link></li>
                    <li className="about"><Link href="/">About Us</Link></li>
                    <li className="product"><Link href="/">Products</Link></li>
                    <li className="visit"><Link target="_blank" href="https://www.google.com/maps/place/Clifton,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8182863,66.9458413,11435m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3eb33dbbdc1875bf:0x6a6572ab3a66fed8!8m2!3d24.8269877!4d67.025096!16zL20vMGMwdmti?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D">Visit Our Office</Link></li>
                </ul>
                <ul className="listDiv">
                    <li className="home2"><Link href="/">Home</Link></li>
                    <li className="about2"><Link href="/">About Us</Link></li>
                    <li className="product2"><Link href="/">Products</Link></li>
                    <li className="visit2"><Link target="_blank" href="https://www.google.com/maps/place/Clifton,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8182863,66.9458413,11435m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3eb33dbbdc1875bf:0x6a6572ab3a66fed8!8m2!3d24.8269877!4d67.025096!16zL20vMGMwdmti?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D">Visit Our Office</Link></li>
                </ul>
                <div className="formDiv">
                    <form action="">
                        <input type="text" placeholder="Enter your email" />
                        <input type="submit" value="Subscribe" />
                    </form>
                    <p className="footerP">© 2024 My Website. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}