import { Instagram, Twitter, Facebook, MessageCircle } from "lucide-react"
import texts from "@/texts.json"
import { SPACING } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-background">
      <div className={`${SPACING.container} py-12`}>
        <div className={`grid grid-cols-2 gap-8`}>
          <div>
            <h3 className="text-2xl font-bold mb-3 font-display text-background">{texts.common.clubName}</h3>
            <p className="text-lg leading-relaxed text-background">{texts.common.clubNameTagline}</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold font-display mb-0.5">{texts.footer.contact}</h4>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <p className="text-background mb-5">{texts.common.email}</p>
            </a>
            <h4 className="text-xl font-semibold font-display mb-0.5">{texts.social.title}</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6 text-background" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6 text-background" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6 text-background" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-6 w-6 text-background" />
              </a>
            </div>
            <p className="text-lg mt-4 leading-relaxed text-background">
              {texts.common.address.street}
              <br />
              {texts.common.address.city}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-lg text-muted-foreground">
          <p className="text-background">
            &copy; {new Date().getFullYear()} {texts.common.clubName}. {texts.common.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
