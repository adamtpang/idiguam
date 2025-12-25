import { Header, Hero, Footer, Section, ProductCard } from '@/components';

const featuredProducts = [
    {
        title: 'Frozen Foods',
        description: 'Premium frozen products including meats, seafood, and prepared foods for commercial and retail needs.',
        image: 'https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=600&h=400&fit=crop',
        category: 'Featured',
    },
    {
        title: 'Fresh Produce',
        description: 'Air-flown fresh fruits and vegetables delivered regularly to ensure peak freshness and quality.',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop',
        category: 'Fresh',
    },
    {
        title: 'Dry Goods',
        description: 'Comprehensive selection of pantry essentials, spices, and specialty ingredients.',
        image: 'https://images.unsplash.com/photo-1556911073-38141963c9e0?w=600&h=400&fit=crop',
        category: 'Pantry',
    },
];

const commitments = [
    {
        icon: '🌊',
        title: 'Island Fresh',
        description: 'We source the freshest products to serve our island community with quality you can trust.',
    },
    {
        icon: '🤝',
        title: 'Local Partnership',
        description: 'Supporting local businesses and building lasting relationships across Guam.',
    },
    {
        icon: '🚚',
        title: 'Reliable Delivery',
        description: 'Efficient distribution network ensuring your orders arrive on time, every time.',
    },
];

export default function HomePage() {
    return (
        <>
            <Header />

            <Hero
                title={`Quality Food\nDistribution`}
                subtitle="Serving Guam Since Day One"
                backgroundImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop"
            />

            <Section background="pattern">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="section-heading text-gold mb-4">
                        Your Premier Food Partner
                    </h2>
                    <p className="section-subheading mb-8">Trusted Distribution on Guam</p>
                    <p className="text-navy/80 font-body text-lg leading-relaxed mb-8">
                        IDI Guam has been the trusted food distribution partner for businesses across the island.
                        With our extensive product selection, reliable delivery service, and commitment to quality,
                        we help restaurants, hotels, and retailers serve their customers with the best products available.
                    </p>
                    <a href="/about" className="btn-primary">
                        Learn More About Us
                    </a>
                </div>
            </Section>

            <section
                className="relative py-24 md:py-32 bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,37,74,0.85), rgba(0,37,74,0.85)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop')`,
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-heading text-white mb-4">Our Commitment</h2>
                        <p className="section-subheading">Built on Trust & Quality</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {commitments.map((item, index) => (
                            <div key={index} className="text-center p-8">
                                <div className="text-5xl mb-6">{item.icon}</div>
                                <h3 className="font-heading text-2xl text-gold mb-4">{item.title}</h3>
                                <p className="text-white/80 font-body leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Section background="white">
                <div className="text-center mb-16">
                    <h2 className="section-heading text-navy mb-4">Our Products</h2>
                    <p className="section-subheading">Quality Selection for Every Need</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {featuredProducts.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>

                <div className="text-center">
                    <a href="/products" className="btn-primary">View All Products</a>
                </div>
            </Section>

            <section
                className="relative py-24 md:py-32"
                style={{ background: `linear-gradient(135deg, #00254a 0%, #003366 100%)` }}
            >
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="font-heading text-4xl md:text-5xl text-gold mb-6">Ready to Order?</h2>
                    <p className="text-cyan text-lg mb-8 font-body">
                        Access our full product catalog and place your order through our convenient online portal.
                    </p>
                    <a
                        href="https://idiorder.zite.so"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-lg"
                    >
                        Go to Order Portal
                    </a>
                </div>
            </section>

            <Footer />
        </>
    );
}
