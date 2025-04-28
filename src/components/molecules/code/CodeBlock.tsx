"use client"; // ถ้าใช้ Next.js App Router

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Button from "../../atoms/button/Button";
import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function CodeBlock({
  language,
  code,
  showLineNumbers = true,
}: CodeBlockProps) {
  // State to manage the copied status
  const [copied, setCopied] = useState(false);

  // Handle copy and change button text
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div
      className={clsx(
        "relative flex w-full max-w-full flex-col overflow-hidden",
        "text-sm",
        "rounded-lg",
      )}
    >
      <Button
        wFit
        className={clsx(
          "absolute right-2 top-2 z-10",
          "bg-transparent text-white hover:bg-zinc-700",
          "border border-zinc-600",
        )}
        onClick={handleCopy}
      >
        {copied ? (
          <CheckIcon className="size-4" />
        ) : (
          <ClipboardDocumentIcon className="size-4" />
        )}
      </Button>

      <div className={clsx("w-full max-w-full overflow-x-auto", "bg-zinc-900")}>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          className={clsx(
            "!relative !m-0 !w-full",
            "!bg-zinc-900",
            "!rounded-none",
          )}
          wrapLongLines
          showLineNumbers={showLineNumbers}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

interface CodeBlockProps {
  language: string;
  code: string;
  showLineNumbers?: boolean;
}
