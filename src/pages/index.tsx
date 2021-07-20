import Service from '../components/molecules/Service';

export default function Home() {
  return (
    <div>
      <div className="inline-block">
        <p className="pb-16">Hi,this is my portfolio site</p>
        <div className="text-center">
          <Service serviceName={'はぴたす'} url={'/images/hapitasu.png'} href={'https://todo-check-app.com/'} alt={'はぴたすのアイコン'} />
          <Service serviceName={'シンプルクイズ'} url={'/images/simpleQuiz.png'} href={'https://quiz-react-typescript.web.app/'} alt={'シンプルクイズのアイコン'} />
        </div>
      </div>
    </div>
  );
}
