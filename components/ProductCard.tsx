interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    category?: string;
}

export default function ProductCard({ title, description, image, category }: ProductCardProps) {
    return (
        <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 md:h-56 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                {category && (
                    <span className="absolute top-4 left-4 bg-gold text-navy font-accent text-xs uppercase tracking-wider px-3 py-1 rounded">
                        {category}
                    </span>
                )}
            </div>
            <div className="p-6">
                <h3 className="font-heading text-2xl text-navy mb-2 group-hover:text-cyan transition-colors duration-200">
                    {title}
                </h3>
                <p className="text-navy/70 font-body text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
