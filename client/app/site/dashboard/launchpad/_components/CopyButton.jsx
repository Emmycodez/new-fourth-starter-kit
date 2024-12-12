'use client';

import { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Copy, Check } from 'lucide-react';

function CopyButton({ id }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(() => {
    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(id);
        setIsCopied(true);
      } catch (err) {
        console.error('Failed to copy: ', err);
        // Fallback method
        const textArea = document.createElement("textarea");
        textArea.value = id;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          setIsCopied(true);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
      }
    };

    copyToClipboard();
    
    // Reset the button state after 2 seconds
    setTimeout(() => setIsCopied(false), 2000);
  }, [id]);

  return (
    <Button
      size="sm"
      onClick={handleCopy}
      className="m-4"
      variant={isCopied ? "outline" : "default"}
    >
      {isCopied ? (
        <>
          Copied!
          <Check className="ml-2 h-4 w-4" />
        </>
      ) : (
        <>
          Copy User ID
          <Copy className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export default CopyButton;

