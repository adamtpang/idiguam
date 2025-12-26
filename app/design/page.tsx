export default function DesignPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-black text-white py-4 px-6">
                <h1 className="font-heading text-xl font-bold">IDI Guam — Design System</h1>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
                {/* Color Palette */}
                <section>
                    <h2 className="font-heading text-2xl font-bold mb-6 text-black">Color Palette</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <div className="h-24 bg-black rounded-lg border"></div>
                            <p className="font-body text-sm"><strong>Black</strong><br />#000000</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 bg-white rounded-lg border-2 border-gray-200"></div>
                            <p className="font-body text-sm"><strong>White</strong><br />#FFFFFF</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 bg-navy rounded-lg border"></div>
                            <p className="font-body text-sm"><strong>Navy</strong><br />#0a192f</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 bg-gray-200 rounded-lg border"></div>
                            <p className="font-body text-sm"><strong>Gray</strong><br />#e5e7eb</p>
                        </div>
                    </div>
                </section>

                {/* Typography */}
                <section>
                    <h2 className="font-heading text-2xl font-bold mb-6 text-black">Typography</h2>

                    <div className="space-y-8">
                        {/* Heading Font */}
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-500 mb-2 font-body">Heading Font — Plus Jakarta Sans</p>
                            <h1 className="font-heading text-5xl font-bold text-black mb-2">The Quick Brown Fox</h1>
                            <h2 className="font-heading text-4xl font-semibold text-black mb-2">Jumps Over The Lazy Dog</h2>
                            <h3 className="font-heading text-3xl font-medium text-black mb-2">ABCDEFGHIJKLMNOPQRSTUVWXYZ</h3>
                            <p className="font-heading text-2xl text-gray-600">1234567890 !@#$%^&*()</p>
                        </div>

                        {/* Body Font */}
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-500 mb-2 font-body">Body Font — Work Sans</p>
                            <p className="font-body text-lg text-black mb-2">
                                International Distributors, Inc. has been serving Guam and Micronesia since 1980.
                                We are your trusted local food wholesaler, providing quality products to restaurants,
                                hotels, and retailers across the region.
                            </p>
                            <p className="font-body text-base text-gray-600 mb-2">
                                Regular weight paragraph text. Clear, readable, and professional.
                            </p>
                            <p className="font-body text-sm text-gray-500">
                                Small text for captions and fine print. Still highly legible.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Buttons */}
                <section>
                    <h2 className="font-heading text-2xl font-bold mb-6 text-black">Buttons</h2>
                    <div className="flex flex-wrap gap-4">
                        <button className="btn-primary">Primary Button</button>
                        <button className="btn-secondary">Secondary Button</button>
                        <a href="#" className="inline-block bg-navy text-white font-body font-medium px-6 py-3 rounded transition-all duration-200 hover:bg-black uppercase tracking-wider text-sm">
                            Navy Button
                        </a>
                    </div>
                </section>

                {/* Cards */}
                <section>
                    <h2 className="font-heading text-2xl font-bold mb-6 text-black">Cards</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-heading text-xl font-semibold mb-2">Card Title</h3>
                            <p className="font-body text-gray-600 text-sm">A simple card with border and subtle shadow.</p>
                        </div>
                        <div className="bg-black text-white rounded-lg p-6">
                            <h3 className="font-heading text-xl font-semibold mb-2">Dark Card</h3>
                            <p className="font-body text-gray-300 text-sm">Inverted card for emphasis sections.</p>
                        </div>
                        <div className="bg-navy text-white rounded-lg p-6">
                            <h3 className="font-heading text-xl font-semibold mb-2">Navy Card</h3>
                            <p className="font-body text-gray-300 text-sm">Navy background for brand accent.</p>
                        </div>
                    </div>
                </section>

                {/* Font Comparison */}
                <section>
                    <h2 className="font-heading text-2xl font-bold mb-6 text-black">Font Options to Consider</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 border rounded-lg">
                            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Current Selection</p>
                            <p className="font-heading text-2xl font-bold mb-1">Plus Jakarta Sans</p>
                            <p className="font-body text-gray-600">+ Work Sans for body text</p>
                            <p className="mt-4 text-sm text-gray-500">Modern, friendly, geometric. Great for contemporary brands.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Alternative</p>
                            <p style={{ fontFamily: 'system-ui' }} className="text-2xl font-bold mb-1">Inter</p>
                            <p style={{ fontFamily: 'system-ui' }} className="text-gray-600">+ Source Sans Pro for body</p>
                            <p className="mt-4 text-sm text-gray-500">Clean, neutral, highly readable. Tech/startup feel.</p>
                        </div>
                    </div>
                </section>

                {/* Brand Kit */}
                <section>
                    <h2 className="font-heading text-2xl font-bold mb-6 text-black">Brand Kit Summary</h2>
                    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                        <div className="flex items-center gap-4">
                            <img src="https://i.postimg.cc/Gtd7LZyK/image.png" alt="Logo" className="h-12" />
                            <div>
                                <p className="font-heading font-bold">International Distributors, Inc.</p>
                                <p className="font-body text-sm text-gray-600">Food Wholesale | Guam</p>
                            </div>
                        </div>
                        <hr className="border-gray-200" />
                        <div className="grid md:grid-cols-3 gap-4 text-sm font-body">
                            <div>
                                <p className="font-semibold">Primary Colors</p>
                                <p className="text-gray-600">Black, White, Navy Blue</p>
                            </div>
                            <div>
                                <p className="font-semibold">Heading Font</p>
                                <p className="text-gray-600">Plus Jakarta Sans</p>
                            </div>
                            <div>
                                <p className="font-semibold">Body Font</p>
                                <p className="text-gray-600">Work Sans</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-black text-white py-6 px-6 text-center">
                <p className="font-body text-sm text-gray-400">IDI Guam Design System — For Internal Use</p>
            </footer>
        </div>
    );
}
