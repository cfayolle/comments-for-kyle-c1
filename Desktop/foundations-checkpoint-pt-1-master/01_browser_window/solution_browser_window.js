function BrowserWindow(accountName, windowName, tabs) {
  this.accountName = accountName;
  this.windowName = windowName;
  if (tabs !== undefined) {
    this.tabs = tabs;
  } else {
    this.tabs = [Object({ tabURL: "defaultHomePage.com" })];
  }
}

BrowserWindow.prototype.joinWindows = function(window) {
  for (let i = 0; i < window.tabs.length; i++) {
    let currentTab = window.tabs[i];
    this.tabs.push(currentTab);
  }
};
BrowserWindow.prototype.newTab = function(page) {
  this.tabs.push(Object({ tabURL: `${page}` }));
};
BrowserWindow.prototype.closeTab = function(num) {
  this.tabs.splice(num, 1);
  if (this.tabs.length === 0) {
    this.tabs = [Object({ tabURL: "defaultHomePage.com" })];
  }
  return this.tabs;
};
