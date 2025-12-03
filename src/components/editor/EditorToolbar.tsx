import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { AVAILABLE_VARIABLES, Variable } from '@/data/variables';
import { Editor } from '@tiptap/core';
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';
import { useIntlayer } from 'react-intlayer';

interface EditorToolbarProps {
  editor: Editor | null;
}

export function EditorToolbar({ editor }: EditorToolbarProps) {
  const [open, setOpen] = useState(false);
  const content = useIntlayer('variable-editor');

  if (!editor) {
    return null;
  }

  const handleInsertVariable = (variable: Variable) => {
    editor
      .chain()
      .focus()
      .setVariable({
        id: variable.id,
        label: variable.label,
      })
      .run();
    setOpen(false);
  };

  const categorizedVariables = AVAILABLE_VARIABLES.reduce(
    (acc, variable) => {
      const categoryKey = variable.categoryKey;
      if (!acc[categoryKey]) {
        acc[categoryKey] = [];
      }
      acc[categoryKey].push(variable);
      return acc;
    },
    {} as Record<string, Variable[]>
  );

  return (
    <div className='flex items-center gap-2 p-2 border-b border-border bg-muted/30'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant='default' size='sm' className='gap-2'>
            <PlusCircle className='h-4 w-4' />
            {content.insertVariable}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-80 p-0' align='start'>
          <Command>
            <CommandList>
              <CommandEmpty>{content.noVariablesFound}</CommandEmpty>
              {Object.entries(categorizedVariables).map(
                ([categoryKey, variables]) => (
                  <CommandGroup
                    key={categoryKey}
                    heading={
                      content[categoryKey as keyof typeof content] as string
                    }
                  >
                    {variables.map(variable => (
                      <CommandItem
                        key={variable.id}
                        value={variable.id}
                        onSelect={() => handleInsertVariable(variable)}
                        className='cursor-pointer'
                      >
                        <div className='flex flex-col'>
                          <span className='font-medium'>{variable.label}</span>
                          <span className='text-xs text-muted-foreground'>
                            {
                              content[
                                variable.descriptionKey as keyof typeof content
                              ] as string
                            }
                          </span>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className='flex-1' />
      <span className='text-xs text-muted-foreground'>
        {content.tipText}{' '}
        <kbd className='px-1.5 py-0.5 text-xs font-semibold border rounded bg-muted'>
          {'{'}
        </kbd>{' '}
        {content.tipAction}
      </span>
    </div>
  );
}
