import { Typewriter } from "react-simple-typewriter";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-6/12 py-80 gap-8">
        <h1 className="text-light font-space text-5xl lowercase">
          <Typewriter words={["Hey! My name is Johanna!"]} />
        </h1>
        <h2 className="text-red font-light text-xl tracking-wide">
          I'm a frontend developer with a design background.
        </h2>
        <p className="text-light text-center font-thin tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          explicabo perferendis culpa? Recusandae nulla, error quod delectus
          aliquam aperiam vero laborum, magnam facere enim eaque quibusdam
          voluptatem molestiae. Facere, recusandae!
        </p>
        <a
          className="px-4 py-2 border border-red rounded-xl text-light font-space lowercase text-lg hover:border-light "
          href="#"
        >
          <DownloadForOfflineIcon
            style={{ fontSize: 32, color: "#f5f4ed", paddingRight: 10 }}
          ></DownloadForOfflineIcon>{" "}
          Get my CV{" "}
        </a>
      </div>
    </div>
  );
};

export default Hero;
