"use strict";
/* Guild Wars skill template codes: decode to {professions, attributes, skills} and encode back.
   Ported from the author's earlier template tools. */

const TemplateCode = (() => {
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const INDEX = Object.fromEntries([...ALPHABET].map((c, i) => [c, i]));

  // Each base64 character holds 6 bits, least significant bit first.
  function toBits(code) {
    const bits = [];
    for (const c of code.trim()) {
      const v = INDEX[c];
      if (v === undefined) throw new Error(`Invalid character "${c}" in template code`);
      for (let i = 0; i < 6; i++) bits.push((v >> i) & 1);
    }
    return bits;
  }

  function fromBits(bits) {
    let out = "";
    for (let i = 0; i < bits.length; i += 6) {
      let v = 0;
      for (let j = 0; j < 6; j++) v |= (bits[i + j] || 0) << j;
      out += ALPHABET[v];
    }
    return out;
  }

  function decode(code) {
    const bits = toBits(code);
    let pos = 0;
    const read = len => {
      if (pos + len > bits.length) throw new Error("Template code is too short");
      let v = 0;
      for (let i = 0; i < len; i++) v |= bits[pos + i] << i;
      pos += len;
      return v;
    };
    const header = read(4);
    if (header === 14) read(4); // version
    else if (header !== 0) throw new Error("Not a skill template code");
    const profLen = read(2) * 2 + 4;
    const professions = [read(profLen), read(profLen)];
    const attrCount = read(4);
    const attrLen = read(4) + 4;
    const attributes = [];
    for (let i = 0; i < attrCount; i++) attributes.push({ id: read(attrLen), rank: read(4) });
    const skillLen = read(4) + 8;
    const skills = [];
    for (let i = 0; i < 8; i++) skills.push(read(skillLen));
    return { professions, attributes, skills };
  }

  const bitLength = n => (n > 0 ? Math.floor(Math.log2(n)) + 1 : 1);

  function encode({ professions, attributes, skills }) {
    const bits = [];
    const write = (v, len) => { for (let i = 0; i < len; i++) bits.push((v >> i) & 1); };
    write(14, 4);
    write(0, 4);
    write(0, 2); // 4 bits per profession
    write(professions[0], 4);
    write(professions[1], 4);
    const attrs = attributes.filter(a => a.rank > 0);
    write(attrs.length, 4);
    const attrLen = Math.max(4, bitLength(Math.max(0, ...attrs.map(a => a.id))));
    write(attrLen - 4, 4);
    for (const a of attrs) { write(a.id, attrLen); write(a.rank, 4); }
    const skillLen = Math.max(8, bitLength(Math.max(0, ...skills)));
    write(skillLen - 8, 4);
    for (let i = 0; i < 8; i++) write(skills[i] || 0, skillLen);
    while (bits.length % 6) bits.push(0);
    return fromBits(bits);
  }

  return { decode, encode };
})();
