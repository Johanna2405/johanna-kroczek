const Education = () => {
  return (
    <div className="flex flex-col px-72 py-20 gap-8" id="education">
      <h2 className="text-light font-space text-4xl lowercase text-left border-b-2 border-red pb-4">
        Education
      </h2>

      <div className="join join-vertical w-full pt-8">
        <div className="collapse collapse-arrow join-item border border-[#f5f4ed]">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium px-8 pb-8">
            <h3 className="font-space text-lg pt-4 text-light ">
              Full Stack App & Web Development | WBS CODING SCHOOL Berlin
            </h3>
          </div>
          <div className="collapse-content">
            <p className="font-thin text-red tracking-wide px-8">
              12/2024 - 04/2025
            </p>
            <ul className="list-disc list-inside py-4 font-thin tracking-wide text-light px-8">
              <li>Frontend Development: JavaScript & React </li>
              <li>
                Backend Development:Node.js, Express, PostgreSQL, MongoDB{" "}
              </li>
              <li>Project-based Teamwork with GitHub and Scrum </li>
              <li> Integration and Use of Generative AI</li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-[#f5f4ed]">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium px-8 pb-8">
            <h3 className="font-space text-lg pt-4 text-light">
              Bachelor of Arts Computer Science with focus on Media | IU
              Internationale Hochschule
            </h3>
          </div>
          <div className="collapse-content">
            <p className="font-thin text-red tracking-wide px-8">
              02/2023 - 2026
            </p>
            <ul className="list-disc list-inside py-4 font-thin tracking-wide text-light px-8">
              <li>Independent Distance Learning Degree</li>
              <li>Fundamentals of Computer Science and Programming</li>
              <li>Modules on Design, Usability, and Use of Digital Media</li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-[#f5f4ed]">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium px-8 pb-8">
            <h3 className="font-space text-lg pt-4 text-light">
              Bachelor of Arts Communication Design | UE University of applied
              Sciences Europe
            </h3>
          </div>
          <div className="collapse-content">
            <p className="font-thin text-red tracking-wide px-8">
              10/2016 - 03/2020
            </p>
            <ul className="list-disc list-inside py-4 font-thin tracking-wide text-light px-8">
              <li>Final Grade: 1.6 (German grading system)</li>
              <li>
                Fundamentals of Modern Design: Typography, Layout, Color Theory,
                Printing Techniques, Design Thinking
              </li>
              <li>Photography and Videography</li>
              <li>Elements of Art History and Philosophy</li>
              <li>Practical Semester in the Field of Sportswear</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
