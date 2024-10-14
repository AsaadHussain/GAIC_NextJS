import "@/app/blogs/Blogs.css";
import Link from "next/link";

const data = [
    {
        title: "Nature",
        description: "This is nature",
        slug: "nature",
        src: "./"
    },
    {
        title: "Food",
        description: "All about food",
        slug: "food"
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
                                    <p>img</p>
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
