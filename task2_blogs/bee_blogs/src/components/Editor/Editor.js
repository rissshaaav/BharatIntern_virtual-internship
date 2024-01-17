import React from "react";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";

const Editor = ({ content, setContent }) => {
  return (
    <div>
      <FroalaEditorComponent
        model={content}
        onModelChange={(e) => setContent(e)}
        config={{
          heightMin: "87vh",
          placeholderText: "Start writing your blog here...",
          toolbarButtons: {
            moreText: {
              buttons: [
                "bold",
                "italic",
                "underline",
                "strikeThrough",
                "subscript",
                "superscript",
                "fontFamily",
                "fontSize",
                "textColor",
                "backgroundColor",
                "clearFormatting",
              ],
            },

            moreParagraph: {
              buttons: [
                "alignLeft",
                "alignCenter",
                "alignRight",
                "alignJustify",
                "formatOL",
                "formatUL",
                "paragraphFormat",
                "paragraphStyle",
                "lineHeight",
                "outdent",
                "indent",
                "quote",
              ],
            },

            moreRich: {
              buttons: [
                "insertLink",
                "insertTable",
                "emoticons",
                "specialCharacters",
                "embedly",
                "insertHR",
              ],
            },

            moreMisc: {
              buttons: [
                "undo",
                "redo",
                "fullscreen",
                "print",
                "getPDF",
                "spellChecker",
                "selectAll",
                "html",
                "help",
              ],

              align: "right",

              buttonsVisible: 2,
            },
          },
        }}
      />
    </div>
  );
};

export default Editor;
