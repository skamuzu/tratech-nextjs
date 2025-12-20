import Image from "next/image"
import Link from "next/link"

export default function Logo() {
    return (
        <Link href={"/"}>
        <Image src={"/myLogo.png"} alt="Logo" width={100} height={100} className="w-25 h-25 cursor-pointer" />
        </Link>
    )
}