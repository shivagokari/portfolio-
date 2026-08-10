import { type ReactElement } from 'react'

export default function DesertAnimation(): ReactElement {
  return (
    <div className="desert-anim">
      {/* Sun */}
      <div className="desert-anim__sun" />

      {/* Birds */}
      <div className="desert-anim__birds">
        {[
          { id: 1, top: '15%', delay: '0s', duration: '16s', scale: 0.6 },
          { id: 2, top: '35%', delay: '4s', duration: '20s', scale: 0.4 },
          { id: 3, top: '25%', delay: '9s', duration: '14s', scale: 0.5 },
          { id: 4, top: '45%', delay: '12s', duration: '18s', scale: 0.45 },
        ].map((bird) => (
          <div
            key={bird.id}
            className="desert-anim__bird-wrapper"
            style={{
              top: bird.top,
              animationDelay: bird.delay,
              animationDuration: bird.duration,
              transform: `scale(${bird.scale})`,
            }}
          >
            <svg viewBox="0 0 60 40" className="desert-anim__bird-svg">
              <g>
                {/* Body */}
                <path d="M30,22 Q31,20 33,20 Q35,20 36,22 Q35,23 33,23 Q31,23 30,22 Z" fill="currentColor" />
                {/* Left Wing */}
                <path d="M31,21 Q21,12 11,18 Q21,18 31,21 Z" fill="currentColor" className="desert-anim__wing-left" />
                {/* Right Wing */}
                <path d="M35,21 Q45,12 55,18 Q45,18 35,21 Z" fill="currentColor" className="desert-anim__wing-right" />
              </g>
            </svg>
          </div>
        ))}
      </div>

      {/* Dunes (Foreground vector layout) */}
      <div className="desert-anim__dunes">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="desert-anim__dunes-svg">
          {/* Back Dune */}
          <path d="M0,60 Q250,20 500,70 T1000,50 L1000,100 L0,100 Z" fill="var(--color-bg-3)" opacity="0.5" />
          {/* Middle Dune */}
          <path d="M0,80 Q350,50 700,90 T1000,75 L1000,100 L0,100 Z" fill="var(--color-bg-2)" opacity="0.8" />
          {/* Front Dune */}
          <path d="M0,90 Q200,70 500,95 T1000,90 L1000,100 L0,100 Z" fill="var(--color-bg)" />
        </svg>
      </div>

      {/* Camels Caravan */}
      <div className="desert-anim__caravan">
        {[
          { id: 1, scale: 1.0, delay: '0s', bobDelay: '0s' },
          { id: 2, scale: 0.8, delay: '0.6s', bobDelay: '0.2s' },
          { id: 3, scale: 0.6, delay: '1.2s', bobDelay: '0.4s' },
        ].map((camel) => (
          <div
            key={camel.id}
            className="desert-anim__camel-wrapper"
            style={{
              animationDelay: camel.delay,
              transform: `scale(${camel.scale})`,
            }}
          >
            <div
              className="desert-anim__camel-bobber"
              style={{ animationDelay: camel.bobDelay }}
            >
              <svg viewBox="0 0 100 80" className="desert-anim__camel-svg">
                <path
                  d="M20,55 
                     C18,52 17,45 19,41 
                     C21,37 20,33 17,29 
                     C14,25 16,21 21,21 
                     C26,21 28,26 29,32 
                     C31,35 34,35 37,32 
                     C41,27 47,26 51,32 
                     C54,27 60,26 64,32 
                     C67,27 73,26 77,32 
                     C81,37 80,44 77,49 
                     C78,54 77,61 74,65 
                     L73,64 C75,59 75,54 75,49
                     C71,51 68,52 64,52
                     L64,74 L60,74 L60,54 L57,54 L57,74 L53,74 L53,51
                     C45,51 38,51 30,51
                     L30,74 L26,74 L26,55 L23,55 L23,74 L19,74 L19,54
                     C19,55 19,55 20,55 Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
