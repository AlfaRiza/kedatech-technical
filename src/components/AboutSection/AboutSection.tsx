import Card from '../Card'
import Container from '../Container'

const AboutSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-20'>
      <div id='about' className='flex justify-center bg-primary w-screen md:w-full pt-20'>
        <Container>
          <h1 className='text-4xl text-tersier mb-10'>About</h1>
          <div className='text-base text-secondary'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt harum inventore natus! Ad dicta aliquid earum itaque est pariatur natus molestiae optio mollitia maxime. Repudiandae veritatis dolores ea explicabo.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit mollitia id dolores earum sequi praesentium, nobis, nam repudiandae, dolore esse dignissimos nulla odit itaque minus necessitatibus. Ipsam ipsa consequatur vitae?
          </div>
        </Container>
      </div>
      <div className='flex justify-center w-full rounded item-center text-center md:col-span-1 md:col-span-2 my-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-20 grid-rows-2'>
            <Card title='Visi' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequatur recusandae debitis maiores dignissimos nihil necessitatibus soluta quam harum. Magnam quo dignissimos accusamus vel doloremque labore rerum reprehenderit ad impedit!' />
            <Card title='Misi' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequatur recusandae debitis maiores dignissimos nihil necessitatibus soluta quam harum. Magnam quo dignissimos accusamus vel doloremque labore rerum reprehenderit ad impedit!' />
          </div>
      </div>
    </div>
  )
}

export default AboutSection
