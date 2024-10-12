
import "@/components/Footer.css";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="outDiv">
            <footer className="footerDiv">
                <img className="logo" src="/logo.png" alt="image" />
                <div className="listMain">
                    <ul className="listDiv">
                        <li className="home"><Link href="/">Home</Link></li>
                        <li className="about"><Link href="/">About Us</Link></li>
                        <li className="product"><Link href="/blogs">Blogs</Link></li>
                        <li className="visit"><Link target="_blank" href="https://www.google.com/maps/">Visit Our Office</Link></li>
                    </ul>
                    <ul className="listDiv">
                        <li className="facebook"><Link href="/">Facebook</Link></li>
                        <li className="twitter"><Link href="/">Twitter</Link></li>
                        <li className="instagram"><Link href="/">Instagram</Link></li>
                        <li className="youtube"><Link target="_blank" href="https://www.google.com/maps/">Youtube</Link></li>
                    </ul>
                </div>
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