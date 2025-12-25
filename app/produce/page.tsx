import { Header, Footer, Section } from '@/components';

const produceItems = [
    { name: 'Fresh Fruits', items: ['Apples', 'Oranges', 'Bananas', 'Grapes', 'Mangoes', 'Papayas'], image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&h=400&fit=crop' },
    { name: 'Vegetables', items: ['Lettuce', 'Tomatoes', 'Carrots', 'Broccoli', 'Bell Peppers', 'Onions'], image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop' },
    { name: 'Herbs & Greens', items: ['Cilantro', 'Basil', 'Parsley', 'Spinach', 'Kale', 'Mint'], image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop' },
];

export default function ProducePage() {
    return (
        <>
            <Header />

            <section
                className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0,37,74,0.9), rgba(0,37,74,0.85)), url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&h=1080&fit=crop')` }}
            >
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-gold mb-6">Fresh Produce</h1>
                    <p className="font-accent text-cyan text-sm md:text-base uppercase tracking-widest mb-4">Air-Flown Freshness</p>
                    <p className="text-white/80 font-body text-lg max-w-2xl mx-auto">
                        We deliver fresh fruits, vegetables, and herbs regularly to ensure your kitchen always has access to the highest quality produce.
                    </p>
                </div>
            </section>

            <Section background="white">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="section-heading text-navy mb-4">Committed to Freshness</h2>
                    <p className="section-subheading mb-8">From Farm to Your Kitchen</p>
                    <p className="text-navy/80 font-body text-lg leading-relaxed">
                        Our produce is carefully selected and air-flown to Guam multiple times per week. We work directly with trusted suppliers to ensure every delivery meets our rigorous quality standards.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {produceItems.map((category, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${category.image}')` }} />
                            <div className="p-6">
                                <h3 className="font-heading text-2xl text-navy mb-4">{category.name}</h3>
                                <ul className="space-y-2">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="text-navy/70 font-body text-sm flex items-center gap-2">
                                            <span className="text-cyan">•</span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <section className="bg-navy py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="font-heading text-3xl md:text-4xl text-gold mb-6">Regular Delivery Schedule</h2>
                    <p className="text-cyan/80 font-body text-lg mb-8">
                        We receive fresh produce shipments multiple times weekly. Contact us to learn about delivery schedules for your area.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="btn-primary">Contact Us</a>
                        <a href="https://idiorder.zite.so" target="_blank" rel="noopener noreferrer" className="btn-secondary">Order Online</a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
