import {scaleOrdinal} from "d3-scale";
import {schemeSet3} from "d3-scale-chromatic";
import {CODE_GROUPS} from "../constants/codeGroups";

/**
 * Returns a scale to color the offense code groups
 */
export const codeGroupScale = scaleOrdinal(schemeSet3).domain(CODE_GROUPS);