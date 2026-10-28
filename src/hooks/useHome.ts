import { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";

import { TEpochMetric } from "../types/TEpochMetric";
import { TPrediction } from "../types/TPrediction";
import { createModel } from "../lib/neural/model";
import { createDataset } from "../lib/neural/dataset";
import { IUseHomeProps } from "../types/IUseHomeProps";

export const useHome = (): IUseHomeProps => {
  const modelRef = useRef<tf.Sequential | null>(null);

  const [training, setTraining] = useState(false);
  const [trained, setTrained] = useState(false);
  const [history, setHistory] = useState<TEpochMetric[]>([]);
  const [strength, setStrength] = useState(0.2);
  const [speed, setSpeed] = useState(0.9);
  const [prediction, setPrediction] = useState<TPrediction | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      modelRef.current?.dispose();
    };
  }, []);

  const trainModel = async () => {
    if (training) return;

    setTraining(true);
    setTrained(false);
    setPrediction(null);
    setHistory([]);
    setError("");

    let model: tf.Sequential | null = null;
    let xs: tf.Tensor2D | null = null;
    let ys: tf.Tensor2D | null = null;

    try {
      await tf.ready();

      modelRef.current?.dispose();
      modelRef.current = null;

      model = createModel();

      const dataset = createDataset();
      xs = dataset.xs;
      ys = dataset.ys;

      await model.fit(xs, ys, {
        epochs: 150,
        batchSize: 2,
        shuffle: true,
        callbacks: {
          onEpochEnd: async (epoch, logs) => {
            setHistory((previous) => [
              ...previous,
              {
                epoch: epoch + 1,
                loss: logs?.loss ?? 0,
                accuracy: logs?.acc ?? logs?.accuracy ?? 0,
              },
            ]);

            await tf.nextFrame();
          },
        },
      });

      modelRef.current = model;
      model = null;
      setTrained(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erro durante o treinamento.",
      );
    } finally {
      xs?.dispose();
      ys?.dispose();
      model?.dispose();
      setTraining(false);
    }
  };

  const predict = () => {
    const model = modelRef.current;
    if (!model) return;

    const result = tf.tidy(() => {
      const input = tf.tensor2d([[strength, speed]]);

      const output = model.predict(input) as tf.Tensor;
      return Array.from(output.dataSync());
    });

    setPrediction({
      guerreiro: result[0],
      ninja: result[1],
    });
  };

  const lastEpoch = history.at(-1);

  return {
    trainModel,
    predict,
    lastEpoch,
    trained,
    prediction,
    error,
    training,
    strength,
    setStrength,
    speed,
    setSpeed,
    setPrediction,
    history,
  };
};
