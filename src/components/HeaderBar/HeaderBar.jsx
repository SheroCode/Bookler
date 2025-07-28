function HeaderBar({ title, total }) {
  return (
    <>
      <div className='my-5 bg-white py-4 px-3 rounded-2xl w-full'>
        <span className='text-gray-700 font-medium text-md'>{title}</span>{" "}
        <span className='text-sm text-gray-500 '>{total}</span>
      </div>
    </>
  );
}

export default HeaderBar;
