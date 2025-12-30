import Image from "next/image"
import Link from "next/link"

export default function Logo() {
    return (
        <Link href={"/"}>
        <Image src={"/logo.png"} alt="Logo" width={100} height={100} className="w-20 h-20 cursor-pointer" />
        </Link>
    )
}