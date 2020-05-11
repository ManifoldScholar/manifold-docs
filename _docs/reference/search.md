---
layout: page
title: Phrasal Search
menu:
  reference:
    weight: 2
---

Every search bar in the Manifold application supports phrasal searches and negations.

Users can search for specific phrases enclosed in quotation marks to look for exact matches in runs of text (e.g., `"fear in the mind killer"`).

It is also possible to combine the quotation-mark operators with negations: users can append a minus sign before elements and phrases they wish to omit from search results (e.g., `-negate -this keep that` or `-"no to all of this"`).

In practice this means it's possible to search for `"fear is" -"fear itself"` to get results from Frank Herbert's *Dune* ("fear is the mind-killer") but not Roosevelt's speech.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Notes</strong>:
<ul>
<li>Quoting a phrase will still apply <a href="https://en.wikipedia.org/wiki/Stemming">stemming</a>, thus Manifold takes into account misspellings, ignores cases, etc.</li>
<li>When negations are employed, they follow the <code>NOR</code> paradigm instead of <code>NAND</code>. If a search includes <code>-apples -bananas</code> Manifold will exclude results that mention apples <em>or</em> bananas instead of excluding results that only include both apples and bananas.</li>
</ul>
</div>


