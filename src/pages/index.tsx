import Portfolio from '../components/organisms/Portfolio';
import { Text } from '../constants/Text';
import { Services } from '../constants/Services';

export default function Home() {
  return (
    <>
      <p className="pb-16 w-full block break-words">{Text.portfolioIntro}</p>
      <div className="text-center">
        <Portfolio serviceName={Services.hapitasu.name} url={Services.hapitasu.url} href={Services.hapitasu.href} alt={Services.hapitasu.alt} />
        <Portfolio serviceName={Services.quiz.name} url={Services.quiz.url} href={Services.quiz.href} alt={Services.quiz.alt} />
      </div>
    </>
  );
}
