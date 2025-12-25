import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: 'white' | 'navy' | 'pattern';
}

export default function Section({ children, className = '', id, background = 'white' }: SectionProps) {
    const bgClasses = {
        white: 'bg-white',
        navy: 'bg-navy',
        pattern: 'bg-white bg-pattern',
    };

    return (
        <section id={id} className={`py-16 md:py-24 lg:py-32 ${bgClasses[background]} ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        </section>
    );
}
