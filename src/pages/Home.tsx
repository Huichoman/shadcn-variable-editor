import { useIntlayer } from 'react-intlayer';

const Home = () => {
  const { welcome, description } = useIntlayer('home');

  return (
    <div>
      <h1 className='text-3xl font-bold'>{welcome}</h1>
      <p className='mt-4'>{description}</p>
    </div>
  );
};

export default Home;
