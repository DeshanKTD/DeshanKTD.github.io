const citation = document.querySelector('.citation-block');
const copyButton = document.querySelector('.copy-button');
const copyStatus = document.querySelector('.copy-status');

if (citation && copyButton && citation.dataset.placeholder !== 'true') {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citation.textContent.trim());
      copyStatus.textContent = 'Citation copied.';
    } catch (error) {
      copyStatus.textContent = 'Select the citation text and copy it manually.';
    }
  });
}
