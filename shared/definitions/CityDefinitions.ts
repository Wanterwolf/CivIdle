import type { PartialSet } from "../utilities/TypeDefinitions";
import { L, t } from "../utilities/i18n";
import type { Building } from "./BuildingDefinitions";
import type { IUnlockableMultipliers } from "./ITechDefinition";
import type { Deposit } from "./ResourceDefinitions";
import type { Tech } from "./TechDefinitions";

export class CityDefinitions {
   Rome: ICityDefinition = {
      name: () => t(L.Rome),
      deposits: {
         Water: 0.02,
         Copper: 0.02,
         Iron: 0.02,
         Wood: 0.02,
         Stone: 0.02,
         Gold: 0.02,
         Coal: 0.02,
         Oil: 0.02,
         Aluminum: 0.02,
         NaturalGas: 0.02,
         Uranium: 0.02,
      },
      size: 40,
      buildingNames: {
         Headquarter: () => t(L.RomanForum),
      },
      uniqueBuildings: {
         CircusMaximus: "CivilService",
         Colosseum: "Theater",
      },
      uniqueMultipliers: {},
      naturalWonders: { Alps: true, GrottaAzzurra: true },
      requireGreatPeopleLevel: 0,
      requireSupporterPack: false,
   };
   Athens: ICityDefinition = {
      name: () => t(L.Athens),
      deposits: {
         Water: 0.01,
         Copper: 0.03,
         Iron: 0.01,
         Wood: 0.01,
         Stone: 0.04,
         Gold: 0.01,
         Coal: 0.03,
         Oil: 0.02,
         Aluminum: 0.02,
         NaturalGas: 0.03,
         Uranium: 0.01,
      },
      size: 40,
      buildingNames: {
         Headquarter: () => t(L.Acropolis),
      },
      uniqueBuildings: { StatueOfZeus: "Theater", Parthenon: "Democracy" },
      uniqueMultipliers: {},
      naturalWonders: { Aphrodite: true, Poseidon: true },
      requireGreatPeopleLevel: 5,
      requireSupporterPack: false,
   };
   Memphis: ICityDefinition = {
      name: () => t(L.Memphis),
      deposits: {
         Water: 0.01,
         Copper: 0.01,
         Iron: 0.025,
         Wood: 0.025,
         Stone: 0.025,
         Gold: 0.025,
         Coal: 0.025,
         Oil: 0.01,
         Aluminum: 0.025,
         NaturalGas: 0.015,
         Uranium: 0.025,
      },
      size: 50,
      buildingNames: {
         Headquarter: () => t(L.TempleOfPtah),
      },
      uniqueBuildings: {
         AbuSimbel: "Housing",
         GreatSphinx: "Arithmetic",
      },
      uniqueMultipliers: {},
      naturalWonders: { NileRiver: true, MountSinai: true },
      requireGreatPeopleLevel: 10,
      requireSupporterPack: false,
   };
   Beijing: ICityDefinition = {
      name: () => t(L.Beijing),
      deposits: {
         Water: 0.01,
         Copper: 0.02,
         Iron: 0.03,
         Wood: 0.01,
         Stone: 0.02,
         Gold: 0.03,
         Coal: 0.01,
         Oil: 0.02,
         Aluminum: 0.03,
         NaturalGas: 0.01,
         Uranium: 0.03,
      },
      size: 50,
      buildingNames: {
         Headquarter: () => t(L.HallOfSupremeHarmony),
      },
      uniqueBuildings: {
         GreatWall: "LandTrade",
         YellowCraneTower: "Geography",
         PorcelainTower: "Banking",
      },
      uniqueMultipliers: {},
      naturalWonders: { MountTai: true, YangtzeRiver: true },
      requireGreatPeopleLevel: 15,
      requireSupporterPack: false,
   };
   NewYork: ICityDefinition = {
      name: () => t(L.NewYork),
      deposits: {
         Water: 0.03,
         Copper: 0.03,
         Iron: 0.03,
         Wood: 0.03,
         Stone: 0.03,
         Gold: 0.03,
         Coal: 0.03,
         Oil: 0.03,
         Aluminum: 0.03,
         NaturalGas: 0.03,
         Uranium: 0.03,
      },
      size: 30,
      buildingNames: {
         Headquarter: () => t(L.Manhattan),
      },
      uniqueBuildings: {
         Broadway: "Railway",
         WallStreet: "Capitalism",
         TheMet: "RapidFire",
         ResearchFund: "UnitedNations",
      },
      uniqueMultipliers: {
         Skyscraper: {
            buildingMultiplier: {
               ResearchFund: { output: 1 },
            },
         },
      },
      naturalWonders: { Shenandoah: true, NiagaraFalls: true },
      requireGreatPeopleLevel: 20,
      requireSupporterPack: true,
   };
   Babylon: ICityDefinition = {
      name: () => t(L.Babylon),
      deposits: {
         Water: 0.01,
         Copper: 0.025,
         Iron: 0.03,
         Wood: 0.025,
         Stone: 0.03,
         Gold: 0.01,
         Coal: 0.025,
         Oil: 0.03,
         Aluminum: 0.025,
         NaturalGas: 0.025,
         Uranium: 0.01,
      },
      size: 35,
      buildingNames: {
         Headquarter: () => t(L.Babylon),
      },
      uniqueBuildings: {
         WallOfBabylon: "LandTrade",
         TowerOfBabel: "Religion",
         ZigguratOfUr: "Theater",
      },
      uniqueMultipliers: {},
      naturalWonders: { EuphratesRiver: true, ZagrosMountains: true },
      requireGreatPeopleLevel: 30,
      requireSupporterPack: true,
   };
   Kyoto: ICityDefinition = {
      name: () => t(L.Kyoto),
      deposits: {
         Water: 0.025,
         Copper: 0.025,
         Iron: 0.025,
         Wood: 0.025,
         Stone: 0.025,
         Gold: 0.025,
         Coal: 0.025,
         Oil: 0.025,
         Aluminum: 0.025,
         NaturalGas: 0.025,
         Uranium: 0.025,
      },
      size: 35,
      buildingNames: {
         Headquarter: () => t(L.ImperialPalace),
      },
      uniqueBuildings: {
         ItsukushimaShrine: "Religion",
         GoldenPavilion: "Theocracy",
         OsakaCastle: "Electricity",
      },
      uniqueMultipliers: {},
      naturalWonders: { Kanagawa: true, MountFuji: true },
      requireGreatPeopleLevel: 40,
      requireSupporterPack: true,
   };
}

export type City = keyof CityDefinitions;

interface ICityDefinition {
   deposits: Record<Deposit, number>;
   size: number;
   name: () => string;
   naturalWonders: PartialSet<Building>;
   buildingNames: Partial<Record<Building, () => string>>;
   uniqueBuildings: Partial<Record<Building, Tech>>;
   uniqueMultipliers: Partial<Record<Tech, IUnlockableMultipliers>>;
   requireGreatPeopleLevel: number;
   requireSupporterPack: boolean;
}
