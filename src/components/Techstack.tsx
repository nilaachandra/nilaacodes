import skills from "@/staticdata/skills";

const Techstack = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-lg">My Tech Stack 🛠️</h1>
      <div className="skills flex flex-wrap gap-1.5 mt-3 ">
        {skills.map((skill) => (
          <div
            key={skill.skillName}
            className="cursor-pointer transition-all duration-200 
             dark:bg-zinc-700 bg-zinc-300 flex items-center justify-center gap-1 px-1.5 rounded-sm text-xs lg:text-sm"
          >
            {skill.skillIcon}
            <p className="tracking-tight leading-normal">{skill.skillName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
