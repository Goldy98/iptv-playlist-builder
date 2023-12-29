import UploadField from "../../components/UploadField/UploadField";
import "./Home.css";
import BuzzWord from "./components/BuzzWord";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-5xl mb-7">Welcome</h1>
      <h3 className="text-xl">
        Edit (<BuzzWord />) your .m3u playlist for IPTV with our user friendly
        app
      </h3>

      <div className="mt-5">
        <UploadField />
      </div>
    </div>
  );
}

export default Home;
