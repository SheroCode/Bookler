function BestOffer({ bestOffer }) {
  return (
    <>
      <div className='bg-gray-100 rounded-full flex lg:w-90   w-full  p-3  gap-3 items-center '>
        <img src={bestOffer.image} alt='' className='rounded-full w-12 h-12' />
        <div>
          <h2 className='font-bold'>{bestOffer.name}</h2>
          <p className='text-gray-600'>{bestOffer.location}</p>
        </div>
      </div>
    </>
  );
}

export default BestOffer;
