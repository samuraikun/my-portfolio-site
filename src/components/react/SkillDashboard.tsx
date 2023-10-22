import { Card, Title } from "@tremor/react";

import { SkillRadarChart } from "./SkillRadarChart";
import { SkillGroupBarChart } from "./SkillGroupBarChart";

import IconAwsSolutionArchitectAssociate from "@images/aws-certified-solutions-architect-associate.webp";
import IconAwsSolutionArchitectProfessional from "@images/aws-certified-solutions-architect-professional.webp";

const radarChartdata = [
  {
    subject: "Frontend",
    A: 80,
    fullMark: 100,
  },
  {
    subject: "Backend",
    A: 90,
    fullMark: 100,
  },
  {
    subject: "DevOps",
    A: 85,
    fullMark: 100,
  },
  {
    subject: "Database",
    A: 70,
    fullMark: 100,
  },
  {
    subject: "Architect",
    A: 60,
    fullMark: 100,
  },
];

export const SkillDashboard: React.FC = () => {
  return (
    <main>
      <Title>
        Categorized my skills based on{" "}
        <a
          href="https://roadmap.sh/"
          target="_blank"
          className="underline text-white"
        >
          roadmap.sh
        </a>
      </Title>

      <div className="mt-6 flex flex-col gap-8">
        <Card>
          <div className="w-full h-[20rem] md:w-[40rem] md:h-[30rem] lg:w-[50rem] lg:h-[36rem]">
            <h2 className="font-bold text-2xl">Scoring Skills</h2>
            <div className="divider"></div>
            <SkillRadarChart data={radarChartdata} />
          </div>
        </Card>
        <Card>
          <h2 className="font-bold text-2xl">Experience Years</h2>
          <div className="divider"></div>
          <SkillGroupBarChart />
        </Card>
        <Card>
          <h2 className="font-bold text-2xl">Certificates</h2>
          <div className="divider"></div>
          <div className="flex flex-row justify-center gap-4 m-6">
            <div className="w-1/2 transition ease-in-out hover:scale-[108%] cursor-pointer">
              <a
                href="https://www.credly.com/badges/1d2b0dfe-7360-4449-b9de-68d050a92683/public_url"
                target="_blank"
              >
                <img
                  src={IconAwsSolutionArchitectAssociate.src}
                  alt="certificate associate"
                  className="w-4/5"
                />
              </a>
            </div>
            <div className="w-1/2 transition ease-in-out hover:scale-[108%] cursor-pointer">
              <a
                href="https://www.credly.com/badges/24dbed30-f1d5-4eb9-9af5-94a85e761a72/public_url"
                target="_blank"
              >
                <img
                  src={IconAwsSolutionArchitectProfessional.src}
                  alt="certificate professional"
                  className="w-4/5"
                />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
};
