# Tharikida UI 🚀🔥

[![npm version](https://img.shields.io/npm/v/tharikida-ui.svg)](https://www.npmjs.com/package/tharikida-ui)
[![license](https://img.shields.io/npm/l/tharikida-ui.svg)](LICENSE)
[![downloads](https://img.shields.io/npm/dm/tharikida-ui.svg)](https://www.npmjs.com/package/tharikida-ui)

**A Naadan React Component Library for Fast, Fun, and Themed UIs**

Tharikida UI is a lightweight React component library inspired by Kerala's vibrant yet simple aesthetic. It offers a growing set of accessible, customizable, and themeable components for building beautiful modern apps with ease.

---

## Why Tharikida UI?

- 🏝️ **Kerala-inspired Design:** Unique, minimal, and vibrant UI components.
- ⚡ **Fast & Lightweight:** Minimal dependencies, optimized for performance.
- 🎨 **Theming Built-In:** Change colors, fonts, and corner radius globally with the `ThemeProvider`.
- 🛠️ **Customizable:** All components support custom styles, theming, and flexible props.
- ♿ **Accessible:** Components are built with accessibility in mind.
- 📦 **Ready-to-Use:** Includes Button, Modal, Card, Input, Alert, ProgressBar, List, Table, and more.

---

## Links

- 🌐 [Documentation & Playground](https://tharikida-ui.vercel.app/)
- 🗂️ [GitHub Repository](https://github.com/harinarayanan-kp/tharikida-ui)
- 📦 [NPM Package](https://www.npmjs.com/package/tharikida-ui)

---

## Installation

Install Tharikida UI in your React project:

```bash
npm install tharikida-ui
```

---

## Getting Started

Here's a quick example to get you up and running:

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

## Features

- 🌴 **Naadan Design:** Minimal, clean, and Kerala-inspired UI components.
- ⚡ **Fast & Lightweight:** Optimized for performance with minimal dependencies.
- 🎨 **Theming Built-In:** Change colors, fonts, and corner radius globally with the `ThemeProvider`.
- 🛠️ **Customizable:** All components support custom styles, theming, and flexible props.
- ♿ **Accessible:** Built with accessibility best practices.
- 📦 **Ready-to-Use:** Includes Button, Modal, Card, Input, Alert, ProgressBar, List, Table, and more.

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

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or want to add new components, please open an issue or submit a pull request on [GitHub](https://github.com/harinarayanan-kp/tharikida-ui).

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

For full documentation and advanced usage, see the docs site or explore the Playground!
