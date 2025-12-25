import { Header, Footer, Section, ProductCard } from '@/components';

const products = [
    { title: 'Frozen Meats', description: 'Premium beef, pork, poultry, and specialty meats for commercial kitchens.', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=400&fit=crop', category: 'Frozen' },
    { title: 'Seafood', description: 'Fresh and frozen seafood selections from local and international waters.', image: 'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?w=600&h=400&fit=crop', category: 'Seafood' },
    { title: 'Dairy Products', description: 'Milk, cheese, butter, and cream products for every culinary need.', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&h=400&fit=crop', category: 'Dairy' },
    { title: 'Beverages', description: 'Juices, sodas, water, and specialty drinks for retail and food service.', image: 'https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=600&h=400&fit=crop', category: 'Beverages' },
    { title: 'Dry Goods', description: 'Rice, pasta, flour, and pantry essentials in bulk quantities.', image: 'https://images.unsplash.com/photo-1556911073-38141963c9e0?w=600&h=400&fit=crop', category: 'Pantry' },
    { title: 'Condiments & Sauces', description: 'Oils, vinegars, sauces, and seasonings from trusted brands.', image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=600&h=400&fit=crop', category: 'Condiments' },
];

export default function ProductsPage() {
    return (
        <>
            <Header />

            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28" style={{ background: `linear-gradient(to bottom, #00254a 0%, #003366 100%)` }}>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-gold mb-6">Our Products</h1>
                    <p className="font-accent text-cyan text-sm md:text-base uppercase tracking-widest mb-4">Quality Selection for Every Business</p>
                    <p className="text-white/80 font-body text-lg max-w-2xl mx-auto">
                        Browse our comprehensive catalog of quality food products. Ready to order? Visit our online portal for pricing and availability.
                    </p>
                </div>
            </section>

            <Section background="pattern">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-navy/70 font-body mb-6">Ready to place an order? Access our full catalog with pricing.</p>
                    <a href="https://idiorder.zite.so" target="_blank" rel="noopener noreferrer" className="btn-secondary">Go to Order Portal</a>
                </div>
            </Section>

            <Footer />
        </>
    );
}
