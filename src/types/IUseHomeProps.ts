import { Dispatch, SetStateAction } from "react";
import { TEpochMetric } from "./TEpochMetric";
import { TPrediction } from "./TPrediction";

export interface IUseHomeProps {
  trainModel: () => Promise<void>;
  predict: () => void;
  lastEpoch: TEpochMetric | undefined;
  trained: boolean;
  prediction: TPrediction | null;
  error: string;
  training: boolean;
  strength: number;
  setStrength: Dispatch<SetStateAction<number>>;
  speed: number;
  setSpeed: Dispatch<SetStateAction<number>>;
  setPrediction: Dispatch<SetStateAction<TPrediction | null>>;
  history: TEpochMetric[];
}
