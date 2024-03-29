import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Product = (props: Props) => {
  return (
    <div className="container-base">
      <main>
        <section>
          <div>
            <ul className="flex py-5">
              <li><Link href="/">Trang chủ</Link></li> <span className="px-3 ">/</span>
              <li><Link href="/">Tất cả sản phẩm</Link></li>
            </ul>
          </div>
          <h1 className="text-3xl font-sans font-semibold pt-50">Tất cả sản phẩm</h1>
        </section>
        <section className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-2 md:grid-clos-3 lg:grid-cols-4 gap-4">
            <div className="group ">
              <div className="relative bg-[#f7f7f7] overflow-hidden border mt-10">
                <img src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/20.jpg?v=1608880067000" alt="" />
                <button className="absolute w-full bottom-0 h-9 bg-primary text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                  Xem nhanh
                </button>
              </div>
              <div className="text-center py-3">
              <a className="block font-semibold text-xl" href="">
                  Hồng trà macchiato
                </a>
                <span className="font-semibold text-xl"><span className="font-semibold text-lg">Giá </span>:25.000₫ </span>
              </div>
            </div>      
            <div className="group ">
              <div className="relative bg-[#f7f7f7] overflow-hidden border mt-10">
                <img src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/20.jpg?v=1608880067000" alt="" />
                <button className="absolute w-full bottom-0 h-9 bg-primary text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                  Xem nhanh
                </button>
              </div>
              <div className="text-center py-3">
              <a className="block font-semibold text-xl" href="">
                  Hồng trà macchiato
                </a>
                <span className="font-semibold text-xl"><span className="font-semibold text-lg">Giá </span>:25.000₫ </span>
              </div>
            </div>     
            <div className="group ">
              <div className="relative bg-[#f7f7f7] overflow-hidden border mt-10">
                <img src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/20.jpg?v=1608880067000" alt="" />
                <button className="absolute w-full bottom-0 h-9 bg-primary text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                  Xem nhanh
                </button>
              </div>
              <div className="text-center py-3">
              <a className="block font-semibold text-xl" href="">
                  Hồng trà macchiato
                </a>
                <span className="font-semibold text-xl"><span className="font-semibold text-lg">Giá </span>:25.000₫ </span>
              </div>
            </div>     
            <div className="group ">
              <div className="relative bg-[#f7f7f7] overflow-hidden border mt-10">
                <img src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/20.jpg?v=1608880067000" alt="" />
                <button className="absolute w-full bottom-0 h-9 bg-primary text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                  Xem nhanh
                </button>
              </div>
              <div className="text-center py-3">
              <a className="block font-semibold text-xl" href="">
                  Hồng trà macchiato
                </a>
                <span className="font-semibold text-xl"><span className="font-semibold text-lg">Giá </span>:25.000₫ </span>
              </div>
            </div>     
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div></div>
            <ul className="flex px-20 py-10">
              <li className="border-2 flex items-center justify-center p-2 m-4  w-9 h-8 text-center hover:bg-[#4d8a54]  hover:text-white"><Link href="/">1</Link></li>
              <li className="border-2 flex items-center justify-center p-2 m-4 w-9 h-8 text-center hover:bg-[#4d8a54]  hover:text-white "><Link href="/">2</Link></li>
              <li className="border-2 flex items-center justify-center p-2 m-4 w-9 h-8 text-center hover:bg-[#4d8a54]  hover:text-white"><Link href="/">3</Link></li>
              <li className="border-2 flex items-center justify-center p-2 m-4 w-9 h-8 text-center hover:bg-[#4d8a54]  hover:text-white"><Link href="/">4</Link></li>
              <li className="border-2 flex items-center justify-center p-2 m-4 w-9 h-8 text-center hover:bg-[#4d8a54]  hover:text-white"><Link href="/">5</Link></li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Product;
