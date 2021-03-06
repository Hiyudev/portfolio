import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Code, Heart } from "phosphor-react";
import { SocialList } from "../../../types";
import LogoIcon from "../../icon/Logo";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <div
          aria-hidden
          className="fancy-ring mx-auto flex h-8 w-8 items-center justify-center rounded-md focus:ring-offset-background-100 dark:focus:ring-offset-background-900"
        >
          <LogoIcon />
        </div>

        <p className="text-secondary mt-6 text-center leading-relaxed">
          {t("footer.description")}
        </p>

        <ul
          aria-labelledby="footer-socials"
          className="mt-4 flex items-center justify-center gap-6 md:gap-8"
        >
          <div aria-hidden className="sr-only" id="footer-socials">
            {t("footer.socialLinksSR")}
          </div>
          {Object.entries(SocialList).map(([key, value], index) => {
            return (
              <li key={index}>
                <Link passHref href={value.link}>
                  <a
                    aria-label={`Kevin's ${key} page`}
                    className="fancy-ring group flex flex-row items-center gap-2 rounded-md decoration-primary-500 hover:underline hover:underline-offset-2 focus:underline focus:ring-offset-background-100 dark:focus:ring-offset-background-900"
                  >
                    <div className="transition-colors group-hover:text-primary-500 group-focus:text-primary-500">
                      {value.logo}
                    </div>
                    <span>{key}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="sr-only">
          {t("footer.created")}
          {t("footer.love")}
          {t("footer.and")}
          {t("footer.code")}
          {t("footer.by")}Kevin
        </p>
        <p
          aria-hidden
          className="text-secondary mt-6 flex flex-row items-center justify-center gap-1 text-sm leading-relaxed"
        >
          {t("footer.created")}{" "}
          <Heart
            className="transition-colors hover:text-primary-500"
            weight="bold"
          />
          {t("footer.and")}{" "}
          <Code
            className="transition-colors hover:text-primary-500"
            weight="bold"
          />{" "}
          {t("footer.by")}{" "}
          <span className="transition-colors hover:text-primary-500">
            Kevin
          </span>
        </p>
        <p className="text-secondary flex justify-center text-sm leading-relaxed">
          2022 Kevin
        </p>
      </div>
    </footer>
  );
}

export default Footer;
