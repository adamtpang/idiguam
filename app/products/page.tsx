'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const productCategories = [
    {
        name: 'Air-Flown Produce',
        image: 'https://i.postimg.cc/6QQG5pMD/fruits_and_veggies.avif',
        pdfUrl: 'https://wixlabs-pdf-dev.appspot.com/index?pageId=o6r5t&compId=comp-kn407ng8&viewerCompId=comp-kn407ng8&siteRevision=884&viewMode=site&deviceType=desktop&locale=en&tz=Pacific%2FGuam&regionalLanguage=en&width=980&height=1730&instance=qtQ6MhHtRn1qFSMwuT660Jf-toMvHuAeiAyTzF0VmWc.eyJpbnN0YW5jZUlkIjoiY2I3MzQ4YmUtY2Y0ZC00ZWYxLWI3Y2QtNGZhYzZkYTEzMTZjIiwiYXBwRGVmSWQiOiIxM2VlMTBhMy1lY2I5LTdlZmYtNDI5OC1kMmY5ZjM0YWNmMGQiLCJtZXRhU2l0ZUlkIjoiY2RmZDE0NDktODRkMC00NjE1LTk5OWItMGJkMTg3MzkzZjNjIiwic2lnbkRhdGUiOiIyMDI1LTEyLTI2VDA2OjU3OjMxLjA3NVoiLCJkZW1vTW9kZSI6ZmFsc2UsImFpZCI6IjhiMmQzNmVlLTQ5MGQtNDY3Ny1iZDJhLWEyNWMwOTk0ZTY5YyIsImJpVG9rZW4iOiIwNjhlNWNmNy00YjlkLTA4ZTQtMmU1Ni00NDdkZWE5ODBlNTAiLCJzaXRlT3duZXJJZCI6ImMwYTZjNDZiLTcxODctNDhkNi1iZWMwLTQ4ZTA4YzcyMmYxYiIsImJzIjoiRFBzSDJfaDBhRXp5N21YQTNJWUg4V3d0M004SzBWUEswNUg1VHdrdExySSIsInNjZCI6IjIwMTktMTItMDJUMDY6NTI6MTguODUzWiJ9&currency=USD&currentCurrency=USD&commonConfig=%7B%22brand%22%3A%22wix%22%2C%22host%22%3A%22VIEWER%22%2C%22bsi%22%3A%2275d35af6-f445-4d14-87e7-c4d9ab5b3fe2%7C1%22%2C%22siteRevision%22%3A%22884%22%2C%22renderingFlow%22%3A%22NONE%22%2C%22language%22%3A%22en%22%2C%22locale%22%3A%22en-gu%22%2C%22BSI%22%3A%2275d35af6-f445-4d14-87e7-c4d9ab5b3fe2%7C1%22%7D&currentRoute=.%2Fair-flown-produce&vsi=f84c3dc2-1487-40d3-87a0-f93367f87a7e',
    },
    {
        name: 'Fresh Produce',
        image: 'https://i.postimg.cc/VNNbLkKh/veggies.avif',
        pdfUrl: 'https://wixlabs-pdf-dev.appspot.com/index?pageId=vgjz1&compId=comp-kn3zsnm0&viewerCompId=comp-kn3zsnm0&siteRevision=884&viewMode=site&deviceType=desktop&locale=en&tz=Pacific%2FGuam&regionalLanguage=en&width=980&height=1960&instance=GmeIO4XcQcC7E18vhuElpF-fDnuO9yUKsyjzccmyY_U.eyJpbnN0YW5jZUlkIjoiY2I3MzQ4YmUtY2Y0ZC00ZWYxLWI3Y2QtNGZhYzZkYTEzMTZjIiwiYXBwRGVmSWQiOiIxM2VlMTBhMy1lY2I5LTdlZmYtNDI5OC1kMmY5ZjM0YWNmMGQiLCJtZXRhU2l0ZUlkIjoiY2RmZDE0NDktODRkMC00NjE1LTk5OWItMGJkMTg3MzkzZjNjIiwic2lnbkRhdGUiOiIyMDI1LTEyLTI2VDA2OjU3OjI2LjgwNFoiLCJkZW1vTW9kZSI6ZmFsc2UsImFpZCI6IjhiMmQzNmVlLTQ5MGQtNDY3Ny1iZDJhLWEyNWMwOTk0ZTY5YyIsImJpVG9rZW4iOiIwNjhlNWNmNy00YjlkLTA4ZTQtMmU1Ni00NDdkZWE5ODBlNTAiLCJzaXRlT3duZXJJZCI6ImMwYTZjNDZiLTcxODctNDhkNi1iZWMwLTQ4ZTA4YzcyMmYxYiIsImJzIjoiRFBzSDJfaDBhRXp5N21YQTNJWUg4V3d0M004SzBWUEswNUg1VHdrdExySSIsInNjZCI6IjIwMTktMTItMDJUMDY6NTI6MTguODUzWiJ9&currency=USD&currentCurrency=USD&commonConfig=%7B%22brand%22%3A%22wix%22%2C%22host%22%3A%22VIEWER%22%2C%22bsi%22%3A%2275d35af6-f445-4d14-87e7-c4d9ab5b3fe2%7C1%22%2C%22siteRevision%22%3A%22884%22%2C%22renderingFlow%22%3A%22NONE%22%2C%22language%22%3A%22en%22%2C%22locale%22%3A%22en-gu%22%2C%22BSI%22%3A%2275d35af6-f445-4d14-87e7-c4d9ab5b3fe2%7C1%22%7D&currentRoute=.%2Fproduce&vsi=6bfee54c-8d6d-4bf2-8d88-eff36c594b92',
    },
    {
        name: 'Frozen Products',
        image: 'https://i.postimg.cc/9ffqFQLK/seafood.avif',
        pdfUrl: 'https://wixlabs-pdf-dev.appspot.com/index?pageId=d5juu&compId=comp-kn407tmg&viewerCompId=comp-kn407tmg&siteRevision=884&viewMode=site&deviceType=desktop&locale=en&tz=Pacific%2FGuam&regionalLanguage=en&width=980&height=1790&instance=M5v0B1OWfNw9WQaYEvTZ9_E44D6QPC0WF8VyfSUn8hI.eyJpbnN0YW5jZUlkIjoiY2I3MzQ4YmUtY2Y0ZC00ZWYxLWI3Y2QtNGZhYzZkYTEzMTZjIiwiYXBwRGVmSWQiOiIxM2VlMTBhMy1lY2I5LTdlZmYtNDI5OC1kMmY5ZjM0YWNmMGQiLCJtZXRhU2l0ZUlkIjoiY2RmZDE0NDktODRkMC00NjE1LTk5OWItMGJkMTg3MzkzZjNjIiwic2lnbkRhdGUiOiIyMDI1LTEyLTI2VDA2OjU3OjM0Ljc4MFoiLCJkZW1vTW9kZSI6ZmFsc2UsImFpZCI6IjhiMmQzNmVlLTQ5MGQtNDY3Ny1iZDJhLWEyNWMwOTk0ZTY5YyIsImJpVG9rZW4iOiIwNjhlNWNmNy00YjlkLTA4ZTQtMmU1Ni00NDdkZWE5ODBlNTAiLCJzaXRlT3duZXJJZCI6ImMwYTZjNDZiLTcxODctNDhkNi1iZWMwLTQ4ZTA4YzcyMmYxYiIsImJzIjoiRFBzSDJfaDBhRXp5N21YQTNJWUg4V3d0M004SzBWUEswNUg1VHdrdExySSIsInNjZCI6IjIwMTktMTItMDJUMDY6NTI6MTguODUzWiJ9&currency=USD&currentCurrency=USD&commonConfig=%7B%22brand%22%3A%22wix%22%2C%22host%22%3A%22VIEWER%22%2C%22bsi%22%3A%2275d35af6-f445-4d14-87e7-c4d9ab5b3fe2%7C1%22%2C%22siteRevision%22%3A%22884%22%2C%22renderingFlow%22%3A%22NONE%22%2C%22language%22%3A%22en%22%2C%22locale%22%3A%22en-gu%22%2C%22BSI%22%3A%2275d35af6-f445-4d14-87e7-c4d9ab5b3fe2%7C1%22%7D&currentRoute=.%2Ffreeze-products&vsi=195ff3fa-d601-41f6-b333-66acc7d234b6',
    },
    {
        name: 'Pastries & Bakery',
        image: 'https://i.postimg.cc/FKKJsHTq/pastries.avif',
        pdfUrl: null,
    },
];

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const selectedProduct = productCategories.find(p => p.name === selectedCategory);

    return (
        <>
            <Header />

            <main className="pt-16 min-h-screen bg-white">
                {/* Header */}
                <section className="py-8 px-4 text-center bg-[#2a2a2a]">
                    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-heading text-2xl md:text-3xl text-white font-bold">
                        Products
                    </motion.h1>
                </section>

                {/* Categories */}
                <section className="py-8 px-4">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        >
                            {productCategories.map((cat) => (
                                <motion.button
                                    key={cat.name}
                                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setSelectedCategory(cat.name)}
                                    className={`relative aspect-square rounded-lg overflow-hidden shadow-lg ${selectedCategory === cat.name ? 'ring-4 ring-[#2a2a2a]' : ''}`}
                                >
                                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                    <span className="absolute bottom-0 left-0 right-0 p-3 text-white font-heading text-sm font-semibold">{cat.name}</span>
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* PDF Viewer */}
                <AnimatePresence>
                    {selectedProduct && (
                        <motion.section
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="py-6 px-4 bg-gray-50 overflow-hidden"
                        >
                            <div className="max-w-5xl mx-auto">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="font-heading text-lg font-bold">{selectedProduct.name}</h2>
                                    <button onClick={() => setSelectedCategory(null)} className="text-gray-500 hover:text-black">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                                {selectedProduct.pdfUrl ? (
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                        <iframe src={selectedProduct.pdfUrl} className="w-full h-[600px] md:h-[800px] border-0" title={selectedProduct.name} />
                                    </div>
                                ) : (
                                    <div className="bg-white rounded-lg shadow-lg p-8 text-center text-gray-500">Coming soon</div>
                                )}
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>

                {/* Order Portal Embed */}
                <section className="py-8 px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-heading text-xl font-bold text-center mb-6">Order Online</h2>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                            <iframe src="https://idiorder.zite.so" className="w-full h-[600px] border-0" title="IDI Order Portal" />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
