
import "@/app/blogs/Blogs.css";
import Link from "next/link";

export default function Blogs() {
    return (
        <div className="mainD">
            <div className="heading">
                <h1>Read Our Daily Blogs</h1>
            </div>
            <div className="cardD">
                <Link href="/blogs/nature">
                <div className="card">
                    <div className="cardImgD">
                         <img src="/nature2.jpg" alt="image" />
                    </div>
                    <div className="circle"></div>
                    <div className="cardTextD">
                        <h3>Nature</h3>
                        <p>Nature is a breathtaking force that . . .</p>
                    </div>
                </div>
                </Link>
                <Link href="/blogs/food">
                <div className="card">
                    <div className="cardImgD">
                        <img src="/food2.jpg" alt="image" />
                    </div>
                    <div className="circle"></div>
                    <div className="cardTextD">
                        <h3>Food</h3>
                        <p>Food is more than just sustenance comfort . . .</p>
                    </div>
                </div>
                </Link> 
                <Link href="/blogs/sports"> 
                <div className="card">
                    <div className="cardImgD">
                        <img src="/sports2.jpg" alt="image" />
                    </div>
                    <div className="circle"></div>
                    <div className="cardTextD">
                        <h3>Sports</h3>
                        <p>Sports are a powerful expression of human spirit . . .</p>
                    </div>
                </div>
                </Link>
            </div>
            <div className="cardD">
            <Link href="/blogs/ai"> 
                <div className="card">
                    <div className="cardImgD">
                        <img src="/ai2.jpg" alt="image" />
                    </div>
                    <div className="circle"></div>
                    <div className="cardTextD">
                        <h3>AI</h3>
                        <p>Artificial Intelligence (AI) represents a . . .</p>
                    </div>
                </div>
                </Link>
                <Link href="/blogs/cameras"> 
                <div className="card">
                    <div className="cardImgD">
                        <img src="/camera2.jpg" alt="image" />
                    </div>
                    <div className="circle"></div>
                    <div className="cardTextD">
                        <h3>Cameras</h3>
                        <p>Cameras have revolutionized the way . . .</p>
                    </div>
                </div>
                </Link>
                <Link href="/blogs/mobile"> 
                <div className="card">
                    <div className="cardImgD">
                        <img src="/mobile2.jpg" alt="image" />
                    </div>
                    <div className="circle"></div>
                    <div className="cardTextD">
                        <h3>Mobile Phones</h3>
                        <p>Mobile phones have become an essential part of . . .</p>
                    </div>
                </div>
                </Link>
            </div>
        </div >
    );
}