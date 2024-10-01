import "@/components/Navbar.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navDiv">
            <nav className="navbar">
                <ul className="list">
                    <li className="_home"><Link href="/">HOME</Link></li>
                    <li className="_contact"><Link href="/">CONTACT US</Link></li>
                    <li className="_about"><Link href="/">ABOUT US</Link></li>
                    <li className="_serv"><Link href="/">SERVICES</Link></li>
                    <li className="_sign"><Link href="/">SIGN UP</Link></li>
                </ul>
            </nav>
        </div>
    );
}