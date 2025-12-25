'use client';

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Produce', href: '/produce' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                            <span className="font-heading text-navy text-xl font-bold">IDI</span>
                        </div>
                        <span className="hidden sm:block font-heading text-2xl text-gold">IDI Guam</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-cyan font-body text-sm uppercase tracking-wider hover:text-gold transition-colors duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="https://idiorder.zite.so"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Order Now
                        </a>
                    </div>

                    <button
                        type="button"
                        className="md:hidden text-gold p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Toggle menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gold/20">
                        <div className="flex flex-col gap-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-cyan font-body text-lg uppercase tracking-wider hover:text-gold transition-colors duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <a
                                href="https://idiorder.zite.so"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-fit"
                            >
                                Order Now
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
