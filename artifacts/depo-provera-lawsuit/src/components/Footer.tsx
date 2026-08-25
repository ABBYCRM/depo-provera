import { Scale } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary/20 text-primary p-2 rounded-sm">
                <Scale size={24} />
              </div>
              <div className="font-serif font-bold text-xl tracking-tight text-white">
                Justice <span className="text-primary">Advocates</span>
              </div>
            </div>
            <p className="mb-6 max-w-sm">
              We connect victims of dangerous pharmaceuticals and medical devices with experienced attorneys. We help you find the right legal team.
            </p>
            <div className="text-white font-bold text-xl">
              1-800-JUSTICE
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/#about" className="hover:text-primary transition-colors block">About the Lawsuit</Link></li>
              <li><Link href="/#injuries" className="hover:text-primary transition-colors block">Your Injuries</Link></li>
              <li><Link href="/#team" className="hover:text-primary transition-colors block">Our Team</Link></li>
              <li><Link href="/#faq" className="hover:text-primary transition-colors block">FAQs</Link></li>
              <li><Link href="/sitemap" className="hover:text-primary transition-colors block">All Resources</Link></li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Main Office</h4>
            <address className="not-italic space-y-2">
              <p>100 Legal Plaza, Suite 500</p>
              <p>Chicago, IL 60601</p>
              <p className="mt-4">Available Nationwide</p>
            </address>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-8 border-t border-slate-800 text-xs leading-relaxed space-y-4 text-slate-500">
          <p className="uppercase font-bold text-slate-400">Attorney Advertising Disclaimer</p>
          <p>
            We are a case acquisition firm that connects injured individuals with qualified attorneys. We are not a law firm and do not provide legal advice. Attorney Advertising.
          </p>
          <p>
            The information contained on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. Prior results do not guarantee a similar outcome.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-4 border-t border-slate-900 gap-4">
            <p>&copy; {new Date().getFullYear()} Justice Advocates Case Acquisition. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}