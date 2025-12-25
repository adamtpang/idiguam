import Link from 'next/link';

const footerLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Produce', href: '/produce' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Footer() {
    return (
        <footer className="bg-navy relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-12 items-start">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                                <span className="font-heading text-navy text-lg font-bold">IDI</span>
                            </div>
                            <span className="font-heading text-2xl text-gold">IDI Guam</span>
                        </div>
                        <p className="text-cyan/80 font-body text-sm leading-relaxed">
                            Your premier food distribution partner serving Guam with quality products and exceptional service.
                        </p>
                    </div>

                    <div className="text-center">
                        <h3 className="font-accent text-gold text-sm uppercase tracking-widest mb-4">Quick Links</h3>
                        <nav className="flex flex-col gap-2">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-cyan/80 hover:text-gold transition-colors duration-200 font-body text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="text-center md:text-right">
                        <h3 className="font-accent text-gold text-sm uppercase tracking-widest mb-4">Get In Touch</h3>
                        <div className="space-y-2 text-cyan/80 font-body text-sm">
                            <p>123 Main Street</p>
                            <p>Tamuning, Guam 96913</p>
                            <p className="mt-4">
                                <a href="tel:+16716461234" className="hover:text-gold transition-colors">(671) 646-1234</a>
                            </p>
                            <p>
                                <a href="mailto:info@idiguam.com" className="hover:text-gold transition-colors">info@idiguam.com</a>
                            </p>
                        </div>
                        <a
                            href="https://idiorder.zite.so"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 btn-secondary text-xs"
                        >
                            Order Online
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gold/20 text-center">
                    <p className="text-cyan/60 font-body text-xs">
                        © {new Date().getFullYear()} IDI Guam. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
