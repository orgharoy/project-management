"use client";
import React, { useState } from "react";
import CommentBox from "@/components/CommentBox";
import RichtextEditor from "@/components/ui/richtext-editor";
import { Button } from "@/components/ui/button";

const ProjectComments = () => {
  const [comment, setComment] = useState("");
  return (
    <div className="md:border md:shadow-sm rounded-xl md:p-5 space-y-5">
      <h4 className="font-semibold pb-5">Comments & Notes</h4>

      <div className="flex gap-3">
        <div className="w-7 h-7 bg-primary rounded-full flex-shrink-0 flex-groow-0 my-1" />
        <div className="space-y-2 w-full">
          <RichtextEditor
            content={comment}
            onChange={setComment}
            className="min-h-[60px]"
          />
          <Button>Comment</Button>
        </div>
      </div>

      <div className="space-y-5">
        <CommentBox />
        {/* <CommentBox /> */}
      </div>
    </div>
  );
};

export default ProjectComments;
