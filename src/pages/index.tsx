import Service from '../components/molecules/Service';
import { Text } from '../constants/Text';

export default function Home() {
  return (
    <>
      <p className="pb-16 w-full block break-words">{Text.portfolioIntro}</p>
      <div className="text-center">
        <Service serviceName={'はぴたす'} url={'/images/hapitasu.png'} href={'https://todo-check-app.com/'} alt={'はぴたすのアイコン'} />
        <Service serviceName={'シンプルクイズ'} url={'/images/simpleQuiz.png'} href={'https://quiz-react-typescript.web.app/'} alt={'シンプルクイズのアイコン'} />
      </div>
    </>
  );
}
