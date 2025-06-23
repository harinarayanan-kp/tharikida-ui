# Tharikida UI 🚀🔥

**A Naadan React Component Library for Fast, Fun, and Themed UIs**

Tharikida UI is a lightweight React component library inspired by Kerala's vibrant yet simple aesthetic. It offers a growing set of accessible, customizable, and themeable components for building beautiful modern apps with ease.

---

## Features

- 🌴 **Naadan Design:** Minimal, clean, and Kerala-inspired UI components.
- ⚡ **Fast & Lightweight:** Optimized for performance with minimal dependencies.
- 🎨 **Theming Built-In:** Change colors, fonts, and corner radius globally with the `ThemeProvider`.
- 🛠️ **Customizable:** All components support custom styles, theming, and flexible props.
- 📦 **Ready-to-Use:** Includes Button, Modal, Card, Input, Alert, ProgressBar, List, Table, and more.

---

## Installation

Install Tharikida UI in your React project:

```bash
npm install tharikida-ui
```

---

## Usage Example

Wrap your app (or a part of it) with the `ThemeProvider` to enable theming. Then use any component, such as `Button`:

```jsx
import React from "react";
import { ThemeProvider } from "tharikida-ui";
import { Button } from "tharikida-ui/button";

const App = () => (
  <ThemeProvider
    primaryColor="#4caf50"
    secondaryColor="#ff9800"
    fontFamily="'Montserrat', sans-serif"
    cornerRadius={16}
  >
    <h1>Welcome to Tharikida UI!</h1>
    <Button type="primary" onClick={() => alert("Clicked!")}>
      Themed Button
    </Button>
  </ThemeProvider>
);

export default App;
```

---

## Playground

Want to experiment with theming and components live? **Visit the Playground on the homepage!** Tweak colors, font, and corner radius, and see instant updates with code samples.

---

## Components

Tharikida UI includes:

- **Button:** Customizable, theme-aware buttons
- **Modal:** Simple modal dialogs
- **Input:** TextInput, CheckBox, RadioButton, DropDown, TextArea, ToggleSwitch
- **Card:** Flexible content containers
- **Alert:** Popup alerts
- **ProgressBar:** Sleek progress indicators
- **List & ListTile:** Structured lists
- **Table:** Themed data tables
- **Snackbar, Tooltip, Loader, and more!**

---

## Customization & Theming

All components support custom styles via props. For global theming, use the `ThemeProvider` to set primary/secondary colors, font, and corner radius. You can also override styles and corner radius per component.

---

For full documentation and advanced usage, see the docs site or explore the Playground!
