import { VariableEditor } from '@/components/editor/VariableEditor';
import { useState } from 'react';
import { useIntlayer } from 'react-intlayer';

const Home = () => {
  const { title, description } = useIntlayer('home');
  const [editorState, setEditorState] = useState<any>(null);

  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>{title}</h1>
        <p className='mt-3 text-muted-foreground leading-relaxed max-w-3xl'>
          {description}
        </p>
      </div>

      <div className='space-y-4'>
        <div>
          <VariableEditor
            placeholder='Type here... (Variables will appear as badges)'
            onChange={setEditorState}
          />
        </div>

        <div>
          <div className='flex items-center justify-between mb-3'>
            <h3 className='text-sm font-semibold text-foreground'>
              JSON Preview
            </h3>
            <span className='text-xs text-muted-foreground'>
              Real-time output
            </span>
          </div>
          <div className='relative rounded-lg border border-border bg-slate-950 shadow-lg overflow-hidden'>
            <div className='absolute top-0 left-0 right-0 h-8 bg-slate-900/50 border-b border-slate-800 flex items-center px-4'>
              <div className='flex gap-1.5'>
                <div className='w-3 h-3 rounded-full bg-red-500/80'></div>
                <div className='w-3 h-3 rounded-full bg-yellow-500/80'></div>
                <div className='w-3 h-3 rounded-full bg-green-500/80'></div>
              </div>
              <span className='ml-4 text-xs text-slate-400 font-mono'>
                editor.json
              </span>
            </div>
            <pre className='mt-8 p-4 text-xs overflow-auto max-h-[300px] text-slate-100 font-mono'>
              {editorState
                ? JSON.stringify(editorState, null, 2)
                : '{\n  "type": "doc",\n  "content": []\n}'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
