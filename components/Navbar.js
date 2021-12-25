export default function Navbar() {
  return (
    <nav className="text-center items-center justify-between flex-wrap bg-teal-500 p-0.5 sticky top-0 z-50">
      <div className="items-center flex-shrink-0 text-black text-center">
        <button onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }}>
          <h1 className="text-5xl font-bold my-10 text-center">Spacestagram.</h1>
        </button>
      </div>
    </nav>
  );
}
