export const formatFileTypes = (types: string[]) => {
  const typeMap: { [key: string]: string } = {
    "text/html": "HTML (.html, .htm, .shtml)",
    "text/css": "CSS (.css)",
    "text/xml": "XML (.xml)",
    "image/gif": "GIF (.gif)",
    "image/jpeg": "JPEG (.jpg, .jpeg)",
    "image/png": "PNG (.png)",
    "image/tiff": "TIFF (.tif, .tiff)",
    "image/svg+xml": "SVG (.svg)",
    "image/webp": "WebP (.webp)",
    "application/pdf": "PDF (.pdf)",
    "application/msword": "Word (.doc, .docx)",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      "Excel (.xls, .xlsx)",
    "application/vnd.ms-powerpoint": "PowerPoint (.ppt, .pptx)",
    "application/zip": "ZIP (.zip)",
    "application/x-rar-compressed": "RAR (.rar)",
    "application/octet-stream": "Binary (.bin, .exe, .dll, .iso, .img)",
    "audio/mpeg": "MP3 (.mp3)",
    "audio/wav": "WAV (.wav)",
    "audio/ogg": "OGG (.ogg)",
    "audio/midi": "MIDI (.midi)",
    "video/mp4": "MP4 (.mp4, .m4v)",
    "video/x-msvideo": "AVI (.avi)",
    "video/quicktime": "MOV (.mov)",
    "video/x-ms-wmv": "WMV (.wmv)",
    "video/x-flv": "FLV (.flv)",

    // Wildcard types
    "image/*": "All Images (.jpg, .jpeg, .png, .gif, .svg, .webp, .tif, .bmp)",
    "application/*":
      "All Applications (.pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .zip, .rar, .exe)",
    "audio/*": "All Audio Files (.mp3, .wav, .ogg, .midi)",
    "video/*": "All Video Files (.mp4, .avi, .mov, .wmv, .flv)",
  };

  const extensionMap: { [key: string]: string } = {
    ".html": "HTML (.html)",
    ".htm": "HTML (.htm)",
    ".shtml": "HTML (.shtml)",
    ".css": "CSS (.css)",
    ".xml": "XML (.xml)",
    ".gif": "GIF (.gif)",
    ".jpeg": "JPEG (.jpeg)",
    ".jpg": "JPEG (.jpg)",
    ".png": "PNG (.png)",
    ".tif": "TIFF (.tif)",
    ".tiff": "TIFF (.tiff)",
    ".svg": "SVG (.svg)",
    ".webp": "WebP (.webp)",
    ".pdf": "PDF (.pdf)",
    ".doc": "Word (.doc)",
    ".docx": "Word (.docx)",
    ".xls": "Excel (.xls)",
    ".xlsx": "Excel (.xlsx)",
    ".ppt": "PowerPoint (.ppt)",
    ".pptx": "PowerPoint (.pptx)",
    ".zip": "ZIP (.zip)",
    ".rar": "RAR (.rar)",
    ".bin": "Binary (.bin)",
    ".exe": "Binary (.exe)",
    ".dll": "Binary (.dll)",
    ".iso": "Binary (.iso)",
    ".img": "Binary (.img)",
    ".mp3": "MP3 (.mp3)",
    ".m4v": "MP4 (.m4v)",
    ".mp4": "MP4 (.mp4)",
  };

  return [
    ...new Set(
      types.map((type) => {
        if (type.startsWith(".")) {
          return extensionMap[type] || `Files (${type})`;
        }
        return typeMap[type] || `Files (${type})`;
      }),
    ),
  ].join(", ");
};
