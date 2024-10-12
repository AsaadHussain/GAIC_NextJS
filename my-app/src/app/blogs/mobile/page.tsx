

import "@/app/blogs/mobile/Mobile.css";

export default function Mobile() {
    return (
        <div className="mainDiv">
            <img className="imgB" src="/phoneB.jpg" alt="image" />
            <div className="textDiv">
                <div className="headingDiv">
                    <h1>Mobile Phones</h1>
                </div>
                <p>
                    &emsp;&emsp;Mobile phones have become an essential part of modern life,
                    connecting people across the globe and revolutionizing communication.
                    More than just devices for making calls, they have evolved into powerful,
                    multifunctional tools that fit in the palm of our hands.
                    <br /><br />&emsp;&emsp;
                    With smartphones, we can access the internet, take high-quality photos, navigate with GPS, and
                    manage our daily tasks with countless apps. They provide instant access to
                    information, entertainment, and social interactions, making the world more
                    accessible and interconnected.
                </p>
            </div>
        </div>
    );
}