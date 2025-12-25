import { Header, Footer, Section } from '@/components';

export default function AboutPage() {
    return (
        <>
            <Header />

            <section
                className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0,37,74,0.9), rgba(0,37,74,0.8)), url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop')` }}
            >
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-gold mb-6">About IDI Guam</h1>
                    <p className="font-accent text-cyan text-sm md:text-base uppercase tracking-widest">Your Trusted Food Distribution Partner</p>
                </div>
            </section>

            <Section background="pattern">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="section-heading text-navy mb-4">Our Story</h2>
                        <p className="section-subheading mb-6">Serving Guam with Pride</p>
                        <p className="text-navy/80 font-body text-lg leading-relaxed mb-6">
                            IDI Guam was founded with a simple mission: to provide quality food products and exceptional service to the businesses and communities of Guam. Over the years, we've grown to become one of the island's most trusted food distributors.
                        </p>
                        <p className="text-navy/80 font-body text-lg leading-relaxed">
                            Today, we serve restaurants, hotels, supermarkets, and institutional clients across Guam with a comprehensive selection of frozen foods, fresh produce, dry goods, and specialty items.
                        </p>
                    </div>
                    <div className="h-80 md:h-96 rounded-lg bg-cover bg-center shadow-xl" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&h=600&fit=crop')` }} />
                </div>
            </Section>

            <section className="bg-navy py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="section-heading text-gold mb-4">Our Values</h2>
                        <p className="section-subheading">What Drives Us Every Day</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: 'Quality', desc: 'We never compromise on the quality of products we deliver.' },
                            { title: 'Reliability', desc: 'Consistent, on-time delivery you can count on.' },
                            { title: 'Partnership', desc: 'Building lasting relationships with our clients.' },
                            { title: 'Community', desc: 'Proud to serve and support our island community.' },
                        ].map((value, index) => (
                            <div key={index} className="text-center p-6">
                                <h3 className="font-heading text-2xl text-gold mb-3">{value.title}</h3>
                                <p className="text-white/70 font-body text-sm">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Section background="white">
                <div className="text-center">
                    <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">Let's Work Together</h2>
                    <p className="text-navy/70 font-body text-lg mb-8 max-w-2xl mx-auto">
                        Whether you're a restaurant, hotel, supermarket, or institution, we're here to meet your food distribution needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="btn-primary">Contact Us</a>
                        <a href="https://idiorder.zite.so" target="_blank" rel="noopener noreferrer" className="btn-secondary">Start Ordering</a>
                    </div>
                </div>
            </Section>

            <Footer />
        </>
    );
}
