import React from "react";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";

const Editor = ({ content, setContent, className }) => {
  return (
    <div className={className}>
      <FroalaEditorComponent
        model={content}
        onModelChange={(e) => setContent(e)}
        config={{
          heightMin: "69vh",
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
              buttonsVisible: 4,
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
              buttonsVisible: 4,
            },

            moreRich: {
              buttons: [
                "insertLink",
                "insertTable",
                "emoticons",
                "specialCharacters",
                "insertHR",
              ],
              buttonsVisible: 5,
            },

            moreMisc: {
              buttons: [
                "undo",
                "redo",
                "fullscreen",
                "print",
                "getPDF",
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
