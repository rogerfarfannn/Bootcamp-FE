<h1>Main concepts and differences between <strong>"vh, dvh, fr, rem and em"</strong> </h1>
<h4>There are many length units in css, each one has different characteristics.
  In order to know when we can use them, it is important to  understand the specific characteristics of all of them</h4>
<h3>VH</h3>
<p>
  `vh` is used to provide a measurement of the screen's viewport height. In this case, 
  the viewport's optimal size is used. However, this measurement does not react dynamically to 
  changes in the viewport. Each `vh` (1vh) represents a percentage of the viewport, 
  where 100vh would represent 100% of the screen height.
</p>

<hr/>

<h3>DVH</h3>
<p>
On the other hand, "dvh" works very similarly to vh, but it has a special feature: it reacts dynamically to changes in the 
  viewport. This is why it's very used in mobile phones, as it takes into account navigation bars, which can appear or disappear.
</p>
<hr/>
<p>
  Both vh and dvh represent a measurement (a percentage) relative to the screen height.
  There is also "svh", which typically works with the least optimal screen size (the smallest
  possible size, taking into account navigation bars and other elements), but it also doesn't react dynamically. 
  Similarly, we can work with the viewport's "width" using "dvw", "vw," and "sw."
</p>
<hr/>

<h3>FR</h3>
<p>
  `fr` (Fragment) is used with CSS Grid, along with the `grid-template-columns` or `grid-template-rows` attributes.
  Each `fr` represents a fraction of the screen (either a column or a row), where the number of divisions is specified
  by the number of `fr` units separated by spaces. For example, if we use:
<br/>
 `grid-template-columns: 3fr 1fr 2fr`
<br/>
  We will have three columns. The first will occupy 3/6 of the screen (or 1/2), the second 1/6, and the third 2/6 (or 1/3).

If we set one column to "auto" and the others to "fr", the remaining space (after "auto" occupies its space) will be divided among the other columns `grid-template-columns: auto 3fr 1fr`
</p>
<hr/>

<h3>REM</h3>
<p>
  `rem` is commonly used to set measurements based on the font size of the root tag ("html"). For example, if the font size in `<html>` is 17px,
2 `rem` will represent 34px. Unlike `em`, `rem` is always relative to the root tag.
</p>
<hr/>

<h3>EM</h3>
<p>
  Finally, "em" has similar characteristics to "rem", with the major difference being that "em" will always
  be relative to the font size of its parent container (not necessarily the root). While this can be advantageous,
  it can also lead to confusion and complications if not handled properly, which is why "rem" is often preferred.
</p>
<hr/>
<p>
  In summary, VH and DVH represent a percentage of the viewport height, and dvh reacts dynamically to it. FR represents a fragment of the screen and is used with CSS grids. Additionally, "em" and "rem" are relative to the font size; rem is always relative to the root tag, and "em" to the parent tag.
</p>
<p>Source: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length">MDN Web Docs</a></p>
