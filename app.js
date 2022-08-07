// function destructuring
function saveSettings({ notifications, color: { theme } }) {
  console.log(notifications, theme);
}

saveSettings({
  notifications: {
    follow: true,
    alert: true,
    mkt: true,
  },
  color: {
    theme: "blue",
  },
});
