import { ExternalLink } from 'lucide-react';
import { useIntlayer } from 'react-intlayer';

const About = () => {
  const { title, description, linkedinLabel } = useIntlayer('about');

  return (
    <div className='max-w-2xl space-y-6'>
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>{title}</h1>
        <p className='mt-4 text-muted-foreground leading-relaxed'>
          {description}
        </p>
      </div>

      <div>
        <a
          href='https://www.linkedin.com/in/rockbotico/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors'
        >
          <ExternalLink className='h-4 w-4' />
          {linkedinLabel}
        </a>
      </div>
    </div>
  );
};

export default About;
