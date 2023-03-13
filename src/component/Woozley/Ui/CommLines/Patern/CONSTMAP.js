import { LinksGermany } from "../../import.img.linksGermany";
import { LinksSingapore } from "../../import.img.linksSingapore";
import { LinksUsa } from "../../import.img.linksUsa";
import { LinksWest_usa } from "../../import.img.linksWest_usa";

const CONSTMAP = (DEV) => {
  const SerLink = [LinksWest_usa, LinksUsa, LinksGermany, LinksSingapore];
  return {
    SE_1111: [
      [SerLink[0], DEV[1]],
      [SerLink[1], DEV[0]],
      [SerLink[2], DEV[2]],
      [SerLink[3], DEV[3], DEV[4]],
    ],
    SE_0111: [
      [SerLink[1], DEV[0], DEV[1]],
      [SerLink[2], DEV[2]],
      [SerLink[3], DEV[3], DEV[4]],
    ],
    SE_1011: [
      [SerLink[0], DEV[1], DEV[0]],
      [SerLink[2], DEV[2]],
      [SerLink[3], DEV[3], DEV[4]],
    ],
    SE_1101: [
      [SerLink[0], DEV[1]],
      [SerLink[1], DEV[0], -1, DEV[2]],
      [SerLink[3], DEV[3], DEV[4]],
    ],
    SE_1110: [
      [SerLink[0], DEV[1]],
      [SerLink[1], DEV[0]],
      [SerLink[2], DEV[2], DEV[3], DEV[4]],
    ],

    CSE_1000: [[SerLink[0], DEV[1], DEV[0], DEV[2], DEV[3], DEV[4]]],
    CSE_0100: [[SerLink[1], DEV[0], DEV[1], DEV[2], DEV[3], DEV[4]]],
    CSE_0010: [[SerLink[2], DEV[2], DEV[3], DEV[4], DEV[0], DEV[1]]],
    CSE_0001: [[SerLink[3], DEV[3], DEV[4], DEV[0], DEV[1], DEV[2]]],
  };
};
export default CONSTMAP