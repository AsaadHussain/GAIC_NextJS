import "@/app/blogs/Blogs.css";
import Link from "next/link";

const data = [
    {
        title: "Nature",
        description: "This is nature",
        slug: "nature",
        src: "/nature2.jpg"
    },
    {
        title: "Food",
        description: "All about food",
        slug: "food",
        src: "/food2.jpg"
    }
]

export default function Blogs() {
    return (
        <div className="mainD">
            <div className="heading">
                <h1>Read Our Daily Blogs</h1>
            </div>
            <div className="cardD">
                {
                    data.map((x, index) => (
                        <Link key={index} href={`/blogs/${x.slug}`}>
                            <div className="card">
                                <div className="cardImgD">
                                    <img src={`${x.src}`} alt="image" />
                                </div>
                                <div className="circle"></div>
                                <div className="cardTextD">
                                    <h3>{x.title}</h3>
                                    <p>{x.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div >
    );
}
