import {
  SuggestionProps as ComponentSuggestionProps,
  SuggestionRef,
  VariableSuggestionList,
} from '@/components/editor/VariableSuggestionList';
import { AVAILABLE_VARIABLES, Variable } from '@/data/variables';
import { Editor, Range } from '@tiptap/core';
import Mention from '@tiptap/extension-mention';
import { ReactRenderer } from '@tiptap/react';
import { SuggestionKeyDownProps, SuggestionProps } from '@tiptap/suggestion';
import tippy, {
  GetReferenceClientRect,
  Instance as TippyInstance,
} from 'tippy.js';

export const VariableSuggestion = Mention.extend({
  name: 'variableMention',
}).configure({
  HTMLAttributes: {
    class: 'variable-mention hidden',
  },
  renderText() {
    return ``;
  },
  suggestion: {
    char: '{',
    allowSpaces: true,
    items: ({ query }: { query: string }): Variable[] => {
      return AVAILABLE_VARIABLES.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 10);
    },
    render: () => {
      let component: ReactRenderer<SuggestionRef, ComponentSuggestionProps>;
      let popup: TippyInstance[];
      let noMatchCount = 0;

      return {
        onStart: (props: SuggestionProps) => {
          noMatchCount = 0;
          component = new ReactRenderer(VariableSuggestionList, {
            props,
            editor: props.editor,
          });

          if (!props.clientRect) {
            return;
          }

          popup = tippy('body', {
            getReferenceClientRect: props.clientRect as GetReferenceClientRect,
            appendTo: () => document.body,
            content: component.element,
            showOnCreate: true,
            interactive: true,
            trigger: 'manual',
            placement: 'bottom-start',
          });
        },

        onUpdate(props: SuggestionProps) {
          component.updateProps(props);

          if (!props.clientRect) {
            return;
          }

          if (props.items.length === 0) {
            noMatchCount++;

            if (noMatchCount >= 2) {
              popup[0].hide();
              setTimeout(() => {
                popup[0].destroy();
                component.destroy();
              }, 100);
              return;
            }
          } else {
            noMatchCount = 0;
          }

          popup[0].setProps({
            getReferenceClientRect: props.clientRect as GetReferenceClientRect,
          });
        },

        onKeyDown(props: SuggestionKeyDownProps) {
          if (props.event.key === 'Escape') {
            popup[0].hide();
            return true;
          }

          return component.ref?.onKeyDown(props) ?? false;
        },

        onExit() {
          popup[0].destroy();
          component.destroy();
        },
      };
    },
    command: ({
      editor,
      range,
      props,
    }: {
      editor: Editor;
      range: Range;
      props: { id?: string | null; label?: string | null };
    }) => {
      if (!props.id || !props.label) return;

      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setVariable({
          id: props.id,
          label: props.label,
        })
        .run();
    },
  },
});
