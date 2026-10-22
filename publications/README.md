# Publication pages

Each first-author publication has its own folder and editable `index.html`.
Open the portfolio homepage and follow a **Project page** link to preview it.

To fill out a page:

1. Search its HTML for `TODO` and replace the bracketed placeholder text.
2. Create an `images` folder beside that page's `index.html`. Replace each
   `figure-placeholder` div with an image, for example:
   `<img src="images/overview.png" alt="Description of the figure" width="1200" height="675">`.
   Set width and height to the image's actual dimensions, and edit the caption.
3. Add any code, data, poster, or slides links in `resource-links`.
4. Verified bibliographic details are already included as BibTeX. You can replace
   the citation's `<code>` contents with a publisher export if desired. On future
   placeholder pages, remove `data-placeholder="true"` to show Copy BibTeX.
   Escape HTML characters such as `&` and `<` when inserting text into HTML.

Shared styles are in `css/publication.css`, layered over `css/minimal.css`.
The homepage and publication pages use `js/theme.js` and the same saved theme.
No build step or dependencies are required.

## Content sources

The OCT review and leaf-disease pages contain concise, paraphrased abstract
summaries and research details, with source links at the bottom of each page.
They do not reproduce the verbatim abstracts. Figures remain placeholders.
The colon paper's title, venue, authors, and DOI were verified, but an accessible
primary-source abstract/full text was unavailable; its detailed content remains
marked for completion. BibTeX entries were assembled from verified metadata.
