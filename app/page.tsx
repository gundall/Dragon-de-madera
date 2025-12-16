import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import texts from "@/texts.json"
import { SPACING } from "@/lib/constants"

const MeepleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
    <path
      className="bg-popover-foreground text-primary"
      d="M256 54.99c-27 0-46.418 14.287-57.633 32.23-10.03 16.047-14.203 34.66-15.017 50.962-30.608 15.135-64.515 30.394-91.815 45.994-14.32 8.183-26.805 16.414-36.203 25.26C45.934 218.28 39 228.24 39 239.99c0 5 2.44 9.075 5.19 12.065 2.754 2.99 6.054 5.312 9.812 7.48 7.515 4.336 16.99 7.95 27.412 11.076 15.483 4.646 32.823 8.1 47.9 9.577-14.996 25.84-34.953 49.574-52.447 72.315C56.65 378.785 39 403.99 39 431.99c0 4-.044 7.123.31 10.26.355 3.137 1.256 7.053 4.41 10.156 3.155 3.104 7.017 3.938 10.163 4.28 3.146.345 6.315.304 10.38.304h111.542c8.097 0 14.026.492 20.125-3.43 6.1-3.92 8.324-9.275 12.67-17.275l.088-.16.08-.166s9.723-19.77 21.324-39.388c5.8-9.808 12.097-19.576 17.574-26.498 2.74-3.46 5.304-6.204 7.15-7.754.564-.472.82-.56 1.184-.76.363.2.62.288 1.184.76 1.846 1.55 4.41 4.294 7.15 7.754 5.477 6.922 11.774 16.69 17.574 26.498 11.6 19.618 21.324 39.387 21.324 39.387l.08.165.088.16c4.346 8 6.55 13.323 12.61 17.254 6.058 3.93 11.974 3.45 19.957 3.45H448c4 0 7.12.043 10.244-.304 3.123-.347 6.998-1.21 10.12-4.332 3.12-3.122 3.984-6.997 4.33-10.12.348-3.122.306-6.244.306-10.244 0-28-17.65-53.205-37.867-79.488-17.493-22.74-37.45-46.474-52.447-72.315 15.077-1.478 32.417-4.93 47.9-9.576 10.422-3.125 19.897-6.74 27.412-11.075 3.758-2.168 7.058-4.49 9.81-7.48 2.753-2.99 5.192-7.065 5.192-12.065 0-11.75-6.934-21.71-16.332-30.554-9.398-8.846-21.883-17.077-36.203-25.26-27.3-15.6-61.207-30.86-91.815-45.994-.814-16.3-4.988-34.915-15.017-50.96C302.418 69.276 283 54.99 256 54.99z"
    />
  </svg>
)

const calendarSrc =
  "https://calendar.google.com/calendar/u/0/embed?src=pgo2gfducbn70d2eqfbchquopo@group.calendar.google.com&ctz=Europe/Madrid&pli=1"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className={`${SPACING.section} bg-secondary text-background opacity-100`}>
        <div className={`${SPACING.container} text-center`}>
          <h1 className="text-6xl md:text-7xl font-bold text-balance leading-tight font-display lg:text-6xl">
            {texts.home.hero.title}
          </h1>
        </div>
      </section>

      <main className="flex-1">
        {/* Hero Section */}
        <section className={`relative ${SPACING.sectionHero} bg-background`}>
          <div className={SPACING.container}>
            <div className={`grid lg:grid-cols-2 ${SPACING.contentGap} items-center`}>
              <div className={SPACING.itemsGap}>
                <h2
                  className={`text-5xl font-bold ${SPACING.smallMargin} text-balance font-display text-card md:text-5xl`}
                >
                  {texts.home.hero.heading}
                </h2>

                <p className="text-3xl text-pretty leading-relaxed text-card">{texts.home.hero.subtitle}</p>
                <p className="text-xl leading-relaxed text-card mb-2.5">{texts.home.hero.description}</p>

                <ul className="space-y-3">
                  {texts.home.hero.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-center">
                      <MeepleIcon className="h-8 w-8 text-accent shrink-0 mt-0.5" />
                      <span className="text-xl text-card">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xl leading-relaxed text-card mt-2.5 mb-10">{texts.home.hero.callToAction}</p>

                <div className="text-center">
                  <Button
                    size="lg"
                    asChild
                    className="text-2xl text-background rounded-full border-0 p-6 font-display bg-primary"
                  >
                    <a href="https://chat.whatsapp.com" target="_blank" rel="noopener noreferrer">
                      {texts.common.whatsappGroup}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="/board-game-club-event-with-people-playing-games.jpg"
                    alt={texts.home.hero.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* First Steps */}
        <section className={`${SPACING.section} text-primary-foreground bg-secondary text-center`}>
          <div className="inline-block">
            <h3 className="font-semibold font-display mb-9 text-5xl">{texts.home.firstSteps.title}</h3>
            <div className={SPACING.itemsGap}>
              {texts.home.firstSteps.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center text-center flex-row justify-start leading-7 tracking-wider"
                >
                  <div className="flex-shrink-0 rounded-full bg-primary-foreground text-primary flex items-center justify-center font-bold text-2xl size-8">
                    {index + 1}
                  </div>
                  <p className="leading-relaxed text-center pt-0 text-2xl">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className={`${SPACING.section} mx-auto px-4 bg-accent text-center`}>
          <h2
            className={`text-5xl md:text-6xl font-bold ${SPACING.paragraphMargin} text-balance font-display text-primary`}
          >
            {texts.home.calendar.title}
          </h2>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=700&wkst=2&ctz=Europe%2FLondon&showPrint=0&showTz=0&showCalendars=0&showTitle=0&src=OWI0MWUxYzJjMTRlYjFiNjkwYzkyNWI3NWQyMDg1ODg3ZDkxMjkzZDIxMmMwNjdmMzRlNDMwNTVlYzFlNjBiZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23ad1457"
            height="700"
            className="w-full"
            scrolling="no"
          ></iframe>
          <p className="text-2xl text-left">{texts.home.calendar.note}</p>
        </section>

        {/* Instagram Gallery */}
        <section className={`${SPACING.section} bg-background text-card`}>
          <div className={SPACING.container}>
            <h2
              className={`text-5xl md:text-6xl font-bold ${SPACING.subheadingMargin} text-center text-balance font-display`}
            >
              {texts.home.instagram.title}
            </h2>
            <div className={`grid grid-cols-2 md:grid-cols-3 ${SPACING.smallGap}`}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden bg-muted">
                  <img
                    src={`/board-games-event-photo-.jpg?height=400&width=400&query=board games event photo ${i}`}
                    alt={`${texts.home.instagram.imageAlt} ${i}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className={`${SPACING.section} bg-accent`}>
          <div className={SPACING.container}>
            <div className={SPACING.maxWidthNarrow}>
              <h2
                className={`text-5xl md:text-6xl font-bold ${SPACING.subheadingMargin} text-center text-balance font-display text-primary`}
              >
                {texts.home.faq.title}
              </h2>

              <Accordion type="single" collapsible className="space-y-4 text-card">
                {texts.home.faq.items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index + 1}`}
                    className="rounded-lg px-6 border-0 bg-background text-card"
                  >
                    <AccordionTrigger className="text-xl text-left hover:no-underline font-display">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg leading-relaxed text-card">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${SPACING.section} bg-secondary text-background`}>
          <div className={`${SPACING.container} text-center`}>
            <h2 className={`text-5xl md:text-6xl font-bold ${SPACING.smallMargin} text-balance font-display`}>
              {texts.home.cta.title}
            </h2>
            <p className={`text-xl ${SPACING.subheadingMargin} text-background`}>{texts.home.cta.subtitle}</p>
            <div className="text-center">
              <Button
                size="lg"
                asChild
                className="text-2xl rounded-full border-0 p-6 font-display bg-background text-secondary font-bold"
              >
                <a href="https://chat.whatsapp.com" target="_blank" rel="noopener noreferrer">
                  {texts.home.cta.button}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
