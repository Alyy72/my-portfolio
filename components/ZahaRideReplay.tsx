"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import styles from "./ZahaRideReplay.module.css";

// A fictional route with one sample per minute. Units match the ZAHA telemetry format.
const samples = [
  [64, 164, 0, 0],
  [81, 156, 17, 56],
  [99, 140, 24, 74],
  [118, 115, 28, 83],
  [143, 103, 29, 87],
  [167, 105, 29, 83],
  [191, 89, 32, 90],
  [210, 66, 35, 94],
  [226, 52, 30, 87],
  [251, 49, 28, 84],
  [277, 61, 25, 76],
  [299, 79, 23, 72],
  [308, 107, 20, 69],
  [307, 130, 18, 64],
  [293, 156, 24, 73],
  [269, 173, 31, 84],
  [240, 181, 34, 93],
  [212, 174, 33, 89],
  [188, 179, 29, 82],
  [163, 191, 28, 80],
  [140, 205, 26, 77],
  [114, 210, 23, 72],
  [92, 201, 18, 61],
  [79, 185, 11, 47],
  [65, 179, 0, 0],
] as const;

const lastSample = samples.length - 1;
const distance = samples.slice(1).reduce((total, sample, index) => {
  return total + (sample[2] + samples[index][2]) / 120;
}, 0);
const averageSpeed = distance / (lastSample / 60);
const speedColor = "#c4f177";
const cadenceColor = "#7cdbca";

type Draw = (context: CanvasRenderingContext2D, width: number, height: number, sample: number) => void;

function Plot({ draw, sample }: { draw: Draw; sample: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    function paint() {
      if (!canvas || !context) return;
      const { width, height } = canvas.getBoundingClientRect();
      if (!width || !height) return;

      const scale = window.devicePixelRatio || 1;
      const pixelWidth = Math.round(width * scale);
      const pixelHeight = Math.round(height * scale);
      if (canvas.width !== pixelWidth) canvas.width = pixelWidth;
      if (canvas.height !== pixelHeight) canvas.height = pixelHeight;
      context.setTransform(pixelWidth / width, 0, 0, pixelHeight / height, 0, 0);
      context.clearRect(0, 0, width, height);
      draw(context, width, height, sample);
    }

    const observer = new ResizeObserver(paint);
    observer.observe(canvas);
    paint();
    return () => observer.disconnect();
  }, [draw, sample]);

  return <canvas ref={ref} className={styles.plot} aria-hidden="true" />;
}

const streets = [
  [[-12, 67], [59, 95], [121, 85], [170, 54], [226, 30], [280, 34], [369, 87]],
  [[13, 253], [74, 220], [136, 227], [211, 202], [285, 203], [362, 160]],
  [[-14, 127], [64, 146], [111, 134], [162, 148], [205, 130], [258, 100], [370, 118]],
  [[102, -15], [103, 46], [132, 75], [150, 129], [164, 186], [175, 259]],
  [[258, -12], [245, 57], [265, 115], [250, 162], [280, 241]],
] as const;

function strokePath(
  context: CanvasRenderingContext2D,
  points: readonly (readonly [number, number, ...number[]])[],
  color: string,
  lineWidth: number,
) {
  context.beginPath();
  points.forEach(([x, y], index) => {
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  });
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.stroke();
}

function drawDot(context: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
}

const drawRoute: Draw = (context, width, height, sample) => {
  const scale = Math.min(width / 360, height / 234);
  context.save();
  context.translate((width - 360 * scale) / 2, (height - 234 * scale) / 2);
  context.scale(scale, scale);
  context.lineCap = "round";
  context.lineJoin = "round";

  streets.forEach((street) => strokePath(context, street, "#293e34", 1.8));
  strokePath(context, samples, "#4f6a5d", 4.5);
  strokePath(context, samples.slice(0, sample + 1), speedColor, 4.5);

  const [startX, startY] = samples[0];
  const [endX, endY] = samples[lastSample];
  const [x, y] = samples[sample];
  drawDot(context, startX, startY, 4.5, "#ecf4ed");
  drawDot(context, endX, endY, 4.5, "#ecf4ed");
  drawDot(context, x, y, 14, "#c4f17735");
  drawDot(context, x, y, 7.5, "#112017");
  drawDot(context, x, y, 4.7, speedColor);
  context.restore();
};

function drawSeries(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  sample: number,
  field: 2 | 3,
  ceiling: number,
  color: string,
) {
  const inset = 4;
  const baseline = height - inset;
  const points: [number, number][] = samples.map((reading, index) => [
    inset + index / lastSample * (width - 2 * inset),
    baseline - reading[field] / ceiling * (height - 2 * inset),
  ]);

  for (const level of [0, 0.5, 1]) {
    const y = inset + level * (height - 2 * inset);
    strokePath(context, [[inset, y], [width - inset, y]], "#304138", 1);
  }

  const fill = context.createLinearGradient(0, inset, 0, baseline);
  fill.addColorStop(0, color + "42");
  fill.addColorStop(1, color + "00");
  context.beginPath();
  context.moveTo(inset, baseline);
  points.forEach(([x, y]) => context.lineTo(x, y));
  context.lineTo(width - inset, baseline);
  context.closePath();
  context.fillStyle = fill;
  context.fill();

  context.lineCap = "round";
  context.lineJoin = "round";
  strokePath(context, points, color, 1.7);

  const [x, y] = points[sample];
  context.setLineDash([3, 3]);
  strokePath(context, [[x, inset], [x, baseline]], "#cdd8d2", 1);
  context.setLineDash([]);
  drawDot(context, x, y, 4, color);
}

const drawSpeed: Draw = (context, width, height, sample) => {
  drawSeries(context, width, height, sample, 2, 40, speedColor);
};

const drawCadence: Draw = (context, width, height, sample) => {
  drawSeries(context, width, height, sample, 3, 105, cadenceColor);
};

function formatTime(sample: number) {
  return String(sample).padStart(2, "0") + ":00";
}

export function ZahaRideReplay() {
  const [sample, setSample] = useState(8);
  const [playing, setPlaying] = useState(false);
  const [, , speed, cadence] = samples[sample];
  const currentTime = formatTime(sample);

  useEffect(() => {
    if (!playing) return;

    const timer = window.setTimeout(() => {
      const next = Math.min(sample + 1, lastSample);
      setSample(next);
      if (next === lastSample) setPlaying(false);
    }, 550);

    return () => window.clearTimeout(timer);
  }, [playing, sample]);

  function togglePlayback() {
    if (!playing && sample === lastSample) setSample(0);
    setPlaying(!playing);
  }

  function seek(next: number) {
    setPlaying(false);
    setSample(next);
  }

  return (
    <section id="ride-replay" className={styles.replay} aria-labelledby="zaha-replay-title">
      <header className={styles.header}>
        <div>
          <h2 id="zaha-replay-title">Ride Replay</h2>
          <p>Scrub the timeline to follow the route and see how speed and cadence change.</p>
        </div>
        <span className={styles.sampleLabel}>Simulated ride</span>
      </header>

      <dl className={styles.summary}>
        <div>
          <dt>Distance</dt>
          <dd>{distance.toFixed(1)} <span>km</span></dd>
        </div>
        <div>
          <dt>Ride time</dt>
          <dd>{formatTime(lastSample)}</dd>
        </div>
        <div>
          <dt>Avg. speed</dt>
          <dd>{averageSpeed.toFixed(1)} <span>km/h</span></dd>
        </div>
      </dl>

      <div className={styles.dashboard}>
        <div className={styles.route}>
          <div className={styles.panelHeading}>
            <h3>Route trace</h3>
            <span className={styles.legend}>Rider position</span>
          </div>
          <div className={styles.mapPlot}>
            <Plot draw={drawRoute} sample={sample} />
          </div>
        </div>

        <div className={styles.readings}>
          <div className={styles.metric}>
            <h3>Speed</h3>
            <p className={styles.speed}>{speed} <span>km/h</span></p>
            <div className={styles.metricPlot}>
              <Plot draw={drawSpeed} sample={sample} />
            </div>
          </div>
          <div className={styles.metric}>
            <h3>Cadence</h3>
            <p className={styles.cadence}>{cadence} <span>rpm</span></p>
            <div className={styles.metricPlot}>
              <Plot draw={drawCadence} sample={sample} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.playButton}
          onClick={togglePlayback}
          aria-label={playing ? "Pause ride" : "Play ride"}
        >
          {playing ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
        </button>
        <div className={styles.timeline}>
          <label htmlFor="zaha-ride-timeline" className={styles.timelineLabel}>
            <span>Timeline</span>
            <span aria-hidden="true">{currentTime} <span className={styles.timeDivider}>/</span> {formatTime(lastSample)}</span>
          </label>
          <input
            id="zaha-ride-timeline"
            type="range"
            min={0}
            max={lastSample}
            value={sample}
            aria-valuetext={sample + " of " + lastSample + " minutes"}
            onChange={(event) => seek(event.currentTarget.valueAsNumber)}
            style={{ "--played": `${sample / lastSample * 100}%` } as CSSProperties}
          />
        </div>
        <button type="button" className={styles.resetButton} onClick={() => seek(0)} aria-label="Reset ride">
          <RotateCcw size={17} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
