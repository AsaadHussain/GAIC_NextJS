
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="divOut">
      <Navbar />
      <div className="divM">
        <div className="divT">
          <p>Hello, My name is <span className="_name">Asaad</span><br />and I am a <span className="_splW">NextJS</span><br />developer</p>
        </div>
        <div className="divI">
          <img src="/img1.jpg" alt="image" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
