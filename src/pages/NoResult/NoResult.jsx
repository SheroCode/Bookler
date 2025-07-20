import noresult from "../../assets/images/noresult.png";
function NoResult() {
  return (
    <>
      <div className='flex flex-col items-center justify-between mt-20'>
        <img src={noresult} alt='notfound' />
        <p className='font-bold text-xl'>No Result Found</p>
      </div>
    </>
  );
}

export default NoResult;
