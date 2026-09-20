import type { Campaign } from "./types";
import { enforcementCampaigns } from "./campaigns-enforcement";
import { institutionCampaigns } from "./campaigns-institutions";
import { lawfareCampaigns } from "./campaigns-lawfare";
import { settlementCampaigns } from "./campaigns-settlement";

export const campaigns: Campaign[] = [
  ...settlementCampaigns,
  ...lawfareCampaigns,
  ...institutionCampaigns,
  ...enforcementCampaigns,
];

export const campaignById = Object.fromEntries(campaigns.map((c) => [c.id, c])) as Record<
  string,
  Campaign
>;

export function campaignsForDomain(id: string) {
  return campaigns.filter((c) => c.domains.includes(id as Campaign["domains"][number]));
}

export function campaignsForTheater(id: string) {
  return campaigns.filter((c) => c.theaters.includes(id as Campaign["theaters"][number]));
}

export function campaignsForActor(id: string) {
  return campaigns.filter((c) => {
    const assigned = c.attribution.assigned ?? [];
    if (assigned.includes(id)) return true;
    return c.attribution.hypotheses.some((h) => h.actorId === id);
  });
}
