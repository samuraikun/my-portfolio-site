import { type ValueFormatter, Title, Subtitle, BarChart } from "@tremor/react";

const frontendData = [
  {
    name: "Frontend",
    JavaScript: 6,
    CSS: 6,
    "Vue.js": 3,
    TypeScript: 1,
    "React.js": 1.5,
    Jest: 1,
    Storybook: 1,
  },
];

const backendData = [
  {
    name: "Backend",
    Ruby: 7,
    "Ruby on Rails": 7,
    "Node.js": 3,
    Python: 1,
    Golang: 0.5,
    "REST API": 7,
    GraphQL: 1,
    WebSocket: 1,
  },
];

const devOpsData = [
  {
    name: "DevOps",
    AWS: 3,
    GCP: 0.5,
    Terraform: 2,
    Docker: 2,
    "AWS ECS": 2,
    Serverless: 1,
    CircleCI: 2,
    "GitHub Actions": 1,
  },
];

const databaseData = [
  {
    name: "Database",
    MySQL: 7,
    PostgreSQL: 1,
    DynamoDB: 1,
    Redis: 2,
    Elasticsearch: 2,
  },
];

const valueFormatter: ValueFormatter = (number: number) =>
  `${number.toString()} years`;
const categories = (name: string) => {
  switch (name) {
    case "Frontend":
      return [
        "JavaScript",
        "CSS",
        "Vue.js",
        "React.js",
        "TypeScript",
        "Jest",
        "Storybook",
      ];
      break;
    case "Backend":
      return [
        "Ruby",
        "Ruby on Rails",
        "Node.js",
        "Python",
        "Golang",
        "REST API",
        "GraphQL",
        "WebSocket",
      ];
      break;
    case "DevOps":
      return [
        "AWS",
        "GCP",
        "Terraform",
        "Docker",
        "AWS ECS",
        "Serverless",
        "CircleCI",
        "GitHub Actions",
      ];
      break;
    case "Database":
      return ["MySQL", "PostgreSQL", "DynamoDB", "Redis", "Elasticsearch"];
      break;
    default:
      return [];
      break;
  }
};

export const SkillGroupBarChart = () => (
  <>
    <Title>Frontend</Title>
    <BarChart
      className="mt-6"
      data={frontendData}
      index="name"
      categories={categories("Frontend")}
      colors={["amber", "blue", "lime", "rose", "indigo", "emerald", "pink"]}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
      showYAxis={false}
      layout="vertical"
    />
    <Title>Backend</Title>
    <BarChart
      className="mt-6"
      data={backendData}
      index="name"
      categories={categories("Backend")}
      colors={[
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "pink",
        "orange",
        "teal",
      ]}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
      showYAxis={false}
      layout="vertical"
    />
    <Title>DevOps</Title>
    <BarChart
      className="mt-6"
      data={devOpsData}
      index="name"
      categories={categories("DevOps")}
      colors={[
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "pink",
        "orange",
        "teal",
      ]}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
      showYAxis={false}
      layout="vertical"
    />
    <Title>Database</Title>
    <BarChart
      className="mt-6"
      data={databaseData}
      index="name"
      categories={categories("Database")}
      colors={["blue", "green", "yellow", "purple", "pink"]}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
      showYAxis={false}
      layout="vertical"
    />
  </>
);
