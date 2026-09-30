const tabList = document.querySelector('[role="tablist"]');
const tabs = [...tabList.querySelectorAll('[role="tab"]')];

function select(tab, moveFocus, writeHash = true) {
  for (const other of tabs) {
    const on = other === tab;
    other.setAttribute("aria-selected", String(on));
    other.tabIndex = on ? 0 : -1;
    document.getElementById(other.getAttribute("aria-controls")).hidden = !on;
  }
  if (writeHash) {
    history.replaceState(null, "", "#" + tab.id.replace("tab-", ""));
  }
  if (moveFocus) tab.focus();
}

tabList.addEventListener("click", (event) => {
  const tab = event.target.closest('[role="tab"]');
  if (tab) select(tab, false);
});

tabList.addEventListener("keydown", (event) => {
  const current = tabs.findIndex((tab) => tab.getAttribute("aria-selected") === "true");
  let next = current;
  if (event.key === "ArrowRight") next = (current + 1) % tabs.length;
  else if (event.key === "ArrowLeft") next = (current - 1 + tabs.length) % tabs.length;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = tabs.length - 1;
  else return;
  event.preventDefault();
  select(tabs[next], true);
});

function tabFromHash() {
  const tab = document.getElementById("tab-" + location.hash.slice(1));
  return tabs.includes(tab) ? tab : null;
}

// Panels ship visible so the page still reads without JavaScript. This
// first call is what collapses them into tabs.
select(tabFromHash() || tabs[0], false, false);

window.addEventListener("hashchange", () => {
  const tab = tabFromHash();
  if (tab) select(tab, false, false);
});
