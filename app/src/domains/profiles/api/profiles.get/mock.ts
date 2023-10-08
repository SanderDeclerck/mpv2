import { registerMock } from "@/server/registerMock";
import { getProfiles } from ".";

export const profiles = [
  "B - All fields mandatory + dochandling",
  "A - All fields optional",
  "C - Realtime + e-ticket + check-out",
  "D - automatic + multiple check-in",
  "E - automatic text + weighing (on registration and check-out)",
  "F - partners",
  "G - auto approval + autodispatch",
  "H - auto approval + autoqueue",
  "I - Certified Persons Basic",
  "I - Certified Persons Advanced",
  "K - Assets inbound",
  "K - Assets Outbound",
  "J - Conditions",
  "J - actions + other",
  "TMS Integrations + slot tracking",
  "K - Assets drop off full + asset cat. I + manual appr.",
  "SP - Scan and Print",
  "L - automatic multiple fields + fallback",
  "M - weighing standalone + pincode",
  "N - Brussels Inbound",
];

registerMock(getProfiles, (_req, res) => {
  setTimeout(() => {
    return res.json(profiles.map((_, i) => ({ id: i, name: _ })));
  }, 1000);
});
