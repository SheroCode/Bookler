function ProfileCard() {
  return (
    <>
      <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm '>
        <div className='py-4 px-4  bg-gray-100 mb-6'>
          <p className='font-bold text-gray-800'>Profile</p>
        </div>
        <div className='flex flex-col items-center pb-10'>
          <img
            className='w-24 h-24 mb-3 rounded-full shadow-lg'
            src='/docs/images/people/profile-picture-3.jpg'
            alt='Bonnie image'
          />
          <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
            Bonnie Green
          </h5>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            Visual Designer
          </span>
          <div className='flex mt-4 md:mt-6'>
            <a
              href='#'
              className='py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-100 rounded-2xl  hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100  '>
              Edit Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
