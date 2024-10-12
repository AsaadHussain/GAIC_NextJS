

import "@/app/blogs/cameras/Cameras.css";

export default function Cameras() {
    return (
        <div className="mainDiv">
            <img className="imgB" src="/cameraB.jpg" alt="image" />
            <div className="textDiv">
                <div className="headingDiv">
                    <h1>Cameras</h1>
                </div>
                <p>
                    &emsp;&emsp;Cameras have revolutionized the way we capture and preserve 
                    moments, offering a unique window into the world. From early film cameras 
                    to today’s advanced digital models, they have evolved into powerful tools 
                    for storytelling, creativity, and documentation.
                    <br/><br/>&emsp;&emsp;
                    Cameras allow us to freeze 
                    time, capturing everything from the beauty of nature to the essence of human 
                    emotions in a single frame. Whether used in professional photography, filmmaking, 
                    or everyday snapshots, they empower individuals to share their perspectives with 
                    the world.
                </p>
            </div>
        </div>
    );
}