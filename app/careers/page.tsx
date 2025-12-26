'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CareersPage() {
    return (
        <>
            <Header />

            <main className="pt-16 min-h-screen bg-white">
                {/* Header */}
                <section className="py-8 px-4 text-center bg-[#2a2a2a]">
                    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-heading text-2xl md:text-3xl text-white font-bold">
                        Careers
                    </motion.h1>
                </section>

                {/* Jobs Portal Embed */}
                <section className="py-8 px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-center text-gray-600 mb-6"
                        >
                            Join Guam's leading food distributor.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
                        >
                            <iframe src="https://idiapply.zite.so" className="w-full h-[700px] border-0" title="IDI Careers Portal" />
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
