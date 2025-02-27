import CodeIcon from "@mui/icons-material/Code";

const About = () => {
  return (
    <div
      className="flex pt-10 pb-40 justify-between items-stretch px-72"
      id="about"
    >
      <div>
        <img
          src="src/assets/johanna.png"
          alt="Johanna"
          className="rounded-full shadow-sm w-96"
        />
      </div>
      <div className="flex flex-col justify-start items-start w-1/2 gap-8">
        <h2 className="text-light font-space text-4xl lowercase grow border-b-2 border-red pb-4">
          About me
        </h2>
        <p className="text-light font-thin tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          voluptatibus odit magnam, consectetur corporis voluptate illum
          praesentium commodi adipisci aspernatur. Reiciendis magni voluptates
          eum pariatur aspernatur dolorum voluptatibus totam cupiditate.
        </p>
        <p className="text-light font-thin tracking-wide">
          Some technologies I have been working with:
        </p>
        <ul className="list-inside flex gap-8">
          <div>
            <li className="text-light font-light flex items-center  gap-4">
              <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} /> HTML
            </li>
            <li className="text-light font-light flex items-center gap-4">
              <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} /> CSS
            </li>
            <li className="text-light font-light flex items-center gap-4">
              <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} /> JavaScript
            </li>
            <li className="text-light font-light flex items-center gap-4">
              <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} /> React
            </li>
          </div>
          <div>
            <li className="text-light font-light flex items-center gap-4">
              <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} /> Node.js
            </li>
            <li className="text-light font-light flex items-center gap-4">
              <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} /> PostgreSQL
            </li>
            <li className="text-light font-light flex items-center gap-4">
              <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} /> MongoDB
            </li>
            <li className="text-light font-light flex items-center gap-4">
              <CodeIcon style={{ fontSize: 20, color: "#FF4F47" }} /> Java
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
