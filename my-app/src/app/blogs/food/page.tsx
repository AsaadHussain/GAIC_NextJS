

import "@/app/blogs/food/Food.css";

export default function Food() {
    return (
        <div className="mainDiv">
            <img className="imgB" src="/foodB.jpg" alt="image" />
            <div className="textDiv">
                <div className="headingDiv">
                    <h1>Food</h1>
                </div>
                <p>
                    &emsp;&emsp;Food is more than just sustenance; it is a source of comfort, 
                    culture, and connection. It nourishes our bodies and energizes us, playing 
                    a vital role in our well-being. 
                    <br/><br/>&emsp;&emsp;From the simple pleasures of home-cooked meals 
                    to the rich diversity of flavors from around the world, food reflects traditions, 
                    history, and creativity.
                </p>
            </div>
        </div>
    );
}