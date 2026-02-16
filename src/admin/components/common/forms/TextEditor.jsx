import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function TextEditor({label}) {
  return (
    <div className="w-full">
      <label className="block font-medium text-[13px] text-[#18181B] font-OpenSans mb-2">
        {label}
      </label>

      <div className="border rounded-md">
        <CKEditor
          editor={ClassicEditor}
          data=""
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log(data);
          }}
        />
      </div>
    </div>
  );
}
