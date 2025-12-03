import { VariableNode } from '@/extensions/VariableNode';
import { VariableSuggestion } from '@/extensions/VariableSuggestion';
import { JSONContent } from '@tiptap/core';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';
import { EditorToolbar } from './EditorToolbar';

interface VariableEditorProps {
  content?: string;
  placeholder?: string;
  onChange?: (json: JSONContent) => void;
  editable?: boolean;
}

export function VariableEditor({
  content = '',
  placeholder = 'Type { to insert a variable...',
  onChange,
  editable = true,
}: VariableEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        codeBlock: false,
        horizontalRule: false,
        blockquote: false,
        bulletList: false,
        orderedList: false,
        listItem: false,
      }),
      Placeholder.configure({
        placeholder,
      }),
      VariableNode,
      VariableSuggestion,
    ],
    content,
    editable,
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose-base max-w-none min-h-[200px] px-3 py-2 text-base placeholder:text-muted-foreground focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getJSON());
      }
    },
  });

  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className='w-full border border-border rounded-md shadow-sm ring-2 ring-muted overflow-hidden'>
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
