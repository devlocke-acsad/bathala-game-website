
import { ExternalLink } from "lucide-react";

const SURVEY_URL = "https://forms.gle/TEJwaNaa2DR1ztmaA";

const Footer = () => {
  return (
    <footer className="border-t border-gold/10 bg-card/50 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-[15px] text-gold mb-3 leading-loose">BATHALA</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Mend the Shattered Balance. A Filipino mythology-inspired roguelike card game.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-[12px] tracking-[0.2em] text-foreground mb-4 leading-loose">
              LINKS
            </h4>
            <div className="space-y-2 font-body">
              {[
                { label: "Play Bathala", href: "https://play.bathala.quest/" },
                { label: "GitHub", href: "https://github.com/Devlocke-Studios" },
                { label: "YouTube", href: "https://www.youtube.com/@devlock%C3%A8" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-[12px] tracking-[0.2em] text-foreground mb-4 leading-loose">
              SOCIAL
            </h4>
            <div className="space-y-2 font-body">
              <a
                href="https://www.facebook.com/playbathala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-gold transition-colors"
              >
                Facebook
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.youtube.com/@devlock%C3%A8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-gold transition-colors"
              >
                YouTube
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-[12px] tracking-[0.2em] text-foreground mb-4 leading-loose">
              CONTACT
            </h4>
            <a
              href="mailto:devlockestudios@proton.me"
              className="text-muted-foreground text-sm hover:text-gold transition-colors font-body"
            >
              devlockestudios@proton.me
            </a>
            <p className="text-muted-foreground/60 text-xs mt-4 leading-relaxed font-body">
              University of Makati<br />
              BS Computer Science Thesis 2025
            </p>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/60 text-[12px] font-display tracking-wider">
            © 2025 DEVLOCKE STUDIOS
          </p>
          <a
            href={SURVEY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[12px] tracking-wider text-gold hover:text-gold transition-colors"
          >
            📋 TAKE OUR THESIS SURVEY
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

