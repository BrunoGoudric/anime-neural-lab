"use client";

import { useHome } from "../hooks/useHome";

const Home = () => {
  const {
    error,
    lastEpoch,
    predict,
    prediction,
    trainModel,
    trained,
    training,
    setStrength,
    strength,
    setPrediction,
    setSpeed,
    speed,
    history,
  } = useHome();
  return (
    <main className="mx-auto max-w-3xl p-8 space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Anime Neural Lab</h1>
        <p className="text-gray-500 mt-2">
          Aula 1 — Minha primeira rede neural
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {[
          {
            label: "Força",
            value: strength,
            setter: setStrength,
          },
          {
            label: "Velocidade",
            value: speed,
            setter: setSpeed,
          },
        ].map(({ label, value, setter }) => (
          <div key={label} className="space-y-3">
            <label className="block text-sm font-medium">{label}</label>

            <input
              type="number"
              min={0}
              max={1}
              step={0.05}
              value={value}
              onChange={(event) => {
                const number = Number(event.target.value);

                if (!Number.isFinite(number)) return;

                setter(Math.max(0, Math.min(1, number)));
                setPrediction(null);
              }}
              className="w-full rounded-lg border border-gray-300
                   bg-white px-4 py-3 text-gray-900
                   focus:border-blue-500 focus:outline-none
                   focus:ring-2 focus:ring-blue-200"
            />

            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={value}
              onChange={(event) => {
                setter(Number(event.target.value));
                setPrediction(null);
              }}
              className="w-full accent-blue-600"
            />
          </div>
        ))}
      </div>

      <section className="rounded-xl border p-6 space-y-4">
        <h2 className="text-xl font-semibold">Treinamento</h2>

        <button
          onClick={trainModel}
          disabled={training}
          className="rounded-lg bg-blue-600 px-5 py-3
                     text-white disabled:opacity-50"
        >
          {training ? "Treinando..." : "Treinar rede neural"}
        </button>

        <p>Épocas: {history.length} / 150</p>

        <p>Loss: {lastEpoch?.loss.toFixed(4) ?? "-"}</p>

        <p>
          Accuracy:{" "}
          {lastEpoch ? `${(lastEpoch.accuracy * 100).toFixed(1)}%` : "-"}
        </p>

        <div className="h-3 rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-blue-500"
            style={{
              width: `${(history.length / 150) * 100}%`,
            }}
          />
        </div>
      </section>

      <section className="rounded-xl border p-6 space-y-5">
        <h2 className="text-xl font-semibold">Testar classificação</h2>

        <label className="block">
          Força: {strength.toFixed(2)}
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={strength}
            onChange={(event) => {
              setStrength(Number(event.target.value));
              setPrediction(null);
            }}
            className="w-full"
          />
        </label>

        <label className="block">
          Velocidade: {speed.toFixed(2)}
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={speed}
            onChange={(event) => {
              setSpeed(Number(event.target.value));
              setPrediction(null);
            }}
            className="w-full"
          />
        </label>

        <button
          onClick={predict}
          disabled={!trained || training}
          className="rounded-lg bg-green-600 px-5 py-3
                     text-white disabled:opacity-50"
        >
          Classificar personagem
        </button>

        {prediction && (
          <div className="space-y-2">
            <p>Guerreiro: {(prediction.guerreiro * 100).toFixed(1)}%</p>
            <p>Ninja: {(prediction.ninja * 100).toFixed(1)}%</p>
          </div>
        )}
      </section>

      {error && (
        <p role="alert" className="text-red-600">
          {error}
        </p>
      )}
    </main>
  );
};

export default Home;
