const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-primary text-secondary flex justify-center items-center text-center h-20">
      Copyright © { date } PT. ERP Startup - All In One ERP Solutions
    </div>
  )
}

export default Footer
