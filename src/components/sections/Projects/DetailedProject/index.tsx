import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { ArrowSquareOut, CaretRight, GithubLogo } from "phosphor-react";
import { Project } from "../../../../graphql/generated/graphcms";
import Card from "../../../common/Card";
import Tag from "../../../common/Tag";

interface ProjectProps {
  projectData: Project;
}

function DetailedProject({ projectData }: ProjectProps) {
  const { t } = useTranslation("project");

  return (
    <Card className="z-10 grid grid-rows-2 gap-3 shadow-lg sm:gap-4 sm:p-4 md:grid-cols-2 md:grid-rows-1 md:gap-5 md:p-5">
      <div className="relative">
        {projectData.projectThumbnail && (
          <Image
            objectFit="cover"
            layout="fill"
            className="rounded-md"
            priority={false}
            alt={projectData.projectThumbnailAlt}
            src={projectData.projectThumbnail.url}
          />
        )}
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-2xl font-black sm:text-3xl md:text-4xl">
              {projectData.title}
            </h3>
            <p className="text-secondary">{projectData.description}</p>
          </div>
          <Link passHref href={`/project/${projectData.slug}`}>
            <a
              aria-label={`${t("detailedProject.label.partOne")} ${
                projectData.title
              } ${t("detailedProject.label.partTwo")}`}
              className="fancy-ring fancy-ring-bg group mt-4 flex items-center gap-2 rounded-md"
            >
              <span className="group-hover:text-primary-500 group-focus:text-primary-500">
                <b>{t("detailedProject.learnMore")}</b>
              </span>
              <CaretRight
                weight="fill"
                aria-hidden="true"
                className="h-2 w-2 -translate-x-1 transition-transform group-hover:translate-x-0 group-hover:scale-150 group-hover:text-primary-500 group-focus:translate-x-0 group-focus:scale-150 group-focus:text-primary-500"
              />
            </a>
          </Link>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          <ul className="flex w-full flex-col flex-wrap gap-2 md:flex-row">
            {projectData.techStack.map((techStack, index) => {
              return <Tag key={index}>{techStack}</Tag>;
            })}
          </ul>
          {(projectData.githubLink || projectData.projectLink) && (
            <ul className="flex gap-3 sm:justify-end">
              {projectData.githubLink && (
                <li>
                  <Link passHref href={projectData.githubLink}>
                    <a
                      aria-label={t("detailedProject.links.github")}
                      className="fancy-ring fancy-ring-bg group flex flex-row items-center gap-2 rounded-md decoration-primary-500 transition-colors hover:text-primary-500 hover:underline hover:underline-offset-2 focus:text-primary-500 focus:underline"
                    >
                      <GithubLogo size={24} />
                    </a>
                  </Link>
                </li>
              )}

              {projectData.projectLink && (
                <li>
                  <Link passHref href={projectData.projectLink}>
                    <a
                      aria-label={t("detailedProject.links.website")}
                      className="fancy-ring fancy-ring-bg group flex flex-row items-center gap-2 rounded-md decoration-primary-500 transition-colors hover:text-primary-500 hover:underline hover:underline-offset-2 focus:text-primary-500 focus:underline"
                    >
                      <ArrowSquareOut size={24} />
                    </a>
                  </Link>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </Card>
  );
}

export default DetailedProject;
