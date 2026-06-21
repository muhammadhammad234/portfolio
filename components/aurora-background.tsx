// Fixed, full-page animated background: soft aurora blobs, a faded grid,
// and a few floating particles. Pure CSS animation — no JS, no dependencies.
const PARTICLES = [
    { top: '18%', left: '12%', size: 6, delay: '0s' },
    { top: '32%', left: '82%', size: 4, delay: '1.2s' },
    { top: '54%', left: '24%', size: 5, delay: '2.1s' },
    { top: '68%', left: '70%', size: 7, delay: '0.6s' },
    { top: '12%', left: '58%', size: 3, delay: '3s' },
    { top: '80%', left: '40%', size: 4, delay: '1.8s' },
    { top: '44%', left: '92%', size: 5, delay: '2.6s' },
    { top: '88%', left: '14%', size: 3, delay: '0.9s' },
]

const AuroraBackground = () => {
    return (
        <div className="aurora" aria-hidden="true">
            <span className="aurora__blob aurora__blob--1" />
            <span className="aurora__blob aurora__blob--2" />
            <span className="aurora__blob aurora__blob--3" />
            <div className="aurora__grid" />
            {PARTICLES.map((p, i) => (
                <span
                    key={i}
                    className="particle"
                    style={{ top: p.top, left: p.left, width: p.size, height: p.size, animationDelay: p.delay }}
                />
            ))}
        </div>
    )
}

export default AuroraBackground
