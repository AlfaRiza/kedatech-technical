import PeopleDataIcon from '../../assets/icon/peopleDataIcon'
import './style.css'

const HeroSection = () => {
  return (
    <div className='hero-container bg-primary flex flex-col md:flex-row'>
      <div className='hidden md:block'>
        <PeopleDataIcon />
      </div>
      <div className='m-auto text-white'>
        <h1 className='text-5xl text-tersier'>Percayakan Masalah Anda kepada kami</h1>
        <span className='text-base text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui necessitatibus obcaecati distinctio culpa possimus accusamus</span>
      </div>
    </div>
  )
}

export default HeroSection
