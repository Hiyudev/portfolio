import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../lib/GraphQLClient";

type SocialMediaInformation = {
  socialMediaUrl: string;
  socialMediaName: string;
}

type SocialMediaQueryResponse = {
  socials: [] | SocialMediaInformation[];
}

const socialMediaHandler = async (req: NextApiRequest, res: NextApiResponse<void>) => {
  const { name } = req.query;

  const query = `
    query getSocialMedia($name: String!){
      socials(where: {socialMediaName: $name}) {
        socialMediaUrl
        socialMediaName
      }
    }
  `;

  const { socials }: SocialMediaQueryResponse = await client.request(query, { name });

  if(socials.length == 0) {
    res.status(404).redirect("/");
    return;
  }

  const url = socials[0].socialMediaUrl;

  if (!url) {
    res.status(404).redirect("/");
    return;
  }

  res.status(301).redirect(url);
  return;
};

export default socialMediaHandler;