# Tharikida UI 🚀🔥
**A Naadan React Component Library for Building Fast and Fun UIs**  

Tharikida UI is a lightweight React component library packed with simplicity, style, and a touch of Kerala flair! Whether you're building personal projects or developing applications, Tharikida UI offers the perfect balance of performance and visual appeal.


---
(WORK IN PROGRES)
  :-)

[[VISIT WEBSITE](https://tharikida-ui.vercel.app/)]

## Features
- 🥥 **Naadan Design:** A clean, minimalistic design inspired by Kerala's vibrant yet simple aesthetic.  
- ⚡ **Fast and Lightweight:** Optimized for performance with minimal dependencies.  
- 🛠️ **Customizable:** Easy-to-use components with built-in theming support.  
- 🌴 **Ready to Use:** A growing list of pre-built, accessible components to enhance your UI.  

---

## Installation

You can easily add **Tharikida UI** to your React project via npm or yarn:

### Using npm:
```bash
npm install tharikida-ui
```
## Usage:
Once installed, you can start using Tharikida UI components in your React project.

Example:

```jsx
import React from 'react';
import { Button, Modal } from 'tharikida-ui';

const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div>
      <h1>Welcome to Tharikida UI!</h1>
      <Button onClick={() => setIsModalOpen(true)} type="primary">
        Open Modal
      </Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Tharikida Modal</h2>
        <p>This is a simple modal from Tharikida UI!</p>
      </Modal>
    </div>
  );
};

export default App;
```
## Components:
Tharikida UI includes the following components:

Button: Customizable buttons with various styles.

Customization
Tharikida UI is built to be flexible! You can easily customize the look and feel of components through props and CSS overrides.

Here’s an example of customizing the primary button color:

```jsx
<Button style={{ backgroundColor: '#F1C40F' }} type="primary">
  Custom Button
</Button>
```
For more advanced theming and customization options, refer to the documentation.
