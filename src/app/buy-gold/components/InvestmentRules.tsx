import Image from 'next/image'
import { Accordion,  AccordionContent,
    AccordionItem,
    AccordionTrigger, } from '@radix-ui/react-accordion'
import { CheckCircle } from 'lucide-react'

const essentials = [
  "Gold has essentially retained its purchasing power throughout human history",
  "Gold should primarily serve as asset protection, not as a return",
  "Investment advisors recommend: Invest 5-15% of your total assets in gold",
  "Whether coins or bars, that depends on personal preferences",
  "If you use the cost average effect, the time of purchase is always right"
]

const rules = [
  {
    title: "1st rule: Gold is used for hedging, not for quick returns",
    content: "Gold serves as a long-term hedge against economic uncertainty and inflation."
  },
  {
    title: "2nd rule: Invest 5-15% of your personal assets in gold",
    content: "Don't put everything on one horse. You can spread risks by using different asset classes. This is called diversification of the asset portfolio. Investment experts therefore unanimously recommend investing between 5-15% of your total assets in gold. The exact proportion can vary greatly from person to person. That depends on your personal life situation."
  },
  {
    title: "3rd rule: The best way to buy gold is with GoldPro",
    content: "GoldPro offers secure and reliable gold investment options."
  },
  {
    title: "4th rule: Only physical gold is really gold",
    content: "Physical gold provides tangible security and true ownership."
  },
  {
    title: "5th rule: Use the cost average effect",
    content: "Regular small purchases can help average out price fluctuations over time."
  }
]

export default function InvestmentRules() {
  return (
    <section className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="font-semibold mb-4">The Essentials in Brief</h2>
          <ul className="space-y-3">
            {essentials.map((essential, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">{essential}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            5 Rules That Make Every
            <br />
            Gold Investment Successful
          </h1>

          <Accordion type="single" collapsible className="w-full">
            {rules.map((rule, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {rule.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{rule.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden">
          <Image
            src="/goldCart.png"
            alt="Gold bars on wooden surface"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </div>
    </section>
  )
}

