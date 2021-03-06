/*
 * As a user I should be able to:
 *   - click on the pluggin icon
 *     - see a popup
 *     - see a button with 'select element to peep'
 *     - click on the button
 *     - the popup closes
 *     - now I am in select mode
 *   - in select mode I should be able to:
 *     - highlight an hovered html element with an 'anchor' (data-testid for now)
 *     - click on the highlighted element
 *     - now I am in peeping mode
 *   - in peeping mode I should be able to:
 *     - see a new split with a firenvim Iframe
 *     - the file corresponding to the selected anchor is displayed
 *     - when I close the firenvim, I should be in anchor mode
 */

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { mode: 'select' });
});
