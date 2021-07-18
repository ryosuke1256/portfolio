import Service from '../components/molecules/Service';

export default function Home() {
  return (
    <>
      <p className="pb-2">Hi,this is my portfolio site</p>
      <Service serviceName={'はぴたす'} url={'/images/hapitasu.png'} href={'https://todo-check-app.com/'} alt={'はぴたすのアイコン'} />
      <Service serviceName={'シンプルクイズ'} url={'/images/simpleQuiz.png'} href={'https://quiz-react-typescript.web.app/'} alt={'シンプルクイズのアイコン'} />
    </>
  );
}
