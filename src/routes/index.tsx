import { createFileRoute } from "@tanstack/react-router";
import { FileText, Linkedin } from "lucide-react";
import {
  ActionLink,
  CardBlock,
  DocsLink,
  GithubLink,
  ProjectCard,
} from "@/components/portfolio/ProjectCard";
import { ProjectImageGrid } from "@/components/portfolio/ImagePlaceholder";
import segElbowMethod from "@/assets/projects/segmentation-5-elbow-method.png";
import segDominantCategory from "@/assets/projects/segmentation-4-dominant-category.png";
import segAvgTransaction from "@/assets/projects/segmentation-6-avg-transaction-by-cluster.png";
import segCardFranchise from "@/assets/projects/segmentation-card-franchise.png";
import segDomesticIntl from "@/assets/projects/segmentation-2-domestic-vs-international.png";
import segWeekdayHeatmap from "@/assets/projects/segmentation-weekday-heatmap.png";
import n8nFlow from "@/assets/projects/n8n-flow-diagram.png";
import n8nConfirmationMsg from "@/assets/projects/n8n-confirmation-message.png";
import sheetsResult from "@/assets/projects/n8n-sheets.png";
import churnDashboard from "@/assets/projects/churn-capital-loss-dashboard-v2.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "María José Jiménez — Data Analysis Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of María José Jiménez, Industrial Engineering student specialized in data analysis, analytics and AI automation for fintech and digital products.",
      },
      { property: "og:title", content: "María José Jiménez — Data Analysis Portfolio" },
      {
        property: "og:description",
        content:
          "Data-driven and AI-powered projects in analytics, automation and product, with a focus on fintech.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SKILLS = [
  "Data Analysis",
  "Business Intelligence",
  "Data Visualization",
  "Business Analysis",
  "Financial Analysis",
  "Automation",
  "Generative AI",
  "Process Improvement",
  "Agile Methodologies (Scrum, Kanban)",
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "R",
  "Claude Code",
  "MCP",
  "Power Automate",
  "N8N",
  "Tableau",
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Portfolio
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            María José Jiménez
          </h1>
          <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg">
            Industrial Engineering Student —{" "}
            <span className="text-primary">Data Analysis Emphasis</span>
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <section aria-labelledby="projects">
          <h2
            id="projects"
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Projects
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <div className="mt-8 grid gap-6">
            <ProjectCard
              title="Customer Churn & Capital Loss Analysis"
              tech={["Power BI", "DAX", "Data Visualization"]}
              actions={
                <GithubLink href="https://github.com/mariajimenezchiquinquira-bot/PowerBi-Customer-Churn-Capital-Loss-Analysis" />
              }
            >
              <CardBlock label="Problem">
                A bank was experiencing customer attrition without understanding its main drivers
                or impact on capital.
              </CardBlock>
              <CardBlock label="Approach">
                I conducted an exploratory analysis in Power BI and, through visualizations and
                comparisons, identified the patterns that best explained attrition and the
                highest-risk segments.
              </CardBlock>
              <CardBlock label="Results">
                The bank faces capital leakage concentrated in high-balance customers, generating a
                significant financial impact. The primary warning signal is inactivity,
                particularly in Germany, which registers the highest churn rate.
              </CardBlock>
              <img
                src={churnDashboard}
                alt="Power BI dashboard: Customer Churn and Capital Loss Analysis"
                loading="lazy"
                className="mx-auto w-full max-w-3xl rounded-md bg-white object-contain"
              />
            </ProjectCard>

            <ProjectCard
              title="Customer Segmentation for Credit Card Clients"
              tech={["Python", "SQL"]}
              actions={
                <ActionLink href="/ConsumoTarjetasCredito.html" variant="solid">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Notebook
                </ActionLink>
              }
            >
              <CardBlock label="Problem">
                A bank needed to identify distinct consumption behaviors among 47,871 credit card
                holders to design targeted promotions, but no predefined customer groups existed.
              </CardBlock>
              <CardBlock label="Approach">
                I applied K-means clustering to segment clients based on spending patterns, using
                one-hot encoding, feature scaling, and the elbow method to determine the optimal
                number of clusters. I then used SQL to analyze each segment's dominant category,
                card brand, and spending behavior.
              </CardBlock>
              <CardBlock label="Result">
                Identified 4 distinct customer segments. The analysis revealed that 91% of clients
                share a common national, in-store spending pattern, while a smaller international,
                online-shopping segment emerged as a differentiated opportunity for targeted
                promotions.
              </CardBlock>
              <ProjectImageGrid
                columns={3}
                images={[
                  { src: segElbowMethod, alt: "Elbow method to select the number of clusters" },
                  { src: segDominantCategory, alt: "Dominant spending category by cluster" },
                  { src: segAvgTransaction, alt: "Average transaction amount by customer cluster" },
                  { src: segCardFranchise, alt: "Most used card franchise by cluster" },
                  { src: segDomesticIntl, alt: "Domestic vs. international spending by cluster" },
                  { src: segWeekdayHeatmap, alt: "Spending by day of week and cluster" },
                ]}
              />
            </ProjectCard>

            <ProjectCard
              title="Vehicle Contract Automation"
              tech={["n8n", "Google Gemini (AI)"]}
              actions={
                <DocsLink href="https://claude.ai/code/artifact/3798c0d5-170b-43ab-a0a2-b66f4808a2cd" />
              }
            >
              <CardBlock label="Problem">
                A dealership's billing team manually extracted 8 data fields from PDF contracts
                into a spreadsheet—a time-consuming process prone to human error.
              </CardBlock>
              <CardBlock label="Approach">
                I built an automated n8n workflow using a loop to process multiple contracts. It
                reads PDFs from Drive, sends text to Gemini AI via an Information Extractor node,
                updates Google Sheets, and triggers a Gmail confirmation.
              </CardBlock>
              <CardBlock label="Result">
                The pipeline processed all 15 contracts with zero errors, automatically appending
                structured data and notifying the team. This eliminated manual data entry,
                optimized loop processing, and improved billing reliability.
              </CardBlock>
              <div className="flex flex-col gap-3">
                <a
                  href={n8nFlow}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-md"
                >
                  <img
                    src={n8nFlow}
                    alt="n8n workflow automating vehicle contract processing"
                    loading="lazy"
                    className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={sheetsResult}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={sheetsResult}
                      alt="Extracted vehicle data logged in Google Sheets"
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                  <a
                    href={n8nConfirmationMsg}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={n8nConfirmationMsg}
                      alt="Gmail confirmation message after successful processing"
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                </div>
              </div>
            </ProjectCard>
          </div>
        </section>

        <section aria-labelledby="skills" className="relative mt-16 sm:mt-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 -top-24 h-80 w-80 rounded-full bg-primary/30 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]"
          />
          <h2
            id="skills"
            className="relative text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Skills
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <ul className="relative mt-8 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">© 2026 María José Jiménez</p>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
