const SYMBOLS = [
  '</', '{}', '/>', '=>', '()', '[]', '&&', '/*', '*/', '01',
  '<>', '!=', '==', '++', '--', ';;', '::', '##', '||', '??',
];

// Pre-computed positions so they're stable (no random on re-render)
const ITEMS = [
  { sym: '</>', x: 5,  y: 12, delay: 0,    dur: 7  },
  { sym: '{}',  x: 18, y: 35, delay: 1.5,  dur: 9  },
  { sym: '=>',  x: 72, y: 8,  delay: 0.8,  dur: 8  },
  { sym: '()',  x: 88, y: 25, delay: 2.2,  dur: 11 },
  { sym: '/*',  x: 40, y: 18, delay: 3.5,  dur: 7  },
  { sym: '[]',  x: 60, y: 42, delay: 0.3,  dur: 10 },
  { sym: '&&',  x: 10, y: 60, delay: 4.1,  dur: 9  },
  { sym: '*/',  x: 93, y: 58, delay: 1.9,  dur: 8  },
  { sym: '01',  x: 28, y: 72, delay: 2.7,  dur: 12 },
  { sym: '<>',  x: 78, y: 70, delay: 0.6,  dur: 7  },
  { sym: '!=',  x: 50, y: 85, delay: 3.8,  dur: 10 },
  { sym: '==',  x: 15, y: 88, delay: 1.2,  dur: 9  },
  { sym: '++',  x: 83, y: 88, delay: 4.5,  dur: 8  },
  { sym: ';;',  x: 35, y: 50, delay: 0.1,  dur: 11 },
  { sym: '||',  x: 65, y: 55, delay: 2.9,  dur: 7  },
  { sym: '??',  x: 47, y: 30, delay: 5.2,  dur: 13 },
  { sym: '//>',  x: 8,  y: 45, delay: 3.0,  dur: 8  },
  { sym: '{}',  x: 95, y: 40, delay: 1.7,  dur: 10 },
];

export default function BackgroundSymbols() {
  return (
    <div className="bg-symbols" aria-hidden="true">
      {ITEMS.map((item, i) => (
        <span
          key={i}
          className="bg-symbol"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.dur}s`,
          }}
        >
          {item.sym}
        </span>
      ))}
    </div>
  );
}
