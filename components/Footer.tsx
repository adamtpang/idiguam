export default function Footer() {
    return (
        <footer className="bg-[#2a2a2a] py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-[#8b8b8b] font-body text-sm">
                    © {new Date().getFullYear()} International Distributors, Inc.
                </p>
            </div>
        </footer>
    );
}
