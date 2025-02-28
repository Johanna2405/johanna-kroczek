const Experience = () => {
  return (
    <div className="flex flex-col pt-20 pb-40 gap-8" id="experience">
      <h2 className="text-light font-space text-4xl lowercase text-left border-b-2 border-red pb-4">
        work expierience
      </h2>
      <div className="flex flex-col gap-4 items-start py-8">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border-light bg-dark border p-4"
        >
          <div className="collapse-title ">
            <h3 className="text-light text-xl font-space">
              Webdesign & graphic design
            </h3>
          </div>
          <div className="collapse-content">
            <p className="font-thin text-red tracking-wide">
              04/2021 - 02/2024 | MEDIENWERK Agentur Lennestadt
            </p>
            <ul className="flex flex-col gap-4 pt-4 list-disc list-inside font-thin tracking-wide text-light">
              <li>
                Design and Conceptualization of print media & corporate designs
              </li>
              <li>
                Planning, Designing, and Developing websites using WordPress &
                Figma
              </li>
              <li>
                Web Server Administration, domain management, maintenance &
                service
              </li>
              <li>Monitoring and Optimization of website performance & SEO</li>
              <li>
                Close Collaboration with Clients, including planning and
                conducting workshops
              </li>
              <li>Training Sessions on managing WordPress websites</li>
            </ul>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border-light bg-dark border p-4"
        >
          <div className="collapse-title ">
            <h3 className="text-light text-xl font-space">
              Freelance web & graphic design
            </h3>
          </div>
          <div className="collapse-content">
            <p className="font-thin text-red tracking-wide">
              09/2020 - 12/2024
            </p>
            <ul className="flex flex-col gap-4 pt-4 list-disc list-inside font-thin tracking-wide text-light">
              <li>
                Conceptualization & Implementation of user-friendly websites,
                print media, and corporate designs
              </li>
              <li>Maintenance and Technical Support for WordPress websites</li>
            </ul>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border-light bg-dark border p-4"
        >
          <div className="collapse-title ">
            <h3 className="text-light text-xl font-space">Tutor</h3>
          </div>
          <div className="collapse-content">
            <p className="font-thin text-red tracking-wide">
              06/2017 - 12/2019 | Schülerhilfe Kierspe
            </p>
            <ul className="flex flex-col gap-4 pt-4 list-disc list-inside font-thin tracking-wide text-light">
              <li>
                Tutoring in Mathematics, English, Physics, and Biology (Grades 5
                to 13)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
