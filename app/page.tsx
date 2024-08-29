import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Link from "next/link";


export default function IndexPage() {
  return( 
    <main>
  <Counter />
  <Link  className='text-center underline text-blue-500 text-5xl'    href="/pizza">
    Go to Pizza Page
  </Link>
  </main> )
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
