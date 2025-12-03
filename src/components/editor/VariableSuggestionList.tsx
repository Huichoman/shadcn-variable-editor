import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Variable } from '@/data/variables';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { useIntlayer } from 'react-intlayer';

export interface SuggestionProps {
  items: Variable[];
  command: (item: Variable) => void;
}

export interface SuggestionRef {
  onKeyDown: (props: { event: KeyboardEvent }) => boolean;
}

export const VariableSuggestionList = forwardRef<
  SuggestionRef,
  SuggestionProps
>((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const content = useIntlayer('variable-editor');

  const selectItem = (index: number) => {
    const item = props.items[index];
    if (item) {
      props.command(item);
    }
  };

  const upHandler = () => {
    setSelectedIndex(
      (selectedIndex + props.items.length - 1) % props.items.length
    );
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [props.items]);

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }: { event: KeyboardEvent }) => {
      if (event.key === 'ArrowUp') {
        upHandler();
        return true;
      }

      if (event.key === 'ArrowDown') {
        downHandler();
        return true;
      }

      if (event.key === 'Enter') {
        enterHandler();
        return true;
      }

      return false;
    },
  }));

  return (
    <div className='z-50 w-72 rounded-md border bg-popover shadow-md animate-in fade-in-0 zoom-in-95'>
      <Command>
        <CommandList>
          <CommandEmpty className='py-6 text-center text-sm'>
            No variables found.
          </CommandEmpty>
          <CommandGroup>
            {props.items.map((item, index) => (
              <CommandItem
                key={item.id}
                value={item.id}
                onSelect={() => selectItem(index)}
                className={
                  index === selectedIndex
                    ? 'bg-accent aria-selected:bg-accent'
                    : ''
                }
              >
                <div className='flex flex-col'>
                  <span className='font-medium'>{item.label}</span>
                  <span className='text-xs text-muted-foreground'>
                    {
                      content[
                        item.descriptionKey as keyof typeof content
                      ] as string
                    }
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
});

VariableSuggestionList.displayName = 'VariableSuggestionList';
