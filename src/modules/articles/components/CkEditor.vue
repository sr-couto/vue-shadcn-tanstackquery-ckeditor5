<script>

import { useEditorStore } from "@/modules/articles/stores/useEditorStore";

import { storeToRefs } from 'pinia';
import translations from 'ckeditor5/translations/es.js';
import 'ckeditor5/ckeditor5.css';
import '@/modules/articles/components/CkEditor.css';
import ScrollArea from '@/modules/ui/scroll-area/ScrollArea.vue';

import {
  DecoupledEditor,
  AccessibilityHelp,
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  BalloonToolbar,
  BlockQuote,
  BlockToolbar,
  Bold,
  CloudServices,
  Code,
  CodeBlock,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  Heading,
  Highlight,
  HorizontalLine,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SelectAll,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Subscript,
  Superscript,
  TextTransformation,
  TodoList,
  Underline,
  Undo
} from 'ckeditor5';



const editor = useEditorStore();
const { editor_data } = storeToRefs(editor)


export default {
  name: 'App',
  components: {
    ScrollArea
  },
  props: {
    toolbar: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isLayoutReady: false,
      config: null, // CKEditor needs the DOM tree before calculating the configuration.
      editor: DecoupledEditor
    };
  },
  mounted() {
    this.config = {
      toolbar: {
        items: [
          'AccessibilityHelp',
          'undo',
          'redo',
          '|',
          'findAndReplace',
          '|',
          'heading',
          '|',
          'fontSize',
          // 'fontFamily',
          'fontColor',
          'fontBackgroundColor',
          '|',
          'alignment',
          '|',
          'bold',
          'italic',
          'underline',
          'strikethrough',
          'subscript',
          'superscript',
          'code',
          'removeFormat',
          '|',
          '|',
          'bulletedList',
          'numberedList',
          'todoList',
          'outdent',
          'indent',
          '|',
          'specialCharacters',
          'horizontalLine',
          'link',
          '|',
          // 'mediaEmbed',
          'highlight',
          'blockQuote',
          'codeBlock',
        ],
        shouldNotGroupWhenFull: false
      },
      plugins: [
        AccessibilityHelp,
        Alignment,
        Autoformat,
        AutoImage,
        AutoLink,
        Autosave,
        BalloonToolbar,
        BlockQuote,
        BlockToolbar,
        Bold,
        CloudServices,
        Code,
        CodeBlock,
        Essentials,
        FindAndReplace,
        FontBackgroundColor,
        FontColor,
        FontFamily,
        FontSize,
        GeneralHtmlSupport,
        Heading,
        Highlight,
        HorizontalLine,
        ImageBlock,
        ImageCaption,
        ImageInline,
        ImageInsertViaUrl,
        ImageResize,
        ImageStyle,
        ImageTextAlternative,
        ImageToolbar,
        ImageUpload,
        Indent,
        IndentBlock,
        Italic,
        Link,
        LinkImage,
        List,
        ListProperties,
        MediaEmbed,
        Paragraph,
        PasteFromOffice,
        RemoveFormat,
        SelectAll,
        SpecialCharacters,
        SpecialCharactersArrows,
        SpecialCharactersCurrency,
        SpecialCharactersEssentials,
        SpecialCharactersLatin,
        SpecialCharactersMathematical,
        SpecialCharactersText,
        Strikethrough,
        Subscript,
        Superscript,
        TextTransformation,
        TodoList,
        Underline,
        Undo
      ],
      balloonToolbar: ['heading','bold', 'italic', '|', 'link', '|', 'bulletedList', 'numberedList'],
      blockToolbar: [
        'heading',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'bold',
        'italic',
        '|',
        'link',
        '|',
        'bulletedList',
        'numberedList',
        'outdent',
        'indent'
      ],
      // fontFamily: {
      //   supportAllValues: true
      // },
      // fontSize: {
      //   options: [10, 12, 14, 'default', 18, 20, 22],
      //   supportAllValues: true
      // },
      heading: {
        options: [
          {
            model: 'paragraph',
            title: 'Paragraph',
            class: 'ck-heading_paragraph'
          },
          {
            model: 'heading1',
            view: 'h1',
            title: 'Heading 1',
            class: 'ck-heading_heading1'
          },
          {
            model: 'heading2',
            view: 'h2',
            title: 'Heading 2',
            class: 'ck-heading_heading2'
          },
          {
            model: 'heading3',
            view: 'h3',
            title: 'Heading 3',
            class: 'ck-heading_heading3'
          },
          {
            model: 'heading4',
            view: 'h4',
            title: 'Heading 4',
            class: 'ck-heading_heading4'
          },
          {
            model: 'heading5',
            view: 'h5',
            title: 'Heading 5',
            class: 'ck-heading_heading5'
          },
          {
            model: 'heading6',
            view: 'h6',
            title: 'Heading 6',
            class: 'ck-heading_heading6'
          }
        ]
      },
      htmlSupport: {
        allow: [
          {
            name: /^.*$/,
            styles: true,
            attributes: true,
            classes: true
          }
        ]
      },
      image: {
        toolbar: [
          'toggleImageCaption',
          'imageTextAlternative',
          '|',
          'imageStyle:inline',
          'imageStyle:wrapText',
          'imageStyle:breakText',
          '|',
          'resizeImage'
        ]
      },
      initialData: editor_data,
      language: 'es',
      link: {
        addTargetToExternalLinks: true,
        defaultProtocol: 'https://',
        decorators: {
          toggleDownloadable: {
            mode: 'manual',
            label: 'Downloadable',
            attributes: {
              download: 'file'
            }
          }
        }
      },
      list: {
        properties: {
          styles: true,
          startIndex: true,
          reversed: true
        }
      },
      placeholder: 'Escribe o pega tu contenido aquí',
      translations: [translations]
    };
    this.isLayoutReady = true;
  },
  methods: {
    onReady(editor) {
      Array.from(this.$refs.editorToolbarElement.children).forEach(child => child.remove());
      this.$refs.editorToolbarElement.appendChild(editor.ui.view.toolbar.element);
    }
  }
};
</script>

<template>
  <div
    class="editor-container editor-container_document-editor bg-secondary/30"
    ref="editorContainerElement"
  >
    <div
      v-show="toolbar"
      class="border-y editor-container__toolbar border-secondary"
      ref="editorToolbarElement"
    />

    <div class="editor-container__editor-wrapper ">
      <ScrollArea
        class="w-full  h-[calc(100vh-17rem)] max-h-[calc(100vh-17rem)] md:h-[calc(100vh-14.5rem)] @container md:max-h-[calc(100vh-14.5rem)] p-0 outline-none mx-auto"
        :class="toolbar ? '' : ' h-[calc(100vh-14rem)] max-h-[calc(100vh-14rem)] md:!h-[calc(100vh-12rem)] md:!max-h-[calc(100vh-12rem)] '"
      >
        <div class="max-w-3xl mx-auto @3xl:mt-6 editor-container__editor @3xl:bg-background ">
          <div
            ref="editorElement"
            class="max-w-full prose @3xl:border CkeditorCreate"
            spellcheck="false"
          >
            <ckeditor
              v-if="isLayoutReady"
              v-model="config.initialData"
              :editor="editor"
              :config="config"
              @ready="onReady"
            />
          </div>
        </div>
      </ScrollArea>
    </div>
  </div>
</template>
