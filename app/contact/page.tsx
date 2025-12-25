import { Header, Footer, Section } from '@/components';

export default function ContactPage() {
    return (
        <>
            <Header />

            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28" style={{ background: `linear-gradient(to bottom, #00254a 0%, #003366 100%)` }}>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-gold mb-6">Contact Us</h1>
                    <p className="font-accent text-cyan text-sm md:text-base uppercase tracking-widest">We'd Love to Hear From You</p>
                </div>
            </section>

            <Section background="pattern">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="font-heading text-3xl text-navy mb-6">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-navy font-body font-medium mb-2">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-colors font-body" placeholder="Your name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-navy font-body font-medium mb-2">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-colors font-body" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-navy font-body font-medium mb-2">Company (Optional)</label>
                                <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-colors font-body" placeholder="Your company name" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-navy font-body font-medium mb-2">Message</label>
                                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-colors font-body resize-none" placeholder="How can we help you?" />
                            </div>
                            <button type="submit" className="btn-secondary w-full">Send Message</button>
                        </form>
                    </div>

                    <div>
                        <h2 className="font-heading text-3xl text-navy mb-6">Get In Touch</h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-accent text-sm uppercase tracking-wider text-cyan mb-2">Address</h3>
                                <p className="text-navy/80 font-body">123 Main Street<br />Tamuning, Guam 96913</p>
                            </div>
                            <div>
                                <h3 className="font-accent text-sm uppercase tracking-wider text-cyan mb-2">Phone</h3>
                                <p className="text-navy/80 font-body"><a href="tel:+16716461234" className="hover:text-cyan transition-colors">(671) 646-1234</a></p>
                            </div>
                            <div>
                                <h3 className="font-accent text-sm uppercase tracking-wider text-cyan mb-2">Email</h3>
                                <p className="text-navy/80 font-body"><a href="mailto:info@idiguam.com" className="hover:text-cyan transition-colors">info@idiguam.com</a></p>
                            </div>
                            <div>
                                <h3 className="font-accent text-sm uppercase tracking-wider text-cyan mb-2">Business Hours</h3>
                                <p className="text-navy/80 font-body">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 8:00 AM - 12:00 PM<br />Sunday: Closed</p>
                            </div>
                            <a href="https://idiorder.zite.so" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">Order Online 24/7</a>
                        </div>
                    </div>
                </div>
            </Section>

            <div className="h-80 bg-navy/10 flex items-center justify-center">
                <p className="text-navy/50 font-body">Map Coming Soon</p>
            </div>

            <Footer />
        </>
    );
}
