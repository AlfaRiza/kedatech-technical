import PricingCard from "../PricingCard"

const PricingSection = () => {
  const dataPricing = [
    {
      title: 'Tier 1/Basic',
      content: ['Mencatat barang masuk', 'Mencatat barang keluar', 'Mencatat hasil keuntungan']
    },
    {
      title: 'Tier 2/Business',
      content: ['Mencatat barang masuk dan keluar', 'Mencatat Keuntungan', 'Dapat menganalisa hasil penjualan dengan CHART', 'Support 7x24 Jam']
    },
    {
      title: 'Tier 3/Entrepreneur',
      content: ['Mencatat barang masuk dan keluar', 'Mencatat Keuntungan', 'Dapat menganalisa hasil penjualan dengan CHART', 'Support 7x24 Jam', 'Export data ke Excel', 'AI Prediksi penghasilan']
    }
  ]
  return (
    <div id="pricing" className='bg-primary py-20'>
      <h1 className="text-center text-6xl text-tersier pb-10">Pricing</h1>
      <div className="flex flex-col md:flex-row justify-center gap-x-10">
        {
          dataPricing.map((data, index) => {
            return (
              <PricingCard type={index === 1 ? 'primary': 'normal'} title={data.title} content={data.content} />
            )
          })
        }
      </div>
    </div>
  )
}

export default PricingSection
