function HeaderBar({ title, total }) {
  return (
    <>
      <div className='my-5 bg-white py-4 px-3 rounded-2xl w-full'>
        <div className='text-sm text-gray-500 mb-2'>
          <span className='text-gray-700 font-medium text-md'>{title}</span>{" "}
          {total}
        </div>
      </div>
    </>
  );
}

export default HeaderBar;
