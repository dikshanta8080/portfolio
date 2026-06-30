import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import coderGif from '../assets/gifs/coder.gif';

type LineType = 'command' | 'output' | 'comment';

interface TerminalLine {
  type: LineType;
  text: string;
}

const TERMINAL_SEQUENCE: TerminalLine[] = [
  { type: 'command', text: 'java --version' },
  { type: 'output', text: 'openjdk 21.0.2 — ready ✓' },
  { type: 'command', text: './gradlew bootRun' },
  { type: 'output', text: 'Started EcomMedApplication in 2.3s ✓' },
  { type: 'command', text: 'curl -X POST /auth/login' },
  { type: 'output', text: '{ "token": "eyJhbGciOiJIUzI1NiJ9..." } ✓' },
  { type: 'command', text: 'kafka-topics --list' },
  { type: 'output', text: 'order-placed  user-registered  product-added ✓' },
  { type: 'command', text: 'docker ps' },
  { type: 'output', text: 'kafka ✓   zookeeper ✓   postgres ✓' },
  { type: 'comment', text: '# All systems operational 🚀' },
];

const CHAR_SPEED = 40;
const PAUSE_AFTER_COMMAND = 400;
const PAUSE_AFTER_OUTPUT = 800;
const PAUSE_BEFORE_RESET = 2000;
const MAX_VISIBLE_LINES = 8;

function lineClass(type: LineType) {
  if (type === 'command') return 'text-[#00f5ff]';
  if (type === 'output') return 'text-[#00ff88]';
  return 'text-[#6b7280]';
}

function formatLine(line: TerminalLine, content: string) {
  if (line.type === 'command') return `$ ${content}`;
  return content;
}

interface TerminalAnimationProps {
  useGifFallback?: boolean;
}

export default function TerminalAnimation({ useGifFallback = false }: TerminalAnimationProps) {
  const [displayedLines, setDisplayedLines] = useState<{ line: TerminalLine; text: string }[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLineComplete, setIsLineComplete] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentLine = TERMINAL_SEQUENCE[lineIndex];

  const resetTerminal = useCallback(() => {
    setDisplayedLines([]);
    setLineIndex(0);
    setCharIndex(0);
    setIsLineComplete(false);
    setIsClearing(false);
  }, []);

  useEffect(() => {
    if (isClearing) return;

    if (lineIndex >= TERMINAL_SEQUENCE.length) {
      const timer = setTimeout(() => {
        setIsClearing(true);
        setTimeout(resetTerminal, 300);
      }, PAUSE_BEFORE_RESET);
      return () => clearTimeout(timer);
    }

    if (!currentLine) return;

    if (!isLineComplete) {
      if (charIndex < currentLine.text.length) {
        const timer = setTimeout(() => setCharIndex((c) => c + 1), CHAR_SPEED);
        return () => clearTimeout(timer);
      }

      const timer = setTimeout(() => setIsLineComplete(true), CHAR_SPEED);
      return () => clearTimeout(timer);
    }

    const pause =
      currentLine.type === 'command' ? PAUSE_AFTER_COMMAND : PAUSE_AFTER_OUTPUT;

    const timer = setTimeout(() => {
      setDisplayedLines((prev) => {
        const next = [...prev, { line: currentLine, text: currentLine.text }];
        return next.length > MAX_VISIBLE_LINES ? next.slice(-MAX_VISIBLE_LINES) : next;
      });
      setLineIndex((i) => i + 1);
      setCharIndex(0);
      setIsLineComplete(false);
    }, pause);

    return () => clearTimeout(timer);
  }, [lineIndex, charIndex, isLineComplete, isClearing, currentLine, resetTerminal]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedLines, charIndex, isLineComplete]);

  if (useGifFallback) {
    return (
      <div className="relative w-full max-w-lg md:max-w-xl">
        <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#00f5ff] to-[#7b2fff] opacity-25 blur-2xl" />
        <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#00f5ff] to-[#7b2fff] neon-glow border border-[rgba(0,245,255,0.4)]">
          <div className="rounded-xl overflow-hidden bg-[#0d1117] p-2">
            <img
              src={coderGif}
              alt="Developer coding"
              className="w-full max-w-sm md:max-w-md rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  const typingPreview = currentLine?.text.slice(0, charIndex) ?? '';
  const showActiveLine = lineIndex < TERMINAL_SEQUENCE.length && !isClearing;

  return (
    <div className="relative w-full max-w-lg md:max-w-xl">
      <div className="absolute -inset-3 rounded-2xl bg-[#00f5ff]/20 blur-2xl" />

      <motion.div
        className="relative rounded-xl overflow-hidden border border-[#00f5ff]/50 shadow-[0_0_30px_rgba(0,245,255,0.25)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 bg-[#161b22] border-b border-[rgba(255,255,255,0.06)]">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-xs font-mono text-[#a0a0b0]">dikshanta@dev:~$</span>
        </div>

        {/* Terminal body */}
        <div
          ref={scrollRef}
          className="bg-[#0d1117] font-mono text-xs sm:text-sm leading-6 p-4 h-[280px] sm:h-[300px] overflow-hidden terminal-scroll"
        >
          {displayedLines.map((entry, i) => (
            <p key={`${i}-${entry.text}`} className={`mb-1 ${lineClass(entry.line.type)}`}>
              {formatLine(entry.line, entry.text)}
            </p>
          ))}

          {showActiveLine && currentLine && !isLineComplete && (
            <p className={`mb-1 ${lineClass(currentLine.type)}`}>
              {currentLine.type === 'command' ? '$ ' : ''}
              {typingPreview}
              <span className="typewriter-cursor inline-block w-2 h-4 bg-[#00f5ff] ml-0.5 align-middle" />
            </p>
          )}

          {showActiveLine && currentLine && isLineComplete && (
            <p className={`mb-1 ${lineClass(currentLine.type)}`}>
              {formatLine(currentLine, currentLine.text)}
              <span className="typewriter-cursor inline-block w-2 h-4 bg-[#00f5ff] ml-0.5 align-middle" />
            </p>
          )}

          {lineIndex >= TERMINAL_SEQUENCE.length && !isClearing && (
            <p className="text-[#00f5ff]">
              ${' '}
              <span className="typewriter-cursor inline-block w-2 h-4 bg-[#00f5ff] align-middle" />
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
