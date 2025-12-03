import { VariableNodeView } from '@/components/editor/VariableNodeView';
import { mergeAttributes, Node } from '@tiptap/core';
import { Node as ProseMirrorNode } from '@tiptap/pm/model';
import { PluginKey } from '@tiptap/pm/state';
import { ReactNodeViewRenderer } from '@tiptap/react';

export interface VariableOptions {
  HTMLAttributes: Record<string, unknown>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    variable: {
      setVariable: (attributes: { id: string; label: string }) => ReturnType;
    };
  }
}

export const VariablePluginKey = new PluginKey('variable');

export const VariableNode = Node.create<VariableOptions>({
  name: 'variable',

  group: 'inline',

  inline: true,

  selectable: true,

  atom: true,

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      id: {
        default: null,
        parseHTML: element => element.getAttribute('data-id'),
        renderHTML: attributes => {
          if (!attributes.id) {
            return {};
          }
          return {
            'data-id': attributes.id,
          };
        },
      },
      label: {
        default: null,
        parseHTML: element => element.getAttribute('data-label'),
        renderHTML: attributes => {
          if (!attributes.label) {
            return {};
          }
          return {
            'data-label': attributes.label,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: `span[data-type="${this.name}"]`,
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    return [
      'span',
      mergeAttributes(
        { 'data-type': this.name },
        this.options.HTMLAttributes,
        HTMLAttributes,
        {
          class:
            'inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 cursor-pointer hover:bg-primary/20 transition-colors',
        }
      ),
      `{${node.attrs.label}}`,
    ];
  },

  renderText({ node }: { node: ProseMirrorNode }) {
    return `{${node.attrs.label}}`;
  },

  addNodeView() {
    return ReactNodeViewRenderer(VariableNodeView);
  },

  addCommands() {
    return {
      setVariable:
        attributes =>
        ({ chain }) => {
          return chain()
            .focus()
            .insertContent([
              {
                type: this.name,
                attrs: attributes,
              },
              {
                type: 'text',
                text: ' ',
              },
            ])
            .run();
        },
    };
  },
});
