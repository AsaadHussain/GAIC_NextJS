
import Link from "next/link";

export default function Home() {

  return (
    <div className="divOut">
      <div className="divM">
        <div className="divT">
          <p>Hello, My name is <span className="_name">Asaad</span><br />and I am a <span className="_splW">NextJS</span><br />developer</p>
          <div className="buttonDiv">
            <Link href="/blogs"><button className="buttonB">Blogs</button></Link>
          </div>
        </div>
        <div className="divI">
          <img src="/img2.jpg" alt="image" />
        </div>
      </div>
    </div>
  );
}
