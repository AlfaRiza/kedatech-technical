import Button from "../Button"

declare interface PricingCardInterface {
  type: 'normal' | 'primary'
  title: string
  content: Array<string>
}

const PricingCard = ({ content, title, type }: PricingCardInterface) => {
  return (
    <div className={`border h-96 border-2 border-tersier md:w-80 p-2 rounded-xl flex gap-10 flex-col text-center drop-shadow-md ${type === 'primary' ? 'bg-tersier' : 'bg-secondary'}`}>
      <h2 className={`text-center text-2xl font-bold ${type === 'primary' ? 'text-white' : 'text-black'}`}>{ title }</h2>
      <ol className={`relative flex flex-col gap-3 ${type === 'primary' ? 'text-white' : 'text-primary'}`}>
        {
          content.map(item => {
            return (
              <li>{ item }</li>
            )
          })
        }
      </ol>
        <div className="absolute bottom-2 left-0 right-0">
          <Button type="secondary" onClick={() => {}}>Try now</Button>
        </div>
    </div>
  )
}

export default PricingCard
