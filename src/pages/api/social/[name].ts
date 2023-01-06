import type { NextApiRequest, NextApiResponse } from "next";
import { getSocialMediaQuery } from "../../../graphql/getSocialMedia";
import { client } from "../../../lib/GraphQLClient";

type SocialMediaInformation = {
  url: string;
  name: string;
}

type SocialMediaQueryResponse = {
  socials: [] | SocialMediaInformation[];
}

const socialMediaHandler = async (req: NextApiRequest, res: NextApiResponse<void>) => {
  const { name } = req.query;

  const { socials }: SocialMediaQueryResponse = await client.request(getSocialMediaQuery, { name });

  if(socials.length == 0) {
    res.status(404).redirect("/");
    return;
  }

  const url = socials[0].url;

  if (!url) {
    res.status(404).redirect("/");
    return;
  }

  res.status(301).redirect(url);
  return;
};

export default socialMediaHandler;
