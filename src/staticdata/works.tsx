type Job = {
    id: number
    title: string
    company: string
    period: string
    description: string[]
  }
  
  export const jobs: Job[] = [
    {
      id: 1,
      title: "Developer Freelancer",
      company: "Freelancing",
      period: "January 2024 - Present",
      description: ["Developed responsive web applications using React and Next.js for clients with best practices"]
    },
    {
      id: 2,
      title: "Web Dev Instructor",
      company: "SkyIL Computer Institute",
      period: "August 2023 - Present",
      description: [
        "Assisted the lead instructor in delivering web and computer education to students.",
        "Assisted in building the student management system in PHP.",
        "Took part in an MSME certified instructing programme to deliver computer education to students.",
      ],    },
  ]