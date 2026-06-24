"use client";

import { useRef, useState } from "react";
import { Upload, Cpu, Loader2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

type Prediction = { className: string; probability: number };

export default function MLDemo() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Upload an image to classify it in real time.");
  const imgRef = useRef<HTMLImageElement>(null);
  const modelRef = useRef<unknown>(null);

  async function getModel() {
    if (modelRef.current) return modelRef.current;
    setStatus("Loading the vision model (first run only)…");
    const tf = await import("@tensorflow/tfjs");
    await tf.ready();
    const mobilenet = await import("@tensorflow-models/mobilenet");
    const model = await mobilenet.load({ version: 2, alpha: 1.0 });
    modelRef.current = model;
    return model;
  }

  async function classify() {
    if (!imgRef.current) return;
    setLoading(true);
    try {
      const model = (await getModel()) as {
        classify: (el: HTMLImageElement, n?: number) => Promise<Prediction[]>;
      };
      setStatus("Analyzing…");
      const preds = await model.classify(imgRef.current, 5);
      setPredictions(preds);
      setStatus("Done — predictions run entirely in your browser.");
    } catch {
      setStatus("Something went wrong loading the model. Try again.");
    } finally {
      setLoading(false);
    }
  }

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPredictions([]);
    setImageUrl(URL.createObjectURL(file));
    setStatus("Image loaded — click Classify.");
  }

  return (
    <section id="demo" className="px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Live Demo"
          subtitle="A real MobileNet v2 model running 100% in your browser with TensorFlow.js — no server, no upload."
        >
          Try a model in your browser
        </SectionTitle>

        <Reveal>
          <div className="card mx-auto grid max-w-4xl gap-8 p-8 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <label className="btn btn-outline w-fit cursor-pointer">
                <Upload size={18} /> Choose Image
                <input type="file" accept="image/*" onChange={onFile} className="hidden" />
              </label>

              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-line bg-paper-2">
                {imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    ref={imgRef}
                    src={imageUrl}
                    alt="To classify"
                    crossOrigin="anonymous"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="px-6 text-center text-sm text-muted">No image selected</span>
                )}
              </div>

              <button
                onClick={classify}
                disabled={!imageUrl || loading}
                className="btn btn-primary justify-center disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : <Cpu size={18} />}
                {loading ? "Working…" : "Classify"}
              </button>
            </div>

            <div className="flex flex-col">
              <h3 className="mb-2 text-base font-bold">Predictions</h3>
              <p className="mb-5 text-sm text-muted">{status}</p>
              <div className="flex flex-col gap-4">
                {predictions.map((p) => (
                  <div key={p.className}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="font-medium capitalize text-ink">{p.className}</span>
                      <span className="font-semibold text-accent">
                        {(p.probability * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-paper-3">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${p.probability * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
