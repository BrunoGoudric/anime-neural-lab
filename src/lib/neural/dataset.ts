import * as tf from "@tensorflow/tfjs";

export const samples = [
  // Guerreiro = [1, 0]
  { input: [0.9, 0.2], label: [1, 0] },
  { input: [0.8, 0.3], label: [1, 0] },
  { input: [0.7, 0.1], label: [1, 0] },
  { input: [0.95, 0.4], label: [1, 0] },
  { input: [0.75, 0.25], label: [1, 0] },

  // Ninja = [0, 1]
  { input: [0.2, 0.9], label: [0, 1] },
  { input: [0.3, 0.8], label: [0, 1] },
  { input: [0.1, 0.7], label: [0, 1] },
  { input: [0.4, 0.95], label: [0, 1] },
  { input: [0.25, 0.75], label: [0, 1] },
];

export function createDataset() {
  const xs = tf.tensor2d(samples.map((sample) => sample.input));

  const ys = tf.tensor2d(samples.map((sample) => sample.label));

  return { xs, ys };
}
