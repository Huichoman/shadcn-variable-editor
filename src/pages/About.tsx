import { useIntlayer } from 'react-intlayer';

const About = () => {
  const { aboutUs, description } = useIntlayer('about');

  return (
    <div>
      <h1 className='text-3xl font-bold'>{aboutUs}</h1>
      <p className='mt-4'>{description}</p>
    </div>
  );
};

export default About;
