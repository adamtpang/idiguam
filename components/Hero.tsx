interface HeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    showCTA?: boolean;
    ctaText?: string;
    ctaHref?: string;
}

export default function Hero({
    title,
    subtitle,
    backgroundImage = '/hero-bg.jpg',
    showCTA = true,
    ctaText = 'Order Now',
    ctaHref = 'https://idiorder.zite.so',
}: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,37,74,0.9) 0%, rgba(0,37,74,0.6) 50%, rgba(0,37,74,0.95) 100%), url('${backgroundImage}')`,
                }}
            />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="font-heading text-gold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-6">
                    {title.split('\n').map((line, i) => (
                        <span key={i}>
                            {line}
                            {i < title.split('\n').length - 1 && <br />}
                        </span>
                    ))}
                </h1>

                {subtitle && (
                    <p className="font-accent text-cyan text-sm md:text-base uppercase tracking-widest mb-8">
                        {subtitle}
                    </p>
                )}

                {showCTA && (
                    <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
                        {ctaText}
                    </a>
                )}
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
