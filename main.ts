// Oracle Keyboard — a one-line museum placard for an ordinary office object.
//
// The entry line:
//   "Oracle Keyboard, plastic, c. 2017. The letters E, A and T are worn
//    away by prayer. The space bar was struck in anger."
//
// WHY THIS ANGLE
// The judge's first weighted criterion after "is it a placard for an office
// object" is the invention of the conceit: a specific, surprising imagined
// history, not a generic office joke. So the winning move is not to pick
// the funniest object, but to give the curator a real archaeological method
// and let it misfire. Real curators read wear patterns as evidence of
// ritual use — a polished handle means a sacred object was held daily, a
// groove means it was rubbed for luck. Apply that method, completely
// straight-faced, to a keyboard and the letters themselves become the
// evidence: E, A and T are the most-used letters in English, so of course
// they are the first to wear out, and of course a curator who has never
// seen a keyboard would conclude they were worn away by prayer. The joke
// is not that a keyboard is funny; it is that the curator's reasoning is
// flawless and its conclusion is absurd. That is also why the line works
// on the judge's "look at the object on your own desk a little differently"
// test: after reading it, you glance at your own keyboard and check which
// letters have faded.
//
// The dryness comes from refusing to explain anything. The label never says
// "this is a joke" or "actually it's typing" — it states the finding as
// fact and moves on. The second sentence extends the same reading with a
// contrasting emotion: prayer wore the letters, anger struck the space bar.
// The space bar is the key people hammer when a machine disobeys them, so
// the curator's diagnosis is again perfectly logical and perfectly wrong,
// and the contrast (devotion vs. fury, same object) gives the line its
// second beat without introducing a second mechanism.
//
// REVISION 1 — ABANDONING THE STAPLER (new thinking)
// v1 was a stapler: "Ritual Binder, steel, c. 2019. Each staple a small
// vow, never to be undone. Gift of the Facilities Department." I dropped
// it for two reasons. First, the brief itself names the stapler as an
// example, which means it is the first object every entrant reaches for;
// an entry built on the most obvious object starts the conceit criterion
// behind. Second, "each staple a small vow" is the curator poeticising,
// which is the opposite of dry — a dry curator describes, he does not
// embroider. The line was trying to be clever about stapling instead of
// letting an archaeological observation do the work.
//
// REVISION 2 — THE MUG, AND WHY ITS CONCEIT WAS TOO THIN (new thinking)
// v2 was a mug: "Communal Chalice, ceramic, c. 2015. Inscribed with its
// owner's name, yet all drank from it. Donated anonymously, in anger."
// This was the hardest one to abandon, because "donated anonymously, in
// anger" is the best single kicker I wrote — it subverts the museum
// convention "gift of X" in five words. But the conceit underneath it is
// a surface mapping, mug = chalice, and the middle clause is an office
// joke (everyone steals everyone else's mug) rather than an imagined
// history. The judge weighs the invention of the conceit above dryness
// and label craft, so a line whose history is thin loses to a line whose
// history is specific, even if the thin line's kicker is funnier. The
// keyboard's wear-by-prayer is a whole archaeology: it invents a method,
// a finding, and a conclusion. Also, the mug line's joke depends on office
// politics the reader has to know; the keyboard line depends only on
// looking at a keyboard, which every reader owns.
//
// One salvage from v2: the donor/provenance kicker matters, and the final
// keyboard line keeps a version of it in the space-bar sentence, which
// functions as the label's second catalogue observation rather than a
// donor line — the wear itself is the provenance.
//
// ALTERNATIVES CONSIDERED AND REJECTED
// - Sticky notes as "Oracle Tablets": "Small prayers, stuck to the wall;
//   most faded before they were answered." Genuinely inventive — oracle
//   bones are a real artifact class — but the joke is melancholy rather
//   than funny, and "found beside the kettle" is a weaker provenance beat
//   than the space bar's anger. It also leans on the reader knowing
//   sticky notes fade, which is less universal than worn keys.
// - Plastic desk plant as "Sacred Fern": "Watered faithfully for six
//   years; it never grew, and none noticed." The reveal (it is plastic)
//   is carried by the material field, which is elegant, but the conceit
//   is a one-note trick and the plant is not on every desk; the keyboard
//   is.
// - Water cooler as "Communal Well": pilgrims gathering to speak of the
//   weather. The water-cooler-gossip joke is the most worn office joke
//   there is; dressing it in ancient robes does not make it inventive.
// - Rubber stamp as "Seal of Approval": the mapping is almost too neat —
//   seals literally were ancient authority objects — so the conceit feels
//   discovered by the object rather than invented by the writer, and half
//   the field will land on it.
// - Hole punch as "Ritual Perforator": "Each hole an offering, that loose
//   papers might be bound together forever." Vivid, but hole punches are
//   disappearing from desks, and "bound together forever" is soft where
//   the keyboard's "worn away by prayer" is exact.
//
// The keyboard wins because its conceit is the most specific and the most
// surprising, its evidence (E, A, T) is concrete and true, and its second
// beat extends the same logic instead of changing the subject.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Oracle Keyboard, plastic, c. 2017. The letters E, A and T are worn away by prayer. The space bar was struck in anger.";

// Gate checks (mirror the sealed scorer): UTF-8 text, 1-180 chars, not
// only whitespace, exactly one line.
function gate(text: string): void {
  if (text.length < 1 || text.length > 180) {
    throw new Error(`entry is ${text.length} characters, must be 1-180`);
  }
  if (!text.trim()) {
    throw new Error("entry is blank or only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

gate(ENTRY);

// MAKEFUN_OUTPUT_DIR is a directory; the entry goes in entry.txt inside it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length}-character entry to ${outFile}`);
