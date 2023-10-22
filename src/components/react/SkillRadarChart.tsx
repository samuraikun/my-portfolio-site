import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  Legend,
} from "recharts";

type SkillRadarChartProps = {
  data: SkillRadarChartData[];
};

type SkillRadarChartData = {
  subject: string;
  A: number;
  fullMark: number;
};

export const SkillRadarChart: React.FC<SkillRadarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <RadarChart outerRadius="90%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={18} domain={[0, 100]} />
        <Radar
          name="My Skill"
          dataKey="A"
          stroke="#FF5733"
          fill="#FF5733"
          fillOpacity={0.6}
        />
        <Legend />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
};
