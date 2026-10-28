import * as tf from "@tensorflow/tfjs";

export const createModel = () => {
  const model = tf.sequential();

  model.add(
    tf.layers.dense({
      inputShape: [2],
      units: 8,
      activation: "relu",
    }),
  );

  model.add(
    tf.layers.dense({
      units: 2,
      activation: "softmax",
    }),
  );

  model.compile({
    optimizer: tf.train.adam(0.01),
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"],
  });

  return model;
};
