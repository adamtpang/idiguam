'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const holidays2025 = [
    { date: 'Jan 1', name: "New Year's", hours: 'Closed' },
    { date: 'Feb 10', name: 'Super Bowl', hours: 'Closed' },
    { date: 'Apr 18', name: 'Good Friday', hours: '7am-12pm' },
    { date: 'Jul 21', name: 'Liberation Day', hours: 'Closed' },
    { date: 'Sep 1', name: 'Labor Day', hours: 'Closed' },
    { date: 'Nov 27', name: 'Thanksgiving', hours: 'Closed' },
    { date: 'Dec 8', name: 'Kamalen Feast', hours: 'Closed' },
    { date: 'Dec 24', name: 'Christmas Eve', hours: '7am-12pm' },
    { date: 'Dec 25', name: 'Christmas', hours: 'Closed' },
    { date: 'Dec 31', name: "New Year's Eve", hours: '7am-12pm' },
];

const galleryImages = [
    { src: 'https://i.postimg.cc/V6cz67Rh/idiwarehouse.jpg', alt: 'IDI Warehouse' },
    { src: 'https://i.postimg.cc/RFzvFPd9/idiwarehouse2.jpg', alt: 'IDI Warehouse Interior' },
];

function AccordionItem({ title, children, isOpen, onToggle }: {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-4 px-4 text-left hover:bg-gray-50 transition-colors"
            >
                <span className="font-heading text-base md:text-lg text-black font-medium">{title}</span>
                <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <div className="px-4 pb-4">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}

function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

    return (
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <motion.img
                key={currentIndex}
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
            <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, i) => (
                    <button key={i} onClick={() => setCurrentIndex(i)} className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white/50'}`} />
                ))}
            </div>
        </div>
    );
}

export default function HomePage() {
    const [openSection, setOpenSection] = useState<string | null>(null);
    const toggleSection = (section: string) => setOpenSection(openSection === section ? null : section);

    return (
        <>
            <Header />

            {/* Hero */}
            <section
                className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center pt-16"
                style={{
                    backgroundImage: `url('https://i.postimg.cc/cLYyPR7R/hd-stock-image.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/95 backdrop-blur-sm px-6 md:px-12 py-8 md:py-10 rounded-lg shadow-xl text-center max-w-xl mx-4"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-heading text-xl md:text-2xl lg:text-3xl text-black mb-3 uppercase tracking-wide font-bold"
                    >
                        Your Local Food Wholesaler
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="font-body text-gray-600 text-base md:text-lg mb-4"
                    >
                        Serving Guam & Micronesia Since 1980
                    </motion.p>
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/products"
                        className="btn-primary inline-block"
                    >
                        View Products
                    </motion.a>
                </motion.div>
            </section>

            {/* Video + Gallery */}
            <section className="py-12 md:py-16 px-4 bg-[#2a2a2a]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_ofvtB_tROY" title="International Distributors" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                        <ImageCarousel />
                    </motion.div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-12 md:py-16 px-4 bg-white">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Left: Dropdowns */}
                    <div className="space-y-4">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                            <AccordionItem title="📍 Hours" isOpen={openSection === 'hours'} onToggle={() => toggleSection('hours')}>
                                <div className="space-y-4 text-sm">
                                    <div>
                                        <h3 className="font-semibold text-black">Office</h3>
                                        <p className="text-gray-600">Mon-Fri: 7am-3pm • Sat: 7am-12pm</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black">Pick-Up</h3>
                                        <p className="text-gray-600">Mon-Fri: 9am-2:30pm • Sat: 9am-11:30am</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black">🎄 2025 Holidays</h3>
                                        <div className="space-y-1 max-h-32 overflow-y-auto">
                                            {holidays2025.map((h, i) => (
                                                <div key={i} className="flex justify-between text-xs">
                                                    <span className="text-gray-600">{h.date} - {h.name}</span>
                                                    <span className={`px-2 rounded ${h.hours === 'Closed' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{h.hours}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </AccordionItem>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                            <AccordionItem title="📞 Contact" isOpen={openSection === 'contact'} onToggle={() => toggleSection('contact')}>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <h3 className="font-semibold text-black">Sales</h3>
                                        <p className="text-gray-600"><a href="tel:+16716491530" className="text-blue-600">(671) 649-1530</a> • <a href="mailto:sales@idiguam.com" className="text-blue-600">sales@idiguam.com</a></p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black">Accounting</h3>
                                        <p className="text-gray-600"><a href="tel:+16716491535" className="text-blue-600">(671) 649-1535</a></p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black">General</h3>
                                        <p><a href="mailto:info@idiguam.com" className="text-blue-600">info@idiguam.com</a></p>
                                    </div>
                                </div>
                            </AccordionItem>
                        </motion.div>
                    </div>

                    {/* Right: Map (always visible) */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <h3 className="font-heading font-semibold text-black mb-2">📍 Location</h3>
                            <p className="text-gray-600 text-sm mb-4">151 Boman Street, Barrigada, GU 96913</p>
                            <div className="rounded-lg overflow-hidden h-64 md:h-80">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15518.622982248491!2d144.829073!3d13.495298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x671f83277d66ad69%3A0xb7e0e845ffd7c889!2sInternational%20Distributors%2C%20Inc.!5e0!3m2!1sen!2sus!4v1766730522797!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="IDI Guam Location"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
