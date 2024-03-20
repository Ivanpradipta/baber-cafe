import bg from "../Assets/background.png";
import footer from "../Assets/footer.png";
import { useState, useEffect } from "react";
import axios from "axios";

export default function LandingPage() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.gudang-morina.my.id/api/menus");
        if (Array.isArray(response.data.Menus)) {
          setDataList(response.data.Menus);
        } else {
          console.error("Data received from API is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {/* Section: Design Block */}
      <section className="mb-40">
        {/* Navbar */}
        <nav className="relative flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start" data-te-navbar-ref="">
          {/* Container wrapper */}
          <div className="flex w-full flex-wrap items-center justify-between px-6">
            <div className="flex items-center">
              {/* Toggle button */}
              <button
                className="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button"
                data-te-collapse-init=""
                data-te-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="[&>svg]:w-7">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              {/* Navbar brand */}
              <h3 className="text-primary dark:text-red-600" href="#!">
                <span className="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">Bahagia Bersama</span>
              </h3>
            </div>
            {/* Collapsible wrapper */}
            <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContentY" data-te-collapse-item="">
              {/* Left links */}
              <ul className="mr-auto lg:flex lg:flex-row" data-te-navbar-nav-ref="">
                <li data-te-nav-item-ref="">
                  <a
                    className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                    href="#!"
                    data-te-nav-link-ref=""
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                    disabled=""
                  >
                    Home
                  </a>
                </li>
                <li data-te-nav-item-ref="">
                  <a
                    className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                    href="#!"
                    data-te-nav-link-ref=""
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li className="mb-2 lg:mb-0" data-te-nav-item-ref="">
                  <a
                    className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                    href="https://drive.google.com/drive/folders/1ORhzixMgk_RUMusoT8_h8P_1WSEF2zWd"
                    data-te-nav-link-ref=""
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                  >
                    Menu
                  </a>
                </li>
              </ul>
              {/* Left links */}
            </div>
            {/* Collapsible wrapper */}
            {/* Right elements */}

            {/* Right elements */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
        {/* Jumbotron */}
        <div className=" py-24 px-6 text-center dark:bg-neutral-900 h-[900px]" style={{ backgroundImage: `url(https://api.gudang-morina.my.id/storage/menu-images/bahber_bg.png)`, backgroundRepeat: "no-repeat", backgroundSize: "100%" }}>
          <h1 className="mt-2 mb-16 text-5xl text-green-900 font-bold tracking-tight md:text-6xl xl:text-7xl">
            Bahagia Bersama Cafe <br />
            <span className="text-yellow-700">Semua Bisa Bahagia</span>
          </h1>

          <a
            className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
            data-te-ripple-init=""
            data-te-ripple-color="light"
            href="#!"
            role="button"
          >
            Learn more
          </a>
        </div>
        {/* Jumbotron */}
      </section>
      <section className="video-sec-area pb-[10rem]" id="about">
        <div className="container justify-center items-center flex">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5rem] items-center pl-[200px]">
            <div className="video-right justify-center items-center relative flex">
              <div className="overlay overlay-bg absolute inset-0 bg-black opacity-50 rounded-lg" />
              <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <img src="https://api.gudang-morina.my.id/storage/menu-images/asset_bahber.png" alt="" />
              </div>
            </div>
            <div className="video-left">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-green-900">
                <span className="text-red-500">Tentang</span> Kami
              </h1>

              <p className="mb-8">
                Dekorasi dan juga warna menggunakan konsep retro & vintage. Penggunaan material alami seperti kayu dan batu menciptakan suasana yang hangat dan nyaman, kemudian memanfaatkan barang - barang bekas yang dapat di daur ulang
                yang kemudian di jadikan interior hingga eksterior. Desain Coffee Shop mencakup berbagai pilihan tempat duduk, seperti sudut yang nyaman dan meja komunal, untuk mengakomodasi ukuran dan preferensi kelompok yang berbeda.
                Biasanya Coffee Shop tidak jauh dari unsur musik. Alunan musik menemani pikiran para pengunjung dikala sedang bekerja di coffee shop, bercengkarama atau hanya sekadar merasakan suasana. Bahagia Bersama Kopi juga menemani
                pikiran pelanggan dengan musik tempo doloe yang juga sebagai pendukung suasana dan konsep tempat
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-32 text-center">
        <h2 className="text-amber-200 mb-12 pb-4 text-center text-3xl font-bold">Menu Andalan</h2>
        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12 ">
          {dataList.map((item, index) => (
            <div key={index} className="mb-6 lg:mb-0">
              <div className="pt-[30px] relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex">
                  <div className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init="" data-te-ripple-color="light">
                    <img src={`https://api.gudang-morina.my.id/storage/${item.item_image}`} className="w-[500px] h-[350px]" alt="Item Image" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-3 text-lg font-bold">{item.item_name}</h5>
                  <p className="mb-4 text-neutral-500 dark:text-neutral-300"></p>
                  <p className="mb-4 pb-2">{item.item_description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <>
        <footer className="flex flex-col items-center text-center text-surface  text-neutral-50" style={{ backgroundImage: `url(${footer})` }}>
          <div className="container px-6 pt-6">
            {/* Social media icons container */}
            <div className="mb-6 flex justify-center space-x-2">
              <a
                href="#!"
                type="button"
                className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5"></span>
              </a>
              <a
                href="#!"
                type="button"
                className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
              </a>
              <a
                href="#!"
                type="button"
                className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 488 512">
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </span>
              </a>
              <a
                href="#!"
                type="button"
                className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </a>
              <a
                href="#!"
                type="button"
                className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </a>
              <a
                href="#!"
                type="button"
                className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </span>
              </a>
            </div>
            {/* Newsletter sign-up form */}
            <div>
              <form action="">
                <div className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                  <div className="md:mb-6 md:ms-auto">
                    <p>
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>
                  {/* Newsletter sign-up input field */}
                  <div className="relative md:mb-6" data-twe-input-wrapper-init="">
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInputEmail"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="exampleFormControlInputEmail"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >
                      Email address
                    </label>
                  </div>
                  {/* Newsletter sign-up submit button */}
                  <div className="mb-6 md:me-auto">
                    <button
                      type="submit"
                      className="inline-block rounded px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                      data-twe-ripple-init=""
                      data-twe-ripple-color="light"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* Copyright information */}
            <div className="mb-6">
              <p>Info Kita</p>
            </div>
            {/* Links section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 text-red-50">
              <div className="mb-6">
                <h5 className="mb-2.5 font-bold uppercase">Lokasi</h5>
                <ul className="mb-0 list-none">
                  <li>
                    <a href="#!">Manahan</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h5 className="mb-2.5 font-bold uppercase">Links</h5>
                <ul className="mb-0 list-none">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h5 className="mb-2.5 font-bold uppercase">Links</h5>
                <ul className="mb-0 list-none">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Copyright section */}
          <div className="w-full bg-black/5 p-4 text-center">
            <a className="font-semibold" href="https://tw-elements.com/">
              Bahber Cafe
            </a>
          </div>
        </footer>
      </>
    </>
  );
}
