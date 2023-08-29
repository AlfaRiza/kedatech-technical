declare interface CardInterface {
  title: string
  description: string
}

const Card = ({ description, title }: CardInterface) => {
  return (
    <div className='border border-secondary rounded-xl w-full md:w-96 drop-shadow-md h-60 px-5'>
    <h1 className='text-2xl mb-10 text-center'>{ title }</h1>
    <div className='text-sm mb-10 text-left'>
      { description }
    </div>
  </div>
  )
}

export default Card
