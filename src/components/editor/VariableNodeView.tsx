import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { AVAILABLE_VARIABLES } from '@/data/variables';
import { NodeViewProps, NodeViewWrapper } from '@tiptap/react';
import { Copy, Info, Trash2 } from 'lucide-react';
import { useIntlayer } from 'react-intlayer';

export function VariableNodeView({ node, deleteNode }: NodeViewProps) {
  const { id, label } = node.attrs;
  const variableInfo = AVAILABLE_VARIABLES.find(v => v.id === id);
  const content = useIntlayer('variable-editor');

  const handleCopy = () => {
    navigator.clipboard.writeText(`{${label}}`);
  };

  const handleDelete = () => {
    deleteNode();
  };

  return (
    <NodeViewWrapper as='span' className='inline' contentEditable={false}>
      <Popover>
        <PopoverTrigger asChild>
          <span
            className='inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 cursor-pointer hover:bg-primary/20 transition-colors'
            contentEditable={false}
          >
            {`{${label}}`}
          </span>
        </PopoverTrigger>

        <PopoverContent align='start' className='w-72 p-4'>
          <div className='space-y-3'>
            <div>
              <div className='font-medium text-sm'>{label}</div>
              {variableInfo?.categoryKey && (
                <div className='text-xs text-muted-foreground mt-1'>
                  {
                    content[
                      variableInfo.categoryKey as keyof typeof content
                    ] as string
                  }
                </div>
              )}
            </div>

            {variableInfo?.descriptionKey && (
              <>
                <Separator />
                <p className='text-xs text-muted-foreground'>
                  {
                    content[
                      variableInfo.descriptionKey as keyof typeof content
                    ] as string
                  }
                </p>
              </>
            )}

            <Separator />

            <div className='flex flex-col gap-2'>
              <Button
                variant='outline'
                size='sm'
                onClick={handleCopy}
                className='w-full justify-start'
              >
                <Copy className='mr-2 h-4 w-4' />
                {content.copyVariable}
              </Button>

              <Button
                variant='outline'
                size='sm'
                onClick={handleDelete}
                className='w-full justify-start text-destructive hover:text-destructive'
              >
                <Trash2 className='mr-2 h-4 w-4' />
                {content.deleteVariable}
              </Button>
            </div>

            <div className='flex items-start gap-2 text-xs text-muted-foreground pt-2 border-t'>
              <Info className='h-3 w-3 mt-0.5 flex-shrink-0' />
              <span>{content.variableInfo}</span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </NodeViewWrapper>
  );
}
