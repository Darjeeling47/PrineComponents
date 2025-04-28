// Customize your salt at config level and put the value here
const salt = "";

export function encodeId(id: number | string) {
  const raw = `${id}-${salt}`;
  return Buffer.from(raw).toString("base64url"); // 'base64url' avoids URL-unsafe characters
}

export function decodeId(encoded: string) {
  try {
    const decoded = Buffer.from(encoded, "base64url").toString("utf-8");
    const [id, key] = decoded.split("-");
    return key === salt ? id : null;
  } catch {
    return null;
  }
}

export function isValidEncodedId(encoded: string) {
  const decoded = decodeId(encoded);
  return decoded !== null;
}
