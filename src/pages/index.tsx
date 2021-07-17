import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>Hi,this is my portfolio site</div>
      <br />
      <Link href="about">
        <a>about page</a>
      </Link>
      <br />
      <Link href="contact">
        <a>contact page</a>
      </Link>
    </>
  );
}
