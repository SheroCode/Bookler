import notfound from "../../assets/images/404.png";
function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-between mt-20"> 
        <img src={notfound} alt='notfound' />
        <h2 className="font-bold text-8xl">404</h2>
        <p  className="font-bold text-xl">Page not Found</p>
      </div>
    </>
  );
}

export default NotFound;
